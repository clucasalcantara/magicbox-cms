/**
 * EasyStore - Responsible to generate the store to our app
 * @author Caio Alcantara - 2018
 * @memberof effect-cms
 */
import { createStore, applyMiddleware } from 'redux'
// Import redux-saga Middleware
import createSagaMiddleware from 'redux-saga'
// Creating saga middleware
const sagaMiddleware = createSagaMiddleware()
// Initializing reducers
// To Do: Remove and insert the right reducer set
const reducers = () => {}
// Getting initial state from window and injecting on store
const initialState = typeof window !== 'undefined' ? window.__INITIAL_STATE__ : null

export default (apiInstance) => createStore(reducers, initialState, applyMiddleware(sagaMiddleware))
