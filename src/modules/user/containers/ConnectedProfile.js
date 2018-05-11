import { connect } from 'react-redux'

import { requestGetUser } from 'app/modules/user/actions'

import { requestGetTimetable } from 'app/modules/lesson/actions'

import ProfilePage from 'app/modules/user/pages/ProfilePage'

const mapStateToProps = state => ({
  user : state.userReducer.user,
  timetable : state.lessonsReducer.timetable
})
const mapDispatchToProps = dispatch => ({
  requestGetUser : id => dispatch(requestGetUser(id)),
  requestGetTimetable : id => dispatch(requestGetTimetable(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
