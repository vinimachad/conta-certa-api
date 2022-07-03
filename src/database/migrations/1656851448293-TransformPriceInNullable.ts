import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class TransformPriceInNullable1656851448293 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('products', 'price', new TableColumn({
            name: 'price', type: 'float', isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('products', 'price')
    }
}
