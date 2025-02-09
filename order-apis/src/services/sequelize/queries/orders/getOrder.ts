import { Request } from 'express';
import db from '../../models';

export const getOrder = async (req: Request) => {
  const { id } = req.params;  // use `req.params` instead of `getParams()` for express

  return db.Order.findOne({
    where: {
      id,
    },
    include: [
      {
        model: db.Product,
        attributes: ['id', 'name', 'description', 'price'],
        through: { attributes: ['quantity'] },
        required: false,
      },
    ],
  });
};
