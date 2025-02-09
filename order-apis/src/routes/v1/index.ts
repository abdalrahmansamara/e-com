import express, { Router } from 'express';
import { healthCheck } from './healthcheck';
import { ordersRouter } from './orders'

const v1: Router = express.Router();

v1.get('/healthcheck', healthCheck);
v1.use('/orders', ordersRouter)

export { v1 };
