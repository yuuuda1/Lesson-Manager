import createReducer from './../utils/createReducer'
import LessonsActionTypes from './constants'

const initialState = {
  timetable: [],
  lessons : []
}

const getLessons = (state, action) => {
  return Object.assign({}, state, { 
    timetable : state.timetable,
    lessons : action.lessons 
  })
}

const getMyTimetable = (state, action) => {
  return Object.assign({}, state, {
    timetable : action.timetable,
    lessons : state.lessons
  })
}

const getTimetable = (state, action) => {
  return Object.assign({}, state, {
    timetable : action.timetable,
    lessons : state.lessons
  })
}

const postTimetables = (state, action) => {
  return state
}

const putTimetables = (state, action) => {
  return state
}

const deleteTimetables = (state, action) => {
  return state
}

export default createReducer(initialState, {
  [LessonsActionTypes.SUCCESS_ALL_LESSONS] : getLessons,
  [LessonsActionTypes.SUCCESS_MY_TIMETABLES] : getMyTimetable,
  [LessonsActionTypes.SUCCESS_GET_TIMETABLES] : getTimetable,
  [LessonsActionTypes.SUCCESS_POST_TIMETABLES] : postTimetables,
  [LessonsActionTypes.SUCCESS_PUT_TIMETABLES] : putTimetables,
  [LessonsActionTypes.SUCCESS_DELETE_TIMETABLES] : deleteTimetables
})
