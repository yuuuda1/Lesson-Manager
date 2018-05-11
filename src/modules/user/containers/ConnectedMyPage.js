import { connect } from 'react-redux'

import { requestMe } from 'app/modules/user/actions'

import { requestMyTimetable } from 'app/modules/lesson/actions'

import MyPage from 'app/modules/user/pages/MyPage'

const mapStateToProps = state => ({
  me : state.userReducer.me,
  timetable : state.lessonsReducer.myTimetable
})
const mapDispatchToProps = dispatch => ({
  requestMe : () => dispatch(requestMe()),
  requestMyTimetable : () => dispatch(requestMyTimetable())
})

export default connect(mapStateToProps, mapDispatchToProps)(MyPage)
