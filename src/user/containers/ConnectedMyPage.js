import { connect } from 'react-redux'

import { requestMe } from 'app/user/actions'

import { requestMyTimetable } from 'app/lesson/actions'

import MyPage from 'app/user/pages/MyPage'

const mapStateToProps = state => ({
  me : state.userReducer.me,
  timetable : state.lessonsReducer.myTimetable
})
const mapDispatchToProps = dispatch => ({
  requestMe : () => dispatch(requestMe()),
  requestMyTimetable : () => dispatch(requestMyTimetable())
})

export default connect(mapStateToProps, mapDispatchToProps)(MyPage)
