import { create } from 'apisauce'

import { config } from '../../config'

const { BASE_URL, BASE_HEADERS } = config.default

const api = create({
  baseURL: BASE_URL,
  headers: BASE_HEADERS,
  timeout: 15000
})

export default api
