import React from 'react'

import Home from '../components/home/home'
import Inicio from '../components/home/Inicio'

const Routes = [
    {
      exact: true,
      path: "/",
      component: Home,
      routes: [
        {
          exact: true,
          path: "/",
          component: Inicio
        }
      ]
    }
]

export default Routes