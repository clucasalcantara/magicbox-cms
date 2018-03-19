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
import Login from '../../client/components/pages/Login'


export default [
  {
    path: '/',
    component: Home,
    ...MATCH_ROUTE_EXACT,
  },
  {
    path: '/login',
    component: 'Login',
    ...MATCH_ROUTE_EXACT,
  }
]

