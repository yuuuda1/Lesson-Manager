import { all } from 'redux-saga/effects'

import lessonsSagas from 'app/modules/lesson/sagas'
import authSagas from 'app/foundation/auth/sagas'
import userSagas from 'app/modules/user/sagas'

export default function* sagas() {
  yield all([
    ...authSagas,
    ...lessonsSagas,
    ...userSagas
  ])
}
