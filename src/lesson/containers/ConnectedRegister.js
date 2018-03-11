import { connect } from 'react-redux'

import {
  requestAllLessons,
  requestGetTimetable,
  requestPostTimetables,
  requestPutTimetables,
  requestDeleteTimetables
} from 'app/lesson/actions'

import RegisterPage from 'app/lesson/pages/RegisterPage'

const mapStateToProps = state => ({
  tokenType : state.authReducer.tokenType,
  accessToken : state.authReducer.accessToken,
  refreshToken: state.authReducer.refreshToken,
  lessons : state.lessonsReducer.lessons,
  timetables : state.lessonsReducer.timetables
})
const mapDispatchToProps = dispatch => ({
  requestAllLessons : word => dispatch(requestAllLessons(word)),
  requestGetTimetable : () => dispatch(requestGetTimetable()),
  requestPostTimetables : timetable => dispatch(requestPostTimetables(timetable)),
  requestPutTimetables : (id, timetable) => dispatch(requestPutTimetables(id, timetable)),
  requestDeleteTimetables : id => dispatch(requestDeleteTimetables(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)
