import { Request } from 'express';

import { CustomError, exceptions } from '../../../../classes/errors';
import db from '../../models';

export const patchOrder = async (req: Request) => {
  const body = req.getBody();
  const { id } = req.getParams();

  // Perform the update
  const [updatedRows] = await db.Order.update(body, {
    where: { id },
  });

  if (updatedRows === 0) {
    throw new CustomError({ ...exceptions.invalidRequest, message: `Order with ID ${id} Does not exist ` })
  }

  return { message: `Order ${id} was updated successfully!` };
};
