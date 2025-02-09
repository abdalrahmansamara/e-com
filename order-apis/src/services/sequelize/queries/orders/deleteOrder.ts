import { Op } from 'sequelize';
import { CustomError, exceptions } from '../../../../classes/errors';
import { Request } from 'express';
import db from '../../models';

export const deleteOrder = async (req: Request) => {
  const { id } = req.getParams();

  const [updatedRows] = await db.Order.update(
    { status: 'cancelled' },
    {
      where: {
        id,
        status: { [Op.ne]: 'cancelled' }
      }
    }
  );

  if (updatedRows > 0) {
    return { message: `Order ${id} was cancelled successfully!` }
  }
  throw new CustomError({ ...exceptions.invalidRequest, message: `Order ${id} is already cancelled or does not exist` })
};
