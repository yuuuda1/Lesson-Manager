import React from 'react'
import Route from 'app/Route'
import { Switch, Redirect } from 'react-router-dom'

import ConnectedLessons from './containers/ConnectedLessons'
import ConnectedRedirect from './containers/ConnectedRedirect'
import ConnectedRegister from './containers/ConnectedRegister'
import ConnectedTimetableEdit from './containers/ConnectedTimetableEdit'

const Router = () => (
  <Switch>
    <Route component={ConnectedLessons} path='/timetable/home' />
    <Route component={ConnectedRedirect} path='/timetable/redirect' />
    <Route component={ConnectedRegister} path='/timetable/register' />
    <Route component={ConnectedTimetableEdit} path='/timetable/edit' />
    { /* Redirectで穴を埋める（ /members/registerのURLを手打ちした場合など ） */ }
    <Redirect
      exact
      from='/timetable'
      to='/timetable/home'
    />
  </Switch>
)

export default Router
