import { connect } from 'react-redux'

import { requestGetUser } from 'app/modules/users/actions'

import { requestGetTimetable } from 'app/modules/timetable/actions'

import ProfilePage from 'app/modules/users/pages/ProfilePage'

const mapStateToProps = state => ({
  user : state.userReducer.user,
  timetable : state.lessonsReducer.timetable
})
const mapDispatchToProps = dispatch => ({
  requestGetUser : id => dispatch(requestGetUser(id)),
  requestGetTimetable : id => dispatch(requestGetTimetable(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
