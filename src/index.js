import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
// Import custom renderer
import { easyRenderer, easyStore } from './helpers';
import { create } from 'domain';

const app = express();

app.use(
  express.static('public'),
)

app.get('*', (req, res) => {
  const store = easyStore()

  // To Do: Initialize/Rehydrate data
  res.send(easyRenderer(req, store))
});

app.listen(3333, () => {
  console.log('Listening on port 3333');
});