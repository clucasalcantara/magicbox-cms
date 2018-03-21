import chalk from 'chalk'
import app from './express/index'
import graphql from './graphql/index'
import Promise from 'bluebird'

const middleware = [{ app }, { graphql }]

async function reduce(prev, next) {
  const [name, fn] = Object.entries(next)[0]

  if (!name) throw new Error(`Invalid name ${name}`, name)
  if (typeof fn !== 'function') throw new Error(`Invalid module ${fn}`, fn)

  console.log(chalk.gray(`- ${name} loaded`))

  // TODO: check if prev has own property - throw error
  return {
    ...prev,
    [name]: await fn(prev),
  }
}

const st = Date.now()
export const start = async (appMiddleware = []) => {
  const middlewareCompleteChain = [...middleware, ...appMiddleware]
  console.log(chalk.green('\n\n\n Starting app...'))

  try {
    await Promise.reduce(middlewareCompleteChain, reduce, {})
    console.log(`Graphql running at http://localhost:3000/graphql`) // FIXME read information from env vars
    console.log(chalk.green(`App started in ${Date.now() - st} ms`))
  } catch (err) {
    console.log(chalk.red(err.toString()))
  }
}
