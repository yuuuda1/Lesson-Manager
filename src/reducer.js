import { combineReducers } from 'redux'

import lessonsReducer from 'app/modules/lesson/reducer'
import authReducer from 'app/foundation/auth/reducer'
import userReducer from 'app/modules/user/reducer'

export default combineReducers({
  authReducer,
  lessonsReducer,
  userReducer
})
