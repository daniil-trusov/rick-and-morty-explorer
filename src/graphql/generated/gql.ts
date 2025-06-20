/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "fragment CharacterCardInfo on Character {\n  id\n  name\n  image\n  status\n  species\n  location {\n    name\n  }\n  episode {\n    id\n  }\n}\n\nfragment CharacterFullInfo on Character {\n  ...CharacterCardInfo\n  gender\n  origin {\n    name\n    type\n    dimension\n  }\n  location {\n    name\n    type\n    dimension\n  }\n  episode {\n    id\n    name\n    air_date\n    episode\n  }\n}": typeof types.CharacterCardInfoFragmentDoc,
    "query GetCharacterFull($id: ID!) {\n  character(id: $id) {\n    ...CharacterFullInfo\n  }\n}": typeof types.GetCharacterFullDocument,
    "query GetCharactersCard($page: Int, $filter: FilterCharacter) {\n  characters(page: $page, filter: $filter) {\n    info {\n      count\n      pages\n      next\n      prev\n    }\n    results {\n      ...CharacterCardInfo\n    }\n  }\n}": typeof types.GetCharactersCardDocument,
};
const documents: Documents = {
    "fragment CharacterCardInfo on Character {\n  id\n  name\n  image\n  status\n  species\n  location {\n    name\n  }\n  episode {\n    id\n  }\n}\n\nfragment CharacterFullInfo on Character {\n  ...CharacterCardInfo\n  gender\n  origin {\n    name\n    type\n    dimension\n  }\n  location {\n    name\n    type\n    dimension\n  }\n  episode {\n    id\n    name\n    air_date\n    episode\n  }\n}": types.CharacterCardInfoFragmentDoc,
    "query GetCharacterFull($id: ID!) {\n  character(id: $id) {\n    ...CharacterFullInfo\n  }\n}": types.GetCharacterFullDocument,
    "query GetCharactersCard($page: Int, $filter: FilterCharacter) {\n  characters(page: $page, filter: $filter) {\n    info {\n      count\n      pages\n      next\n      prev\n    }\n    results {\n      ...CharacterCardInfo\n    }\n  }\n}": types.GetCharactersCardDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CharacterCardInfo on Character {\n  id\n  name\n  image\n  status\n  species\n  location {\n    name\n  }\n  episode {\n    id\n  }\n}\n\nfragment CharacterFullInfo on Character {\n  ...CharacterCardInfo\n  gender\n  origin {\n    name\n    type\n    dimension\n  }\n  location {\n    name\n    type\n    dimension\n  }\n  episode {\n    id\n    name\n    air_date\n    episode\n  }\n}"): (typeof documents)["fragment CharacterCardInfo on Character {\n  id\n  name\n  image\n  status\n  species\n  location {\n    name\n  }\n  episode {\n    id\n  }\n}\n\nfragment CharacterFullInfo on Character {\n  ...CharacterCardInfo\n  gender\n  origin {\n    name\n    type\n    dimension\n  }\n  location {\n    name\n    type\n    dimension\n  }\n  episode {\n    id\n    name\n    air_date\n    episode\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCharacterFull($id: ID!) {\n  character(id: $id) {\n    ...CharacterFullInfo\n  }\n}"): (typeof documents)["query GetCharacterFull($id: ID!) {\n  character(id: $id) {\n    ...CharacterFullInfo\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCharactersCard($page: Int, $filter: FilterCharacter) {\n  characters(page: $page, filter: $filter) {\n    info {\n      count\n      pages\n      next\n      prev\n    }\n    results {\n      ...CharacterCardInfo\n    }\n  }\n}"): (typeof documents)["query GetCharactersCard($page: Int, $filter: FilterCharacter) {\n  characters(page: $page, filter: $filter) {\n    info {\n      count\n      pages\n      next\n      prev\n    }\n    results {\n      ...CharacterCardInfo\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;