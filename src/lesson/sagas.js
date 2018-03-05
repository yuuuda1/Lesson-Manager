import {
  put,
  call,
  fork,
  takeLatest
} from 'redux-saga/effects'

import * as api from './api'
import LessonsActionTypes from './constants'

import {
  successAllLessons,
  failuerAllLessons
} from './actions'

function* requestAllLessons() {
  try{
    const response = yield call(api.allLessons)
    yield put(successAllLessons(response.data))
  } catch(error) {
    yield put(failuerAllLessons(error))
  }
}

export function* watchRequestAllLessons() {
  yield takeLatest(LessonsActionTypes.REQUEST_ALL_LESSONS, requestAllLessons)
}

export default [
  fork(watchRequestAllLessons)
]
