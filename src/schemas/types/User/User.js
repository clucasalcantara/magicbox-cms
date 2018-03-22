import { GraphQLObjectType, GraphQLString } from 'graphql'

export const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    hello: {
      type: GraphQLString,
      resolve(parent, args, ctx) {
        return 'world'
      }
    }
  }
})
