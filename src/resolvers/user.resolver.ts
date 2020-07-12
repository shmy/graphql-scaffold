import {ApolloContext} from "../type_defs";
import {IResolver} from "./interface";

const users = (parent: any, args: { page: number, pageSize: number }, ctx: ApolloContext) => {
  const {page, pageSize} = args;
  return ctx.userRepository.find({
    skip: (page - 1) * pageSize,
    take: pageSize,
    relations: ["addresses"]
  });
};

const user = (parent: any, args: { id: string }, ctx: ApolloContext) => {
  const {id} = args;
  return ctx.userRepository.findOne(id, {
    relations: ["addresses"]
  });
};

const createUser = (parent: any, args: { user: { name: string, email: string } }, ctx: ApolloContext) => {
  const {user: {name, email}} = args;
  return ctx.userRepository.save({name, email});
};

const updateUser = async (parent: any, args: { id: string, user: { name: string, email: string } }, ctx: ApolloContext) => {
  const {id, user: {name, email}} = args;
  const entity = await ctx.userRepository.findOne(id);
  if (entity) {
    const row = ctx.userRepository.merge(entity, {name, email})
    return await ctx.userRepository.save(row);
  }
  throw new Error('can\'t find id by' + id)
};
const removeUser = async (parent: any, args: { id: string }, ctx: ApolloContext) => {
  const {id} = args;
  const result = await ctx.userRepository.delete(id);
  return !!result.affected;
};

const Resolver: IResolver = {
  Query: {
    users,
    user
  },
  Mutation: {
    createUser,
    removeUser,
    updateUser
  },
  Field: {

  }
};

export default Resolver;
