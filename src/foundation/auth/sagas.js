import {
  put,
  call,
  fork,
  takeEvery,
  takeLatest
} from 'redux-saga/effects'

import history from 'app/history'

import login from './api'
import AuthActionTypes from './constants'

import {
  successLogin,
  failuerLogin,
  successLogout
} from './actions'

function* requestLogin(action) {
  try {
    const response = yield call(login, action.username, action.password)
    yield put(successLogin(response.data))
    sessionStorage.setItem('_lesson_manager_token', response.data.access_token)
  } catch (error) {
    yield put(failuerLogin(error))
  }
}

export function* watchRequestLogin() {
  yield takeLatest(AuthActionTypes.REQUEST_LOGIN, requestLogin)
}

function* loginSuccess() {
  yield call(history.push, '/timetable/home')
}

export function* watchSuccessLogin() {
  yield takeEvery(AuthActionTypes.SUCCESS_LOGIN, loginSuccess)
}

function* logout() {
  sessionStorage.removeItem('_lesson_manager_token')

  yield put(successLogout())

  window.location.href = '/login'

  // yield call(history.push, '/login')
}

export function* watchLogout() {
  yield takeLatest(AuthActionTypes.REQUEST_LOGOUT, logout)
}

export default [
  fork(watchRequestLogin),
  fork(watchSuccessLogin),
  fork(watchLogout)
]
