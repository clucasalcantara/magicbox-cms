/**
 * config - Interface to expose the config files
 * Author: Caio Alcantara - 2018
 * @memberOf magicbox-cms
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
