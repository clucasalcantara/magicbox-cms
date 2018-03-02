/**
 * config - Interface to export the config files
 * Author: Caio Alcantara - 2018
 * @memberOf magicbox-core/isomorphic
*/
import Routes from './_routes'
import api from './api'
import constants from './constants'

const getRoutes = () => Routes

export {
  api,
  constants,
  getRoutes,
}
