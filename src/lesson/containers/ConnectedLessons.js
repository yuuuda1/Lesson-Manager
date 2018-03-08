import { connect } from 'react-redux'

import {
  requestAllLessons,
  requestAllTimetables,
  requestGetTimetable,
  requestPostTimetables,
  requestPutTimetables,
  requestDeleteTimetables
} from './../actions'

import Lesson from './../Lesson'

const mapStateToProps = state => ({
  lessons : state.lessonsReducer.lessons,
  timetables : state.lessonsReducer.timetables
})
const mapDispatchToProps = dispatch => ({
  requestAllLessons : word => dispatch(requestAllLessons(word)),
  requestAllTimetables : () => dispatch(requestAllTimetables()),
  requestGetTimetable : () => dispatch(requestGetTimetable()),
  requestPostTimetables : timetable => dispatch(requestPostTimetables(timetable)),
  requestPutTimetables : (id, timetable) => dispatch(requestPutTimetables(id, timetable)),
  requestDeleteTimetables : id => dispatch(requestDeleteTimetables(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Lesson)
