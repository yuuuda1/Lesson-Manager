import { connect } from 'react-redux'

import {
  requestAllLessons,
  requestPutTimetables
} from 'app/lesson/actions'

import TimetableEditPage from 'app/lesson/pages/TimetableEditPage'

const mapStateToProps = state => ({
  lessons : state.lessonsReducer.lessons,
  message : state.lessonsReducer.message,
  timetable : state.lessonsReducer.myTimetable
})
const mapDispatchToProps = dispatch => ({
  requestAllLessons : word => dispatch(requestAllLessons(word)),
  requestPutTimetables : timetable => dispatch(requestPutTimetables(timetable))
})

export default connect(mapStateToProps, mapDispatchToProps)(TimetableEditPage)
