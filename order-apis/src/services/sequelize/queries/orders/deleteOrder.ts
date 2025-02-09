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
    Log.info("Order was Cancelled successfully!", { orderId: id })
    return { message: `Order ${id} was cancelled successfully!` }
  }
  Log.error("Order id doesn't exist or it's already Cancelled!", { orderId: id })
  throw new CustomError({ ...exceptions.invalidRequest, message: `Order ${id} is already cancelled or does not exist` })
};
