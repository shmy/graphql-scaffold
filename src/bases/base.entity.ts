import {
  Column,
  ColumnOptions, CreateDateColumn,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

class BaseEntity {
  @PrimaryGeneratedColumn({ type: "uuid",})
  @Generated("uuid")
  id: string;
  @CreateDateColumn({name: "created_at", type: "datetime"})
  created_at: Date;
  @UpdateDateColumn({name: "updated_at", type: "datetime"})
  updated_at: Date;

}
export default BaseEntity;
export const RelationColumn = (options?: ColumnOptions) => {
  return Column({ nullable: true, ...options });
}
