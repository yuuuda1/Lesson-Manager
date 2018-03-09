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
    failuerGetUser
} from './actions'
  
function* requestAllUsers(action) {
    try{
      const response = yield call(api.allUsers, action.word)
      yield put(successAllUsers(response.data))
    } catch(error) {
      yield put(failuerAllUsers(error))
    }
}
  
export function* watchRequestAllUsers() {
    yield takeLatest(UsersActionTypes.REQUEST_ALL_USERS, requestAllUsers)
}

function* requestGetUser(action) {
    try{
      const response = yield call(api.getUser, action.id)
      yield put(successGetUser(response.data))
    } catch(error) {
      yield put(failuerGetUser(error))
    }
}
  
export function* watchRequestGetUser() {
    yield takeLatest(UsersActionTypes.REQUEST_GET_USERS, requestGetUser)
}
  
export default [
    fork(watchRequestAllUsers),
    fork(watchRequestGetUser)
]
  