import 'app/bootstrap'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import Route from 'app/Route'
import ConnectedLessons from 'app/modules/lesson/containers/ConnectedLessons'
import store from 'app/store'
import history from 'app/history'
import { Switch } from 'react-router-dom'
import ConnectedRegister from 'app/modules/lesson/containers/ConnectedRegister'
import SignUp from 'app/foundation/auth/pages/signup/SignUp'
import Home from 'app/modules/home/home'
import ConnectedLogin from 'app/foundation/auth/pages/login/containers/ConnectedLogin'
import ConnectedSearch from 'app/modules/user/containers/ConnectedSearch'
import ConnectedProfile from 'app/modules/user/containers/ConnectedProfile'
import ConnectedMyPage from 'app/modules/user/containers/ConnectedMyPage'
import ConnectedEditPage from 'app/modules/user/containers/ConnectedEditPage'
import ConnectedTimetableEdit from 'app/modules/lesson/containers/ConnectedTimetableEdit'
import ConnectedRedirect from 'app/modules/lesson/containers/ConnectedRedirect'

const rootElement = document.querySelector('#root')

if (rootElement) {
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route component={Home} path='/home' />
          <Route component={ConnectedLessons} path='/lesson' />
          <Route component={ConnectedRegister} path='/register' />
          <Route notAuth component={SignUp} path='/signup' />
          <Route notAuth component={ConnectedLogin} path='/login' />
          <Route component={ConnectedSearch} path='/users/search' />
          <Route component={ConnectedProfile} path='/users/profile/:id' />
          <Route component={ConnectedMyPage} path='/users/me' />
          <Route component={ConnectedEditPage} path='/users/edit' />
          <Route component={ConnectedTimetableEdit} path='/users/timetables/edit' />
          <Route component={ConnectedRedirect} path='/redirect' />
        </Switch>
      </ConnectedRouter>
    </Provider>,
    rootElement
    // document.getElementById('root')
  )
}
