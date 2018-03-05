import createReducer from './../utils/createReducer'
import LessonsActionTypes from './constants'

const initialState = {
  lessons : []
}
const getLessons = (state, action) => {
  return Object.assign({}, state, { lessons : action.lessons })
}
export default createReducer(initialState, {
  [LessonsActionTypes.SUCCESS_ALL_LESSONS] : getLessons
})
