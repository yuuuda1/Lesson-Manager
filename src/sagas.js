import { all } from 'redux-saga/effects'

import lessonsSagas from './lesson/sagas'

export default function* sagas() {
  yield all([
    ...lessonsSagas
  ])
}
