import { GraphQLServer, PubSub } from 'graphql-yoga';

import * as db from './db';
import { Query, Mutation, User, Post, Comment, Subscription } from './resolvers';

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    Post,
    User,
    Comment,
    Subscription,
  },
  context: {
    db,
    pubsub,
  },
});

server.start(data => console.log(`server is running in port ${data.port}`));

// 6.16
