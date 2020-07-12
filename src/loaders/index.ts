import BaseLoader from "../basics/base.loader";
import {getRepository} from "typeorm";
import AddressEntity from "../entities/address.entity";
import UserEntity from "../entities/user.entity";

export const addressDataLoader = (key: string) => BaseLoader(key, getRepository(AddressEntity));
export const userDataLoader = (key: string) => BaseLoader(key, getRepository(UserEntity));
