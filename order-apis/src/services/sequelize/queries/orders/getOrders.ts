import { Request } from 'express';
import db from '../../models';

export const getOrders = async (req: Request) => {
  const { size, page, status, paymentStatus, deliveryStatus, sortBy, sortOrder } = req.getQuery();

  const filters = {
    ...(status && { status }),
    ...(paymentStatus && { paymentStatus }),
    ...(deliveryStatus && { deliveryStatus }),
  };

  const orderField = sortBy || 'createdAt';
  const orderDirection = sortOrder || 'asc';

  return db.Order.findAndCountAll({
    where: filters,
    limit: size,
    offset: (page - 1) * size,
    order: [[orderField, orderDirection]],
    include: [
      {
        model: db.Product,
        attributes: ['id', 'name', 'description', 'price'],
        through: { attributes: ['quantity'] },
        required: false,
      },
    ],
    distinct: true,
  });
};
