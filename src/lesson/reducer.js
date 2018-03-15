import createReducer from 'app/utils/createReducer'
import LessonsActionTypes from './constants'

const initialState = {
  myTimetable: {},
  timetable: {},
  lessons : [],
  message : ''
}

const getLessons = (state, action) => Object.assign({}, state, {
  myTimetable : state.myTimetable,
  timetable : state.timetable,
  lessons : action.lessons.data,
  message : state.message
})

const getMyTimetable = (state, action) => Object.assign({}, state, {
  myTimetable : action.timetable.data,
  timetable : state.timetable,
  lessons : state.lessons,
  message : state.message
})

const getTimetable = (state, action) => Object.assign({}, state, {
  myTimetable : state.myTimetable,
  timetable : action.timetable.data,
  lessons : state.lessons,
  message : state.message
})

const postTimetables = () => {
  window.location.href = '/lesson'
}

const failPostTimetables = state => Object.assign({}, state, {
  myTimetable : state.myTimetable,
  timetable : state.timetable,
  lessons : state.lessons,
  message : '時間割の登録に失敗しました。'
})

const putTimetables = () => {
  window.location.href = '/lesson'
}

const failPutTimetables = state => Object.assign({}, state, {
  myTimetable : state.myTimetable,
  timetable : state.timetable,
  lessons : state.lessons,
  message : '編集に失敗しました。'
})

const deleteTimetables = state => state

export default createReducer(initialState, {
  [LessonsActionTypes.SUCCESS_ALL_LESSONS] : getLessons,
  [LessonsActionTypes.SUCCESS_MY_TIMETABLES] : getMyTimetable,
  [LessonsActionTypes.SUCCESS_GET_TIMETABLES] : getTimetable,
  [LessonsActionTypes.SUCCESS_POST_TIMETABLES] : postTimetables,
  [LessonsActionTypes.FAILURE_POST_TIMETABLES] : failPostTimetables,
  [LessonsActionTypes.SUCCESS_PUT_TIMETABLES] : putTimetables,
  [LessonsActionTypes.FAILURE_PUT_TIMETABLES] : failPutTimetables,
  [LessonsActionTypes.SUCCESS_DELETE_TIMETABLES] : deleteTimetables
})
