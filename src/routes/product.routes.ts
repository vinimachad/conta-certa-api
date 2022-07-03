import { Router } from "express";
import { GetProductController } from "../modules/products/controllers/Get/GetProductController";
import { CreateProductController } from '../modules/products/controllers/CreateProductController'

export const productRoutes = Router()

const createProductController = new CreateProductController()
const getProductController = new GetProductController()

productRoutes.post('/', createProductController.handle)
productRoutes.get('/:ean', getProductController.handle)