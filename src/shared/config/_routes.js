import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../../client/components/pages/Home'

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  }
]
