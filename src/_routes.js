// import { Home, LoadingPage, Login } from './components'
// import asyncComponent from '@jaredpalmer/after/asyncComponent'

import { Home, Login } from './components'

const routes = [
  // Placeholder for lazy-featured-stuff
  // {
  //   path: '/',
  //   exact: true,
  //   component: asyncComponent({
  //     loader: Home,
  //     Placeholder: LoadingPage
  //   })
  // },
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
]

export default routes
