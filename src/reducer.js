import { combineReducers } from 'redux'

import lessonsReducer from 'app/lesson/reducer'
import authReducer from 'app/auth/reducer'
import userReducer from 'app/user/reducer'

export default combineReducers({
  authReducer,
  lessonsReducer,
  userReducer
})
