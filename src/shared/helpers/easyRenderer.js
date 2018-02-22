import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// Importing routes
import { renderRoutes } from 'react-router-config'
import Routes from '../config/_routes';

export default (req = {}, store = {}) => {
  const { path } = req
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  )

  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="scripts.js"></script>
      </body>
    </html>
  `
}
