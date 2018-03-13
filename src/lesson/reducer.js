import createReducer from 'app/utils/createReducer'
import LessonsActionTypes from './constants'

const initialState = {
  myTimetable: {},
  timetable: {},
  lessons : []
}

const getLessons = (state, action) => Object.assign({}, state, {
  myTimetable : state.myTimetable,
  timetable : state.timetable,
  lessons : action.lessons.data
})

const getMyTimetable = (state, action) => Object.assign({}, state, {
  myTimetable : action.timetable.data,
  timetable : state.timetable,
  lessons : state.lessons
})

const getTimetable = (state, action) => Object.assign({}, state, {
  myTimetable : state.myTimetable,
  timetable : action.timetable.data,
  lessons : state.lessons
})

const postTimetables = state => state

const putTimetables = state => state

const deleteTimetables = state => state

export default createReducer(initialState, {
  [LessonsActionTypes.SUCCESS_ALL_LESSONS] : getLessons,
  [LessonsActionTypes.SUCCESS_MY_TIMETABLES] : getMyTimetable,
  [LessonsActionTypes.SUCCESS_GET_TIMETABLES] : getTimetable,
  [LessonsActionTypes.SUCCESS_POST_TIMETABLES] : postTimetables,
  [LessonsActionTypes.SUCCESS_PUT_TIMETABLES] : putTimetables,
  [LessonsActionTypes.SUCCESS_DELETE_TIMETABLES] : deleteTimetables
})
