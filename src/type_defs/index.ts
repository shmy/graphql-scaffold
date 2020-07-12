import {getRepository, Repository} from "typeorm";
import User from "../entities/user";
import Address from "../entities/address";
import userDataLoader from "../loaders/user";
import addressDataLoader from "../loaders/address";
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
  userRepository: Repository<User>,
  addressRepository: Repository<Address>,
  userDataLoader: DataLoader<string, User, unknown>,
  addressDataLoader: DataLoader<string, Address, unknown>,
}

export const getContext: () => ApolloContext = () => {
  return {
    userRepository: getRepository(User),
    addressRepository: getRepository(Address),
    userDataLoader: userDataLoader('id'),
    addressDataLoader: addressDataLoader('id'),
  };
}
