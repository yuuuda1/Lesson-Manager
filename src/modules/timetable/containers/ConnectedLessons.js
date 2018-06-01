import { connect } from 'react-redux'

import {
  requestAllLessons,
  requestMyTimetable,
  requestGetTimetable,
  requestPostTimetables,
  requestPutTimetables,
  requestDeleteTimetables
} from 'app/modules/timetable/actions'

import LessonPage from 'app/modules/timetable/pages/LessonPage'

const mapStateToProps = state => ({
  lessons : state.lessonsReducer.lessons,
  timetable : state.lessonsReducer.myTimetable
})
const mapDispatchToProps = dispatch => ({
  requestAllLessons : word => dispatch(requestAllLessons(word)),
  requestMyTimetable : () => dispatch(requestMyTimetable()),
  requestGetTimetable : id => dispatch(requestGetTimetable(id)),
  requestPostTimetables : timetable => dispatch(requestPostTimetables(timetable)),
  requestPutTimetables : (id, timetable) => dispatch(requestPutTimetables(id, timetable)),
  requestDeleteTimetables : id => dispatch(requestDeleteTimetables(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(LessonPage)
