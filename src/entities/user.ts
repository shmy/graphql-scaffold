import {Column, Entity, OneToMany} from "typeorm";
import Address from "./address";
import BaseEntity from "../bases/base.entity";

@Entity()
class User extends BaseEntity {
  @Column({unique: true})
  public name: string;
  @Column()
  public email: string;
  @OneToMany(type => Address, address => address.user)
  addresses: Address[];
}

export default User;
