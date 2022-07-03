import { Product } from "../../entities/Product";
import { IProductRepository } from "../../repositories/ProductRepository";
import { inject, injectable } from "tsyringe";
import { cosmosApi } from "../../../../service";
import { AppError } from "../../../../errors/AppError";

type ICosmosRespose = {
    description: string
    gtin: number
}

@injectable()
export class GetProductUseCase {

    private repository: IProductRepository

    constructor(
        @inject('ProductRepository')
        repository: IProductRepository) {
        this.repository = repository
    }

    async execute(eanCode: string): Promise<Product> {
        let product = await this.repository.findByEan(eanCode)

        if (!product) {
            let { description: name, gtin: ean } = await this.productRequest(eanCode)
            let product = new Product(name, ean.toString())
            return product
        }

        return product
    }

    private async productRequest(ean: string): Promise<ICosmosRespose> {
        try {
            let res = await cosmosApi.get(`/gtins/${ean}`)
            let data: ICosmosRespose = res.data
            return data
        } catch (error) {
            throw new AppError('Não conseguimos encontrar esse produto em nossa base de dados')
        }
    }
}