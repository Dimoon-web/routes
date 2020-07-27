import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Routes } from './Pages/routes'

export const App = () => {
  return (
    <Switch>
      {
        Routes.map(page => (
          <Route
            exact={page.path === '/'}
            key={page.path}
            path={page.path}
            render={() => (
              <page.tmp>

                {/*And other things, such as scrolling the page up*/}

                <page.component/>

              </page.tmp>
            )}
          />
        ))
      }
    </Switch>
  )
}
