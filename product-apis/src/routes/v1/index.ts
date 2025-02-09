import express, { Router } from 'express';
import { healthCheck } from './healthcheck';
import { productsRouter } from './products'

const v1: Router = express.Router();

v1.get('/healthcheck', healthCheck);
v1.use('/products', productsRouter)

export { v1 };
