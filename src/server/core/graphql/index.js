import graphqlHTTP from 'express-graphql'
import { Schema } from '../../../schemas/schema'
import { formatGraphQLError } from '../../../utils/utils'

export default function({ app }) {
  app.use('/graphql', (req, res, next) => {
    graphqlHTTP({
      schema: Schema,
      rootValue: {
        user: { _id: 'roioioi', roles: ['foo'] } // TODO
      },
      context: { req },
      formatError: formatGraphQLError,
      graphiql: true
    })(req, res, next)
  })
}
