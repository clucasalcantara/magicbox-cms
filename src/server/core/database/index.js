import { connector } from './mongodb-connector'

export default function database() {
  return connector()
}
