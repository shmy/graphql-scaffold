import {Column, Entity, OneToMany} from "typeorm";
import AddressEntity from "./address.entity";
import BaseEntity from "../basics/base.entity";

@Entity({name: 'user'})
class UserEntity extends BaseEntity {
  @Column() public open_id: string;
  @Column() public nickname: string;
  @Column() public avatar_url: string;
  @Column() public phone: string;
  @Column() public enable: boolean;
  @Column() public token: string;
  @OneToMany(type => AddressEntity, address => address.user)
  addresses: AddressEntity[];
}

export default UserEntity;
