import { Request, Response, NextFunction } from 'express';
import controller from '../../../../routes/controller';

import { getProduct } from './getProduct';
import { getProducts } from './getProducts';
import { postProduct } from './postProduct';
import { patchProduct } from './patchProduct';
import { deleteProduct } from './deleteProduct';

const getProductsList = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  await controller(req, res, next, getProducts);
};

const getProductById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  await controller(req, res, next, getProduct);
};

const createProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  await controller(req, res, next, postProduct);
};

const updateProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  await controller(req, res, next, patchProduct);
};

const removeProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  await controller(req, res, next, deleteProduct);
};

export { getProductsList, getProductById, createProduct, updateProduct, removeProduct };
