import { Request, Response } from "express"
import { container } from "tsyringe"
import { GetProductUseCase } from "./GetProductUseCase"

export class GetProductController {
    async handle(req: Request, res: Response) {
        const ean = req.params.ean
        const useCase = container.resolve(GetProductUseCase)
        const product = await useCase.execute(ean)
        return res.json(product)
    }
}   