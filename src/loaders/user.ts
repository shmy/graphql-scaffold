import BaseLoader from "../bases/base.loader";
import User from "../entities/user";
import {getRepository} from "typeorm";

const userDataLoader = (key: string) => BaseLoader(key, getRepository(User));
export default userDataLoader;
