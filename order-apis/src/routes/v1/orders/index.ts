import express, { Router } from 'express';

import validate from "../../../middlewares/validate";
import { getOrderSchema, getOrdersSchema, postOrderSchema, patchOrderSchema, deleteOrderSchema } from "./schema";
import { getOrdersList, getOrderById, createOrder, updateOrder, removeOrder } from '../../../services/sequelize/queries/orders';

const ordersRouter: Router = express.Router();

ordersRouter.get('/', validate(getOrdersSchema), getOrdersList)

ordersRouter.get('/:id', validate(getOrderSchema), getOrderById)

ordersRouter.post('/', validate(postOrderSchema), createOrder)

ordersRouter.patch('/:id', validate(patchOrderSchema), updateOrder)

ordersRouter.delete('/:id', validate(deleteOrderSchema), removeOrder)

export { ordersRouter }
