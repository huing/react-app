import React from 'react'
import Loadable from 'react-loadable'

const DelayLoading = ({pastDelay, error}) => {
  if (pastDelay) {
    return <div>Loading...</div>
  } else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>
  } else {
    return null
  }
}

export const BaseLayout = Loadable({loader: () => import('../base-layout'), loading: DelayLoading, delay: 3000})
export const UserLayout = Loadable({loader: () => import('../user-layout'), loading: DelayLoading, delay: 3000})

export const routes = [{
  path: '/home',
  component: Loadable({loader: () => import('../page-home'), loading: DelayLoading, delay: 3000}),
}, {
  path: '/table',
  component: Loadable({loader: () => import('../page-table'), loading: DelayLoading, delay: 3000}),
}, {
  path: '/date',
  component: Loadable({loader: () => import('../page-date'), loading: DelayLoading, delay: 3000}),
}, {
  path: '/chart',
  component: Loadable({loader: () => import('../page-chart'), loading: DelayLoading, delay: 3000}),
}]
