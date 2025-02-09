import { Request } from 'express';
import db from '../../models'
import { createProduct } from '../../../recurlyService';

export const postProduct = async (req: Request) => {
  const { name, description, price, stock } = req.getBody()
  const transaction = await req.getTransaction()
  const item = await db.Product.create({
    name,
    description,
    price,
    stock
  }, { transaction });
  await createProduct(item.id, name, description, price, stock)
  Log.info("Item was created successfully!", { id: item.id, description })
  await transaction.commit()
  return item
};
