import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
// Import custom renderer
import easyRenderer from './helpers/easyRenderer';

const app = express();

app.use(
  express.static('public'),
)

app.get('*', (req, res) => {
  res.send(easyRenderer(req))
});

app.listen(3333, () => {
  console.log('Listening on port 3333');
});