import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import Home from '../src/client/components/pages/Home'

const app = express();

app.use(
  express.static('public'),
)

app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  
  const html = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="scripts.js"></script>
      </body>
    </html>
  `
  res.send(html);
});

app.listen(3333, () => {
  console.log('Listening on port 3333');
});