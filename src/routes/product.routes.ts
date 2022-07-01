import { Router } from "express";
import { CreateProductController } from '../modules/products/controllers/CreateProductController'

export const productRoutes = Router()

const productController = new CreateProductController()

productRoutes.post('/', productController.handle)