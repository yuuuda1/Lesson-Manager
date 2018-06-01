import { combineReducers } from 'redux'

import lessonsReducer from 'app/modules/timetable/reducer'
import authReducer from 'app/foundation/auth/reducer'
import userReducer from 'app/modules/users/reducer'

export default combineReducers({
  authReducer,
  lessonsReducer,
  userReducer
})
