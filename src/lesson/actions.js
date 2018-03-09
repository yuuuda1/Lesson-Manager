import LessonsActionTypes from './constants'

export const requestAllLessons = word => ({
  type : LessonsActionTypes.REQUEST_ALL_LESSONS,
  word
})

export const successAllLessons = lessons => ({
  type : LessonsActionTypes.SUCCESS_ALL_LESSONS,
  lessons
})
export const failuerAllLessons = error => ({
  type : LessonsActionTypes.FAILUER_ALL_LESSONS,
  error
})

export const requestMyTimetable = () => ({
  type : LessonsActionTypes.REQUEST_MY_TIMETABLES,
})

export const successMyTimetable = timetable => ({
  type : LessonsActionTypes.SUCCESS_MY_TIMETABLES,
  timetable
})
export const failuerMyTimetable = error => ({
  type : LessonsActionTypes.FAILUER_MY_TIMETABLES,
  error
})

export const requestGetTimetable = id => ({
  type : LessonsActionTypes.REQUEST_GET_TIMETABLES,
  id
})

export const successGetTimetable = timetable => ({
  type : LessonsActionTypes.SUCCESS_GET_TIMETABLES,
  timetable
})
export const failuerGetTimetable = error => ({
  type : LessonsActionTypes.FAILUER_GET_TIMETABLES,
  error
})

export const requestPostTimetables = timetable => ({
  type : LessonsActionTypes.REQUEST_POST_TIMETABLES,
  timetable
})

export const successPostTimetables = timetable => ({
  type : LessonsActionTypes.SUCCESS_POST_TIMETABLES,
  timetable
})
export const failuerPostTimetables = error => ({
  type : LessonsActionTypes.FAILUER_POST_TIMETABLES,
  error
})

export const requestPutTimetables = (id, timetable) => ({
  type : LessonsActionTypes.REQUEST_PUT_TIMETABLES,
  id,
  timetable
})

export const successPutTimetables = () => ({
  type : LessonsActionTypes.SUCCESS_PUT_TIMETABLES,
})
export const failuerPutTimetables = error => ({
  type : LessonsActionTypes.FAILUER_PUT_TIMETABLES,
  error
})

export const requestDeleteTimetables = id => ({
  type : LessonsActionTypes.REQUEST_DELETE_TIMETABLES,
  id
})

export const successDeleteTimetables = () => ({
  type : LessonsActionTypes.SUCCESS_DELETE_TIMETABLES,
})
export const failuerDeleteTimetables = error => ({
  type : LessonsActionTypes.FAILUER_DELETE_TIMETABLES,
  error
})

