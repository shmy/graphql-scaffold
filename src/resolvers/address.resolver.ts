// import {Arg, FieldResolver, Query, Resolver, Root, Ctx} from "type-graphql";
// import {InjectRepository} from 'typeorm-typedi-extensions';
// import {Repository} from "typeorm";
// import Address from "../entities/address";
// import User from "../entities/user";
//
// @Resolver(Address)
// class AddressResolver {
//   constructor(
//     @InjectRepository(User) private readonly userRepository: Repository<User>,
//     @InjectRepository(Address) private readonly addressRepository: Repository<Address>,
//   ) {
//   }
//
//   @Query(() => [Address])
//   public async addresses(@Arg('page') page: number, @Arg('pageSize') pageSize: number) {
//     return this.addressRepository.find({
//       skip: (page - 1) * pageSize,
//       take: pageSize
//     });
//   }
//
//   @Query(() => Address)
//   public async address(@Arg('id') id: number) {
//     return this.addressRepository.findOne(id, );
//   }
//
//   @FieldResolver()
//   async user(@Root() address: Address, @Ctx() ctx: any) {
//     ctx.userDataLoader.clearAll();
//     return ctx.userDataLoader.load(address.user_id);
//   }
// }
//
// export default AddressResolver;
import {ApolloContext} from "../type_defs";
import AddressEntity from "../entities/address.entity";
import {IResolver} from "../type_defs/interface";

const addresses = (parent: any, args: { page: number, pageSize: number }, ctx: ApolloContext) => {
  const {page, pageSize} = args;
  return ctx.addressRepository.find({
    skip: (page - 1) * pageSize,
    take: pageSize
  });
};
const address = (parent: any, args: { id: string }, ctx: ApolloContext) => {
  const {id} = args;
  return ctx.addressRepository.findOne(id);
};
const user = (parent: AddressEntity, args: {}, ctx: ApolloContext) => {
  ctx.userDataLoader.clearAll();
  return ctx.userDataLoader.load(parent.user_id)
};
const Resolver: IResolver = {
  Query: {
    addresses,
    address,
  },
  Mutation: {
  },
  Field: {
    Address: {
      user
    }
  }
}
export default Resolver;
