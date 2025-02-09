import { Request } from 'express';
import db from '../../models'

export const patchProduct = async (req: Request) => {
  const { name, description, price, stock } = req.getBody()
  const { id } = req.getParams()
  const [updatedRows] = await db.Product.update(
    {
      name,
      description,
      price,
      stock,
    },
    {
      where: { id },
    }
  );
  if (updatedRows) {
    Log.info("Product updated successfully!", { productId: id })
    return { message: `Product ${id} was updated successfully!` }
  }
  Log.error("Product doesn't exist!", { productId: id })
  return updatedRows
};
