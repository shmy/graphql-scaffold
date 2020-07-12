import userResolver from './user.resolver';
import addressResolver from './address.resolver';

const Query = {
  ...userResolver.Query,
  ...addressResolver.Query,
};

const Mutation = {
  ...userResolver.Mutation,
  ...addressResolver.Mutation,
};

const Field = {
  ...userResolver.Field,
  ...addressResolver.Field,
}
let resolvers: any = {};
if (Object.keys(Query).length !== 0) {
  resolvers.Query = Query;
}
if (Object.keys(Mutation).length !== 0) {
  resolvers.Mutation = Mutation;
}
if (Object.keys(Field).length !== 0) {
  resolvers = {...resolvers, ...Field};
}
export default resolvers;
