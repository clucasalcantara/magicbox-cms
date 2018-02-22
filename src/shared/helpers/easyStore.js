import { createStore, applyMiddleware } from 'redux'
// Import redux-saga Middleware
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const reducers = () => {}
const initialState = {}

export default () => createStore(reducers, initialState, applyMiddleware(sagaMiddleware))
