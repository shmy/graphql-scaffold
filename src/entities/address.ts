import {Column, Entity, JoinColumn, ManyToOne} from "typeorm";
import User from "./user";
import BaseEntity, {RelationColumn} from "../bases/base.entity";

@Entity()
class Address extends BaseEntity {
  @Column()
  public address: string;

  @ManyToOne(type => User, user => user.addresses)
  @JoinColumn({name: 'user_id'})
  user: User;
  @RelationColumn({nullable: true})
  user_id: string;
}

export default Address;
