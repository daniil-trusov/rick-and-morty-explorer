import { GraphQLClient } from "graphql-request";

export const graphQLClient = new GraphQLClient(
  "https://rickandmortyapi.com/graphql"
);
