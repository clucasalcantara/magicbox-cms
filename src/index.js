import 'babel-polyfill'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
// Routers helpers
import { matchRoutes } from 'react-router-config'
// Import custom renderer
import { easyRenderer, easyStore } from './shared/helpers';
import { create } from 'domain';
import _routes from './shared/config/_routes';

const app = express();

app.use(
  express.static('public'),
)

app.get('*', async (req, res) => {
  const store = easyStore()
  const { path } = req

  const pendingRequests = matchRoutes(_routes, path).map(({ route }) => {
    return route.loadData ? route.loadData() : null
  })

  // All data must be loaded here, ok....
  // To Do: Reserach for a different implementation
  // I don't like the idea about attach a loadDAta function
  // on each route and each component
  await Promise.all(pendingRequests)

  // To Do: Initialize/Rehydrate data
  res.send(easyRenderer(req, store))
});

app.listen(3333, () => {
  console.log('Listening on port 3333');
});
