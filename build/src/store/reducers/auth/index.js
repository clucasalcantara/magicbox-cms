import * as authActions from '../../actions/auth'

const authReducer = (state, action) => {
  switch(action.type) {
    case authActions.LOGIN_REQUEST: {
      return Object.assign({}, state, { status: "authorizing" })
    }
    case authActions.LOGIN_REQUEST: {
      break
    }
    case authActions.LOGIN_REQUEST: {
      break
    }
    default:
      break
  }
}

export default authReducer
