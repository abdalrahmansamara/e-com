import { Request } from 'express';
import db from '../../models'

export const deleteProduct = async (req: Request) => {
  const { id } = req.getParams()
  const results = await db.Product.destroy({
    where: {
      id
    }
  })
  return results ? {message: `Product ${id} was deleted successfully!`} : results
};
