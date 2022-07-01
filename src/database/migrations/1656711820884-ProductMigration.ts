import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ProductMigration1656711820884 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "products",
                columns: [
                    { name: 'id', type: 'uuid', isPrimary: true },
                    { name: 'name', type: 'varchar' },
                    { name: 'ean', type: 'varchar', isUnique: true },
                    { name: 'price', type: 'float' },
                    { name: 'created_at', type: 'timestamp', default: 'now()' }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products')
    }
}
