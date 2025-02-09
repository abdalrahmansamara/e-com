import { Request } from 'express';

import { CustomError, exceptions } from '../../../../classes/errors';
import db from '../../models';

export const patchOrder = async (req: Request) => {
  const body = req.getBody();
  const { id } = req.getParams();

  const [updatedRows] = await db.Order.update(body, {
    where: { id },
  });

  if (updatedRows === 0) {
    Log.error("Order does not exist!", { orderId: id })
    throw new CustomError({ ...exceptions.invalidRequest, message: `Order with ID ${id} Does not exist ` })
  }
  Log.info("Order updated successfully!", { orderId: id })
  return { message: `Order ${id} was updated successfully!` };
};
