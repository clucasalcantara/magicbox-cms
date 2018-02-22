import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../config/_routes';
// Importing routes

export default (req = {}) => {
  const { path } = req
  const content = renderToString(
    <StaticRouter location={path} context={{}}>
      <Routes />
    </StaticRouter>
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