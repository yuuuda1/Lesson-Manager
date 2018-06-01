import { connect } from 'react-redux'

import {
  requestAllLessons,
  requestGetTimetable,
  requestPostTimetables,
  requestPutTimetables,
  requestDeleteTimetables
} from 'app/modules/timetable/actions'

import RegisterPage from 'app/modules/timetable/pages/RegisterPage'

const mapStateToProps = state => ({
  lessons : state.lessonsReducer.lessons,
  message : state.lessonsReducer.message,
  timetables : state.lessonsReducer.timetables
})
const mapDispatchToProps = dispatch => ({
  requestAllLessons : items => dispatch(requestAllLessons(items)),
  requestGetTimetable : () => dispatch(requestGetTimetable()),
  requestPostTimetables : timetable => dispatch(requestPostTimetables(timetable)),
  requestPutTimetables : (id, timetable) => dispatch(requestPutTimetables(id, timetable)),
  requestDeleteTimetables : id => dispatch(requestDeleteTimetables(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)
