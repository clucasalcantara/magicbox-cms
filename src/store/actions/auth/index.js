
const loginRequest = response => ({
  type: "LOGIN_REQUEST",
  payload: response
})

const loginRequestFail = response => ({
  type: "LOGIN_REQUEST__FAIL",
  payload: response
})

const loginRequestSuccess = response => ({
  type: "LOGIN_REQUEST__SUCCESS",
  payload: response
})

export {
  loginRequest,
  loginRequestFail,
  loginRequestSuccess,
}


