import { connect } from 'react-redux'

import { requestMe } from 'app/modules/users/actions'

import { requestMyTimetable } from 'app/modules/timetable/actions'

import MyPage from 'app/modules/users/pages/MyPage'

const mapStateToProps = state => ({
  me : state.userReducer.me,
  timetable : state.lessonsReducer.myTimetable
})
const mapDispatchToProps = dispatch => ({
  requestMe : () => dispatch(requestMe()),
  requestMyTimetable : () => dispatch(requestMyTimetable())
})

export default connect(mapStateToProps, mapDispatchToProps)(MyPage)
