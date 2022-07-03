import { getRepository, Repository } from "typeorm"
import { Product } from "../entities/Product"

export interface IProductRepository {
    create(data: ProductDTO): Promise<Product>
    findByEan(id: string): Promise<Product>
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

    async findByEan(ean: string): Promise<Product> {
        const products = await this.repository.find({ where: { ean } })
        return products.shift()
    }
}