import { Request } from 'express';
import db from '../../models'

export const postProduct = async (req: Request) => {
  const { name, description, price, stock } = req.getBody()
  return db.Product.create({
    name,
    description,
    price,
    stock
  });
};
