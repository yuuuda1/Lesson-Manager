import LessonsActionTypes from './constants'

export const requestAllLessons = () => ({
  type : LessonsActionTypes.REQUEST_ALL_LESSONS
})

export const successAllLessons = lessons => ({
  type : LessonsActionTypes.SUCCESS_ALL_LESSONS,
  lessons
})
export const failuerAllLessons = error => ({
  type : LessonsActionTypes.FAILUER_ALL_LESSONS,
  error
})
