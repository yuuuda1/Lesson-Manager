import {
  put,
  call,
  fork,
  takeLatest
} from 'redux-saga/effects'

import login from './api'
import AuthActionTypes from './constants'

import {
  successLogin,
  failuerLogin
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

export default [
  fork(watchRequestLogin)
]
