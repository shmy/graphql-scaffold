import dotEnvSafe from "dotenv-safe";
import Koa from 'koa';
import {createConnection} from "typeorm";
import {ApolloServer} from "apollo-server-koa";
import resolvers from "./resolvers";
import typeDefs, {getContext} from "./type_defs";

const bootstrap = async () => {
  dotEnvSafe.config();
  const app: Koa = new Koa();
  await createConnection();
  console.log('🚀 DB orm is connected!');
  const apollo = new ApolloServer({
    typeDefs,
    resolvers,
    context: getContext()
  });
  apollo.applyMiddleware({app});

  app.listen(8080, () => {
    console.log(`🚀 HTTP Server ready at port 8080`);
  });
}

bootstrap();
