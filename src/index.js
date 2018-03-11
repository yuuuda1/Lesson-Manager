import 'app/bootstrap'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import ConnectedLessons from 'app/lesson/containers/ConnectedLessons'
import store from 'app/store'
import createHistory from 'history/createBrowserHistory'
import Switch from 'react-router/Switch'
import ConnectedRegister from 'app/lesson/containers/ConnectedRegister'
import SignUp from 'app/signup/SignUp'
import Home from 'app/home/home'
import ConnectedLogin from 'app/login/containers/ConnectedLogin'
import ConnectedSearch from 'app/user/containers/ConnectedSearch'
import ConnectedProfile from 'app/user/containers/ConnectedProfile'

const history = createHistory()

const rootElement = document.querySelector('#root')

if (rootElement) {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route component={Home} path='/home' />
          <Route component={ConnectedLessons} path='/lesson' />
          <Route component={ConnectedRegister} path='/register' />
          <Route component={SignUp} path='/user/register' />
          <Route component={ConnectedLogin} path='/user/login' />
          <Route component={ConnectedSearch} path='/users/search' />
          <Route component={ConnectedProfile} path='/users/profile/:id' />
        </Switch>
      </Router>
    </Provider>,
    rootElement
    // document.getElementById('root')
  )
}
