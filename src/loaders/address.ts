import BaseLoader from "../bases/base.loader";
import Address from "../entities/address";
import {getRepository} from "typeorm";

const addressDataLoader = (key: string) => BaseLoader(key, getRepository(Address));
export default addressDataLoader;
