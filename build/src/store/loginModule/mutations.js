export default {
  SET_TOKEN(state, action) {
    state.token = action.token
    state.user_id = action.user_id
    state.status = "authorized"
  }
}