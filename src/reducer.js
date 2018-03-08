import { combineReducers } from 'redux'

import lessonsReducer from './lesson/reducer'
import authReducer from './auth/reducer'

export default combineReducers({
  authReducer,
  lessonsReducer
})
