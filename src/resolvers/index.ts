import userResolver from './user.resolver';
import addressResolver from './address.resolver';

const resolvers = {
  Query: {
    ...userResolver.Query,
    ...addressResolver.Query,
  },
  Mutation: {
    ...userResolver.Mutation,
    ...addressResolver.Mutation,
  },
  ...userResolver.Field,
  ...addressResolver.Field,
};

export default resolvers;
