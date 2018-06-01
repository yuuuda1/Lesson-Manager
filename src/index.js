import 'app/bootstrap'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import Route from 'app/Route'
import store from 'app/store'
import history from 'app/history'
import { Switch, Redirect } from 'react-router-dom'
import Timetable from 'app/modules/timetable'
import Users from 'app/modules/users'
import SignUp from 'app/foundation/auth/pages/signup/SignUp'
import Home from 'app/modules/home/home'
import ConnectedLogin from 'app/foundation/auth/pages/login/containers/ConnectedLogin'
import ConnectedRedirect from 'app/modules/timetable/containers/ConnectedRedirect'

const rootElement = document.querySelector('#root')

if (rootElement) {
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route component={Home} path='/home' />
          <Route component={Timetable} path='/timetable' />
          <Route component={Users} path='/users' />
          <Route notAuth component={SignUp} path='/signup' />
          <Route notAuth component={ConnectedLogin} path='/login' />
          <Route component={ConnectedRedirect} path='/redirect' />
          <Redirect
            exact
            from='/'
            to='/home'
          />
        </Switch>
      </ConnectedRouter>
    </Provider>,
    rootElement
    // document.getElementById('root')
  )
}
