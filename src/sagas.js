import { all } from 'redux-saga/effects'

import lessonsSagas from './lesson/sagas'
import authSagas from './auth/sagas'

export default function* sagas() {
  yield all([
    ...authSagas,
    ...lessonsSagas
  ])
}
