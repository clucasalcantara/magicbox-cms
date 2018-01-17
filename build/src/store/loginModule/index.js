import { createContainer } from 'redux-box'

import state from './state'
import mutations from './mutations'
import sagas from './sagas'

export const module = {
  // It´s really important to setup a unique name for your module over here
  name: 'login',
  state,
  mutations,
  sagas
}

export default createContainer(module)