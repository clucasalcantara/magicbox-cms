/**
 * Client entrypoint
 * @author Caio Alcantara - 2018
 * @memberof effect-cms
 */
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
// Importing routes
import Routes from '../shared/config/_routes'
// Importing redux store
import { effectStore } from '../shared/helpers'

const store = effectStore()

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
