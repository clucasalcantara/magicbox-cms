/**
 * EasyRenderer - Holds the template generation for SSR and
 * preloaded input injection
 * Author: Caio Alcantara - 2018
 * @memberOf magicbox-cms
 */
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// Importing routes
import { renderRoutes } from 'react-router-config'
import Routes from '../config/_routes'
// Import react helmet
import Helmet from 'react-helmet'
// Mitigate XSS Attacks
import serialize from 'serialize-javascript'

export default (req = {}, store = {}) => {
  const { path } = req
  const head = Helmet.renderStatic()
  // Checking for preloaded state to inject
  const preloadedState = typeof store.getState() !== 'undefined' ? store.getState() : {}
  // Creating rendering markup for react application
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  )

  return `
    <html>
      <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
          <meta name="google-site-verification" content="pzt0EPO2tyHLuk8xVtwYI-SGmKKo3w57PNU6OoyP6GY" />
          <meta name="google-site-verification" content="e-DrbE3gv4C-V7kCy2MW_H-Pc-SmwSOyaz1ot9EUU4g" />
          ${(head.title) ? head.title.toString() : ''}
          <script>
            window.dataLayer = [];
          </script>
          ${(head.meta) ? head.meta.toString().replace(/\/>/g, '/>\n    ') : ''}
          ${(head.script) ? head.script.toString() : ''}
          ${(head.link) ? head.link.toString() : ''}
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.__PRELOADED_STATE__ = ${serialize(preloadedState)}
        </script>
        <script src="scripts.js"></script>
      </body>
    </html>
  `
}
