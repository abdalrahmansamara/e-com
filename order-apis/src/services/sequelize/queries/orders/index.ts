import { Request, Response, NextFunction } from 'express';
import controller from '../../../../routes/controller';

import { getOrder } from './getOrder';
import { getOrders } from './getOrders';
import { postOrder } from './postOrder';
import { patchOrder } from './patchOrdert';
import { deleteOrder } from './deleteOrder';

const getOrdersList = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  await controller(req, res, next, getOrders);
};

const getOrderById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  await controller(req, res, next, getOrder);
};

const createOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  await controller(req, res, next, postOrder);
};

const updateOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  await controller(req, res, next, patchOrder);
};

const removeOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  await controller(req, res, next, deleteOrder);
};

export { getOrdersList, getOrderById, createOrder, updateOrder, removeOrder };
