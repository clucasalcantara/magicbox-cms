// This file is to handle the specific code part for the client side
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// Importing routes
import Routes from '../config/_routes'
// Importing redux stuff
import { Provider } from 'react-redux'
import { easyStore } from '../helpers' 

const store = easyStore()

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
