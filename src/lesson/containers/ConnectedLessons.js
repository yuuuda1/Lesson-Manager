import { connect } from 'react-redux'

import {
  requestAllLessons,
  requestMyTimetable,
  requestGetTimetable,
  requestPostTimetables,
  requestPutTimetables,
  requestDeleteTimetables
} from './../actions'

import Lesson from './../Lesson'

const mapStateToProps = state => ({
  lessons : state.lessonsReducer.lessons,
  timetable : state.lessonsReducer.timetable
})
const mapDispatchToProps = dispatch => ({
  requestAllLessons : word => dispatch(requestAllLessons(word)),
  requestMyTimetable : () => dispatch(requestMyTimetable()),
  requestGetTimetable : id => dispatch(requestGetTimetable(id)),
  requestPostTimetables : timetable => dispatch(requestPostTimetables(timetable)),
  requestPutTimetables : (id, timetable) => dispatch(requestPutTimetables(id, timetable)),
  requestDeleteTimetables : id => dispatch(requestDeleteTimetables(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Lesson)
