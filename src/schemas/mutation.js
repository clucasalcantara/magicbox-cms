import { GraphQLObjectType } from 'graphql'
import { productAdd } from './mutations/Product/productAdd'

export const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  fields: () => ({
    productAdd
  })
})
