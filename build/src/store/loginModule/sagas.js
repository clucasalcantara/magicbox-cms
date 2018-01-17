import { createSagas } from 'redux-box'
import { put } from 'redux-saga'

export default createSagas({
  'GET_ORDERS_LIST.latest': function* (action) {
    try {
      yield action.resolve('done')
      // more aboue the action.resolve is covered in the last section (below).
    }
    catch (err) {
      action.reject(err)
      //...etc
    }
  }
})