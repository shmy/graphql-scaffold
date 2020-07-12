import {getRepository, Repository} from "typeorm";
import UserEntity from "../entities/user.entity";
import AddressEntity from "../entities/address.entity";
import {userDataLoader, addressDataLoader} from "../loaders";
import DataLoader from "dataloader";
import { gql } from 'apollo-server-koa';
const typeDefs = gql`
  # Your schema will go here
  type Mutation {
    createUser(user: UserInput!): User!
    updateUser(id: String!, user: UserInput!): User!
    removeUser(id: String!): Boolean!
  }
  type Query {
    user(id: String!): User!
    users(page: Int!, pageSize: Int!): [User!]!
    addresses(page: Int!, pageSize: Int!): [Address!]!
    address(id: String!): Address!
  }
  type User {
    addresses: [Address!]!
    created_at: String!
    email: String!
    id: ID!
    name: String!
    updated_at: String!
  }
  type Address {
    created_at: String!
    id: ID!
    address: String!
    updated_at: String!
    user: User
  }
  input UserInput {
    email: String!
    name: String!
  }
`;

export default typeDefs;

export interface ApolloContext {
  userRepository: Repository<UserEntity>,
  addressRepository: Repository<AddressEntity>,
  userDataLoader: DataLoader<string, UserEntity, unknown>,
  addressDataLoader: DataLoader<string, AddressEntity, unknown>,
}

export const getContext: () => ApolloContext = () => {
  return {
    userRepository: getRepository(UserEntity),
    addressRepository: getRepository(AddressEntity),
    userDataLoader: userDataLoader('id'),
    addressDataLoader: addressDataLoader('id'),
  };
}
