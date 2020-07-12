import {TableColumn} from "typeorm";

class MigrationUtil {
  static getPrimaryKeyColumn() {
    return new TableColumn({
      name: 'id',
      type: 'varchar',
      isPrimary: true,
      isGenerated: true,
      generationStrategy: 'uuid'
    });
  }

  static getCreatedAtColumn() {
    return new TableColumn({
      name: 'created_at',
      type: 'datetime',
      isNullable: false,
      default: 'CURRENT_TIMESTAMP'
    });
  }

  static getUpdatedAtColumn() {
    return new TableColumn({
      name: 'updated_at',
      type: 'datetime',
      isNullable: false,
      default: 'CURRENT_TIMESTAMP',
      onUpdate: 'CURRENT_TIMESTAMP'
    });
  }

  static getForeignKeyColumn(name: string) {
    return new TableColumn({name, type: 'varchar(36)', isNullable: false});
  }
}

export default MigrationUtil;

