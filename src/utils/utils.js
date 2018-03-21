import prettyFormat from 'pretty-format'

export function logError (error) {
  console.trace()
  console.log(prettyFormat(error))
}

/**
 * Prevent expose internal errors
 * @param error
 * @returns {string}
 */
export function formatGraphQLError (error) {
  // TODO tests!!
  logError(error)
  return /__public/.test(error.message) ? error.message.replace(/^__public ?/, '') : 'Internal Error'
}
