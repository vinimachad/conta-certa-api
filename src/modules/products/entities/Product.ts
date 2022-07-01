import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";

@Entity('products')
export class Product {

    @PrimaryColumn()
    id: string

    @Column()
    name: string
    @Column()
    ean: string
    @Column()
    price: number

    @CreateDateColumn()
    created_at: Date

    constructor(
        name: string,
        ean: string,
        price: number
    ) {
        this.name = name
        this.ean = ean
        this.price = price
        this.idExists()
    }

    private idExists() {
        if (!this.id) {
            this.id = v4()
        }
    }
}