import { Request, Response } from "express"
import { container } from "tsyringe"
import { ListProductUseCase } from "./ListProductUseCase"

export class ListProductController {
    async handle(req: Request, res: Response) {
        const useCase = container.resolve(ListProductUseCase)
        const products = await useCase.execute()
        return res.json(products)
    }
}   