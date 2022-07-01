import { getRepository, Repository } from "typeorm"
import { Product } from "../entities/Product"

export interface IProductRepository {
    create(data: ProductDTO): Promise<Product>
}

type ProductDTO = {
    name: string
    ean: string
    price: number
}

export class ProductRepository implements IProductRepository {

    private repository: Repository<Product>

    constructor() {
        this.repository = getRepository(Product)
    }

    async create(data: ProductDTO): Promise<Product> {
        const product = this.repository.create(data)
        await this.repository.save(product)
        return product
    }
}