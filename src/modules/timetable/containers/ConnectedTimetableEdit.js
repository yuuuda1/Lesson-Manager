import { connect } from 'react-redux'

import {
  requestAllLessons,
  requestPutTimetables
} from 'app/modules/timetable/actions'

import TimetableEditPage from 'app/modules/timetable/pages/TimetableEditPage'

const mapStateToProps = state => ({
  lessons : state.lessonsReducer.lessons,
  message : state.lessonsReducer.message,
  timetable : state.lessonsReducer.myTimetable
})
const mapDispatchToProps = dispatch => ({
  requestAllLessons : items => dispatch(requestAllLessons(items)),
  requestPutTimetables : timetable => dispatch(requestPutTimetables(timetable))
})

export default connect(mapStateToProps, mapDispatchToProps)(TimetableEditPage)
