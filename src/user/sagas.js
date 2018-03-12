import {
  put,
  call,
  fork,
  takeLatest
} from 'redux-saga/effects'

import * as api from './api'
import UsersActionTypes from './constants'

import {
  successAllUsers,
  failuerAllUsers,
  successGetUser,
  failuerGetUser,
  successMe,
  failuerMe,
  successPutMe,
  failuerPutMe
} from './actions'

function* requestAllUsers(action) {
  try {
    const response = yield call(api.allUsers, action.word)
    yield put(successAllUsers(response.data))
  } catch (error) {
    yield put(failuerAllUsers(error))
  }
}

export function* watchRequestAllUsers() {
  yield takeLatest(UsersActionTypes.REQUEST_ALL_USERS, requestAllUsers)
}

function* requestGetUser(action) {
  try {
    const response = yield call(api.getUser, action.id)
    yield put(successGetUser(response.data))
  } catch (error) {
    yield put(failuerGetUser(error))
  }
}

export function* watchRequestGetUser() {
  yield takeLatest(UsersActionTypes.REQUEST_GET_USERS, requestGetUser)
}

function* requestMe() {
  try {
    const response = yield call(api.getMe)
    yield put(successMe(response.data))
  } catch (error) {
    yield put(failuerMe(error))
  }
}

export function* watchRequestMe() {
  yield takeLatest(UsersActionTypes.REQUEST_MY_USERS, requestMe)
}

function* requestPutMe(action) {
  try {
    const response = yield call(api.putMe, action.name, action.email, action.password)
    yield put(successPutMe(response.data))
  } catch (error) {
    yield put(failuerPutMe(error))
  }
}

export function* watchRequestPutMe() {
  yield takeLatest(UsersActionTypes.REQUEST_PUT_USERS, requestPutMe)
}

export default [
  fork(watchRequestAllUsers),
  fork(watchRequestGetUser),
  fork(watchRequestMe),
  fork(watchRequestPutMe)
]
