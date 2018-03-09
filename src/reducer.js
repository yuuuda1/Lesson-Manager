import { combineReducers } from 'redux'

import lessonsReducer from './lesson/reducer'
import authReducer from './auth/reducer'
import userReducer from './user/reducer'

export default combineReducers({
  authReducer,
  lessonsReducer,
  userReducer
})
