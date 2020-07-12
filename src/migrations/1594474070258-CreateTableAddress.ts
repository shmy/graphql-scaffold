import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";

export class CreateTableAddress1594474070258 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const address = new Table();
        address.name = "address";
        address.addColumn(new TableColumn({name: 'id', type: 'varchar', isPrimary: true, isGenerated: true, generationStrategy: 'uuid' }));
        address.addColumn(new TableColumn({name: 'address', type: 'varchar(255)', isNullable: false }));
        address.addColumn(new TableColumn({name: 'user_id', type: 'varchar(36)', isNullable: false }));
        address.addColumn(new TableColumn({name: 'created_at', type: 'datetime', isNullable: false, default: 'CURRENT_TIMESTAMP' }));
        address.addColumn(new TableColumn({name: 'updated_at', type: 'datetime', isNullable: false, default: 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' }));
        await queryRunner.createTable(address, true);
        const user = new Table();
        user.name = "user";
        user.addColumn(new TableColumn({name: 'id', type: 'varchar', isPrimary: true, isGenerated: true, generationStrategy: 'uuid' }));
        user.addColumn(new TableColumn({name: 'name', type: 'varchar(255)', isNullable: false }));
        user.addColumn(new TableColumn({name: 'email', type: 'varchar(255)', isNullable: false }));
        user.addColumn(new TableColumn({name: 'created_at', type: 'datetime', isNullable: false, default: 'CURRENT_TIMESTAMP' }));
        user.addColumn(new TableColumn({name: 'updated_at', type: 'datetime', isNullable: false, default: 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' }));
        await queryRunner.createTable(user, true);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("address");
        await queryRunner.dropTable("user");
    }

}
