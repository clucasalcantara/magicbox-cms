/**
 * config - Interface to expose the config files
 * @author Caio Alcantara - 2018
 * @memberof effect-cms
*/
import Routes from './_routes'
import api from './apiConfig'
import constants from './constants'

const getRoutes = () => Routes

export {
  api,
  constants,
  getRoutes,
}
