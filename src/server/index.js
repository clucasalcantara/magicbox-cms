import 'babel-polyfill'
import express from 'express'
import React from 'react'
// Routers helpers
import { matchRoutes } from 'react-router-config'
// Import custom renderer and store
import { easyRenderer, easyStore } from '../shared/helpers';
// Import routes
import _routes from '../shared/config/_routes';
// Import react helmet
import Helmet from 'react-helmet'

const app = express();

// Setting static assets
app.use(express.static('public'))
app.use('/fonts', express.static('public/fonts'))

app.get('*', async (req, res) => {
  const store = easyStore()
  const { path } = req

  const pendingRequests = matchRoutes(_routes, path).map(({ route }) => {
    Helmet.rewind()
    return route.loadData ? route.loadData() : null
  })

  // All data must be loaded here, ok....
  // To Do: Reserach for a different implementation
  // I don't like the idea about attach a loadData function
  // on each route and each component
  await Promise.all(pendingRequests)

  // To Do: Initialize/Rehydrate data

  res.send(easyRenderer(req, store))
});

app.listen(3333, () => {
  console.log('Listening on port 3333');
});
