import { container } from "tsyringe";
import { IProductRepository, ProductRepository } from "../modules/products/repositories/ProductRepository";

container.registerSingleton<IProductRepository>("ProductRepository", ProductRepository)