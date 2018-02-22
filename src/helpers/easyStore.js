import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const reducers = () => {}
const initialState = {}

export default () => createStore(reducers, initialState, applyMiddleware(thunk))