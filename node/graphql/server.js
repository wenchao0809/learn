const Koa = require('koa');
const { ApolloServer, gql } = require('apollo-server-koa');


async function startApolloServer() {
  // Construct a schema, using GraphQL schema language
  const typeDefs = gql`
    type Query {
      hello: String,
      hello2: Int
    }
  `;

  // Provide resolver functions for your schema fields
  const resolvers = {
    Query: {
      hello: () => 'Hello world!',
      hello2: () => 31
    },
  };

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = new Koa();
  server.applyMiddleware({ app });
  // alternatively you can get a composed middleware from the apollo server
  // app.use(server.getMiddleware());

  await new Promise(resolve => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}

startApolloServer()