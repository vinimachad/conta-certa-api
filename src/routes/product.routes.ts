import { Router } from "express";
import { CreateProductController } from '../modules/products/controllers/CreateProductController'
import { ListProductController } from "../modules/products/controllers/Get/ListProductController";
import { GetProductController } from "../modules/products/controllers/GetByID/GetProductController";

export const productRoutes = Router()

const createProductController = new CreateProductController()
const getProductController = new GetProductController()
const listProductController = new ListProductController()

productRoutes.post('/', createProductController.handle)
productRoutes.get('/', listProductController.handle)
productRoutes.get('/:ean', getProductController.handle)