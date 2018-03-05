import './bootstrap'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import ConnectedLessons from './lesson/containers/ConnectedLessons'
import store from './store'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

const rootElement = document.querySelector('#root')

if (rootElement) {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={ConnectedLessons}/>
      </Router>
    </Provider>,
    rootElement
    // document.getElementById('root')
  )
}
