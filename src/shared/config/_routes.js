/**
 * Routes - Declarative way to set routes
 * @author Caio Alcantara - 2018
 * @memberof effect-cms
 */
import React from 'react'
import { Route } from 'react-router-dom'

// Import constants
import { MATCH_ROUTE_EXACT } from './constants'

// Import containers components
import Home from '../../shared/components/pages/Home'
import Login from '../../shared/components/pages/Login'
import NotFound from '../../shared/components/pages/NotFound'


export default [
  {
    path: '/',
    component: Home,
    ...MATCH_ROUTE_EXACT,
  },
  {
    path: '/login',
    component: Login,
    ...MATCH_ROUTE_EXACT,
  },
  {
    component: NotFound,
  }
]
