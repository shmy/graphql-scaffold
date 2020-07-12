import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";
import MigrationUtil from "../utils/migration.util";

export class CreateTables1594474070258 implements MigrationInterface {
  private getUserTable() {
    const user = new Table();
    user.name = "user";
    user.addColumn(MigrationUtil.getPrimaryKeyColumn());
    user.addColumn(new TableColumn({name: 'open_id', type: 'varchar(64)', isUnique: true, isNullable: false}));
    user.addColumn(new TableColumn({name: 'nickname', type: 'varchar(64)', isNullable: false}));
    user.addColumn(new TableColumn({name: 'avatar_url', type: 'varchar(255)', isNullable: false}));
    user.addColumn(new TableColumn({name: 'phone', type: 'varchar(32)', isNullable: false}));
    user.addColumn(new TableColumn({name: 'enable', type: 'tinyint', default: 1, isNullable: false}));
    user.addColumn(new TableColumn({name: 'token', type: 'varchar(255)', default: null, isNullable: true}));
    user.addColumn(MigrationUtil.getCreatedAtColumn());
    user.addColumn(MigrationUtil.getUpdatedAtColumn());
    return user;
  }
  private getAddressTable() {
    const address = new Table();
    address.name = "address";
    address.addColumn(MigrationUtil.getPrimaryKeyColumn());
    address.addColumn(new TableColumn({name: 'address', type: 'varchar(255)', isNullable: false}));
    address.addColumn(MigrationUtil.getForeignKeyColumn('user_id'));
    address.addColumn(MigrationUtil.getCreatedAtColumn());
    address.addColumn(MigrationUtil.getUpdatedAtColumn());
    return address;
  }
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.getAddressTable(), true);
    await queryRunner.createTable(this.getUserTable(), true);

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("address");
    await queryRunner.dropTable("user");
  }

}
