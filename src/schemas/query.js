import { GraphQLObjectType, GraphQLNonNull, GraphQLID } from 'graphql'
import { UserType } from './types/User/User'
import { ProductType } from './types/Product/Product'

export const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  fields: () => ({
    user: {
      type: UserType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve: () => {
        return {
          name: 'Antonio'
        }
      }
    },

    product: {
      type: ProductType,
      resolve: () => {
        return {
          name: 'Balança de precisão'
        }
      }
    },
  })
})
