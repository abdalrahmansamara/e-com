import express, { Router } from 'express';

import validate from "../../../middlewares/validate";
import { getProductSchema, getProductsSchema, postProductSchema, patchProductSchema, deleteProductSchema } from "./schema";
import { getProductsList, getProductById, createProduct, updateProduct, removeProduct } from '../../../services/sequelize/queries/products';

const productsRouter: Router = express.Router();

productsRouter.get('/', validate(getProductsSchema), getProductsList)

productsRouter.get('/:id', validate(getProductSchema), getProductById)

productsRouter.post('/', validate(postProductSchema), createProduct)

productsRouter.patch('/:id', validate(patchProductSchema), updateProduct)

productsRouter.delete('/:id', validate(deleteProductSchema), removeProduct)

export { productsRouter }
