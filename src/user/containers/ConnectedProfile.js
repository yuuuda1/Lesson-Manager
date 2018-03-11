import { connect } from 'react-redux'

import { requestGetUser } from 'app/user/actions'

import { requestGetTimetable } from 'app/lesson/actions'

import ProfilePage from 'app/user/pages/ProfilePage'

const mapStateToProps = state => ({
  user : state.userReducer.user,
  timetable : state.lessonsReducer.timetable
})
const mapDispatchToProps = dispatch => ({
  requestGetUser : id => dispatch(requestGetUser(id)),
  requestGetTimetable : id => dispatch(requestGetTimetable(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
