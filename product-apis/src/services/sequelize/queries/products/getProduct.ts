import { Request } from 'express';
import db from '../../models'

export const getProduct = async (req: Request) => {
  const { id } = req.getParams()
  return db.Product.findOne({
    where: {
      id
    }
  })
};
