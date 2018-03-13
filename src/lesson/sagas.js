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
  failuerAllLessons,
  successMyTimetable,
  failuerMyTimetable,
  successGetTimetable,
  failuerGetTimetable,
  successPostTimetables,
  failuerPostTimetables,
  successPutTimetables,
  failuerPutTimetables,
  successDeleteTimetables,
  failuerDeleteTimetables
} from './actions'

function* requestAllLessons(action) {
  try {
    const response = yield call(api.allLessons, action.word)
    yield put(successAllLessons(response.data))
  } catch (error) {
    yield put(failuerAllLessons(error))
  }
}

export function* watchRequestAllLessons() {
  yield takeLatest(LessonsActionTypes.REQUEST_ALL_LESSONS, requestAllLessons)
}

function* requestMyTimetable() {
  try {
    const response = yield call(api.myTimetable)
    yield put(successMyTimetable(response.data))
  } catch (error) {
    yield put(failuerMyTimetable(error))
  }
}

export function* watchRequestMyTimetable() {
  yield takeLatest(LessonsActionTypes.REQUEST_MY_TIMETABLES, requestMyTimetable)
}

function* requestGetTimetable(action) {
  try {
    const response = yield call(api.getTimetable, action.id)
    yield put(successGetTimetable(response.data))
  } catch (error) {
    yield put(failuerGetTimetable(error))
  }
}

export function* watchRequestGetTimetable() {
  yield takeLatest(LessonsActionTypes.REQUEST_GET_TIMETABLES, requestGetTimetable)
}

function* requestPostTimetables(action) {
  try {
    const response = yield call(api.postTimetables, action.timetable)
    yield put(successPostTimetables(response.data))
  } catch (error) {
    yield put(failuerPostTimetables(error))
  }
}

export function* watchRequestPostTimetables() {
  yield takeLatest(LessonsActionTypes.REQUEST_POST_TIMETABLES, requestPostTimetables)
}
function* requestPutTimetables(action) {
  try {
    const response = yield call(api.putTimetables, action.timetable)
    yield put(successPutTimetables(response.data))
  } catch (error) {
    yield put(failuerPutTimetables(error))
  }
}

export function* watchRequestPutTimetables() {
  yield takeLatest(LessonsActionTypes.REQUEST_PUT_TIMETABLES, requestPutTimetables)
}
function* requestDeleteTimetables(action) {
  try {
    const response = yield call(api.deleteTimetables, action.id)
    yield put(successDeleteTimetables(response.data))
  } catch (error) {
    yield put(failuerDeleteTimetables(error))
  }
}

export function* watchRequestDeleteTimetables() {
  yield takeLatest(LessonsActionTypes.REQUEST_DELETE_TIMETABLES, requestDeleteTimetables)
}

export default [
  fork(watchRequestAllLessons),
  fork(watchRequestMyTimetable),
  fork(watchRequestGetTimetable),
  fork(watchRequestPostTimetables),
  fork(watchRequestPutTimetables),
  fork(watchRequestDeleteTimetables)
]
