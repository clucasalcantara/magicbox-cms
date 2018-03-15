/**
 * Routes - Declarative way to set routes
 * Author: Caio Alcantara - 2018
 * @memberOf magicbox-cms
 */
import React from 'react'
import { Route } from 'react-router-dom'
// Import constants
import { MATCH_ROUTE_EXACT } from './constants'
// Import containers components
import Home from '../../client/components/pages/Home'


export default [
  {
    path: '/',
    component: Home,
    ...MATCH_ROUTE_EXACT
  },
]
