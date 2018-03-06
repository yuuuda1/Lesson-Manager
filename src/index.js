import './bootstrap'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import ConnectedLessons from './lesson/containers/ConnectedLessons'
import store from './store'
import createHistory from 'history/createBrowserHistory'
import Switch from 'react-router/Switch';
import ConnectedRegister from './register/containers/ConnectedRegister';
import SignUp from './signup/SignUp';
import Login from './login/Login';

const history = createHistory()

const rootElement = document.querySelector('#root')

if (rootElement) {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/home" component={ConnectedLessons}/>
          <Route path="/register" component={ConnectedRegister}/>
          <Route path="/user/register" component={SignUp}/>
          <Route path="/user/login" component={Login}/>
        </Switch>
      </Router>
    </Provider>,
    rootElement
    // document.getElementById('root')
  )
}
