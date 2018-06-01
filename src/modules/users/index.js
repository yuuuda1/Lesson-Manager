import React from 'react'
import Route from 'app/Route'
import { Switch, Redirect } from 'react-router-dom'

import ConnectedEditPage from './containers/ConnectedEditPage'
import ConnectedMyPage from './containers/ConnectedMyPage'
import ConnectedProfile from './containers/ConnectedProfile'
import ConnectedSearch from './containers/ConnectedSearch'

const Router = () => (
  <Switch>
    <Route component={ConnectedMyPage} path='/users/me' />
    <Route component={ConnectedEditPage} path='/users/edit' />
    <Route component={ConnectedSearch} path='/users/search' />
    <Route component={ConnectedProfile} path='/users/:id' />
    { /* Redirectで穴を埋める（ /members/registerのURLを手打ちした場合など ） */ }
    <Redirect
      exact
      from='/users'
      to='/users/me'
    />
  </Switch>
)

export default Router
