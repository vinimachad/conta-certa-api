import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../repositories/ProductRepository";

type IRequest = {
    name: string
    ean: string
    price: number
}

interface IResponse extends IRequest {
    id: string
}

@injectable()
export class CreateProductUseCase {

    constructor(@inject('ProductRepository') private repository: IProductRepository) { }

    async execute(data: IRequest): Promise<IResponse> {
        let product = await this.repository.create(data)
        return {
            id: product.id,
            ean: product.ean,
            name: product.name,
            price: product.price
        }
    }
}