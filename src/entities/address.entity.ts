import {Column, Entity, JoinColumn, ManyToOne} from "typeorm";
import UserEntity from "./user.entity";
import BaseEntity, {RelationColumn} from "../basics/base.entity";

@Entity({name: 'address'})
class AddressEntity extends BaseEntity {
  @Column()
  public address: string;

  @ManyToOne(type => UserEntity, user => user.addresses)
  @JoinColumn({name: 'user_id'})
  user: UserEntity;
  @RelationColumn({nullable: true})
  user_id: string;
}

export default AddressEntity;
