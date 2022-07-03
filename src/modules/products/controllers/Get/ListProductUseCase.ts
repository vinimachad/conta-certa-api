import { inject, injectable } from "tsyringe";
import { Product } from "../../entities/Product";
import { IProductRepository } from "../../repositories/ProductRepository";

@injectable()
export class ListProductUseCase {

    private repository: IProductRepository

    constructor(
        @inject('ProductRepository')
        repository: IProductRepository) {
        this.repository = repository
    }

    async execute(): Promise<Product[]> {
        return await this.repository.list()
    }
}