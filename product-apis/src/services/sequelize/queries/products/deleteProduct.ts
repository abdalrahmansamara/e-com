import { Request } from 'express';
import db from '../../models'

export const deleteProduct = async (req: Request) => {
  const { id } = req.getParams()
  const results = await db.Product.destroy({
    where: {
      id
    }
  })
  if (results) {
    Log.info("Product deleted successfully!", { productId: id })
    return { message: `Product ${id} was deleted successfully!` }
  }
  Log.error("Product doesn't exist!", { productId: id })
  return results
};
