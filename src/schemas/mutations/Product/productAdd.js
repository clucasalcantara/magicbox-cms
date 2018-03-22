import { GraphQLString, GraphQLInputObjectType } from 'graphql'
import { ProductType } from '../../types/Product/Product'

export const productAdd = {
  name: 'productAdd',
  type: ProductType,
  args: {
    name: {
      type: GraphQLString,
    },
  },
  resolve: (root, args, ctx) => {
    const products = ctx.mongo.collection('products')
    return new Promise(resolve => {
      products.insert({ name: args.name }, (err, doc) => {
        console.log(err, doc)
        resolve(doc)
      })
    })
  }
}
