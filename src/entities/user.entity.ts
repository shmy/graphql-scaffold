import {Column, Entity, OneToMany} from "typeorm";
import AddressEntity from "./address.entity";
import BaseEntity from "../basics/base.entity";

@Entity({name: 'user'})
class UserEntity extends BaseEntity {
  @Column({unique: true})
  public name: string;
  @Column()
  public email: string;
  @OneToMany(type => AddressEntity, address => address.user)
  addresses: AddressEntity[];
}

export default UserEntity;
