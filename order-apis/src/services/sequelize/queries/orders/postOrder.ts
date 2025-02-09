import { Request } from 'express';
import { Transaction } from 'sequelize';
import db from '../../models';
import { createInvoice } from '../../../recurlyService';

const calculateTotalPrice = async (products: { productId: string, quantity: number }[], transaction: Transaction) => {
  let totalAmount = 0;
  await Promise.all(products.map(async ({ productId, quantity }) => {
    const dbProduct = await db.Product.findByPk(productId);

    if (!dbProduct) {
      throw new Error(`Product does not exist: ${productId}`);
    }

    if (dbProduct.stock < quantity) {
      throw new Error(`Product quantity unavailable: ${productId}, available quantity: ${dbProduct.stock}`);
    }

    totalAmount += quantity * dbProduct.price;
    dbProduct.stock = dbProduct.stock - quantity;
    await dbProduct.save({ transaction });

  }));

  return totalAmount
};

export const postOrder = async (req: Request) => {
  const {
    user_id,
    customerName,
    shippingAddress,
    billingAddress,
    currency,
    paymentMethod,
    paymentStatus,
    trackingNumber,
    deliveryStatus,
    notes,
    products
  } = req.getBody();
  const transaction = await req.getTransaction();
  const totalAmount = await calculateTotalPrice(products, transaction)
  const order = await db.Order.create({
    user_id,
    customerName,
    shippingAddress,
    billingAddress,
    totalAmount,
    status: 'Pending',
    currency: currency || 'USD',
    paymentMethod: paymentMethod || 'Visa',
    paymentStatus: paymentStatus || 'Pending',
    trackingNumber,
    deliveryStatus,
    notes,
  }, { transaction });

  const orderProducts = products.map((product: { productId: string, quantity: number }) => ({
    orderId: order.id,
    productId: product.productId,
    quantity: product.quantity,
  }));
  await db.OrderProduct.bulkCreate(orderProducts, { transaction });
  await createInvoice(totalAmount)
  // call recurly to create the transaction
  Log.info("Order was created successfully!", { orderId: order.id })
  await transaction.commit()
  return order;
};
