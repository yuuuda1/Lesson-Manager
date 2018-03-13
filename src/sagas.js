import { all } from 'redux-saga/effects'

import lessonsSagas from 'app/lesson/sagas'
import authSagas from 'app/auth/sagas'
import userSagas from 'app/user/sagas'

export default function* sagas() {
  yield all([
    ...authSagas,
    ...lessonsSagas,
    ...userSagas
  ])
}
