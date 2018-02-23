/**
 *
*/
import React from 'react'
import { Route } from 'react-router-dom'
// Import constants
import { MATCH_ROUTE_EXACT } from './constants'
// Import routes containers
import Home from '../../client/components/pages/Home'


export default [
  {
    path: '/',
    component: Home,
    ...MATCH_ROUTE_EXACT
  },
]
