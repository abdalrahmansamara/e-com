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
  return updatedRows ? {message: `Product ${id} was updated successfully!`} : updatedRows
};
