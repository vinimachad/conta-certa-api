import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateProductUseCase } from "./CreateProductUseCase"

export class CreateProductController {
    async handle(req: Request, res: Response) {
        const { ean, price, name } = req.body
        const useCase = container.resolve(CreateProductUseCase)
        const product = await useCase.execute({ ean, price, name })
        return res.json(product)
    }
}   