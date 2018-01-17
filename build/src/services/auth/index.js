import api from '../api'

const attemptLogin = async (userData) => {
  const response = await api.get('/')
  console.log(response)
}

export {
  attemptLogin
}