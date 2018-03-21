import { GraphQLSchema } from 'graphql'

import { QueryType } from './query'
import { MutationType } from './mutation'

export const Schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
})
