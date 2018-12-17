/**
 * Constants - Holds all custom variables
 * @author Caio Alcantara - 2018
 * @memberof effect-cms
 */

const MATCH_ROUTE_EXACT = { exact: true }

const ERROR_MESSAGES = {
  componentNotFound: (compName) => `Component ${compName} not found, please make sure that this component exists into client UISet`,
}

export {
  MATCH_ROUTE_EXACT,
  ERROR_MESSAGES
}
