import { connect } from 'react-redux'

import {
  requestGetUser
} from './../actions'

import {
    requestGetTimetable
} from './../../lesson/actions'

import Profile from '../Profile';

const mapStateToProps = state => ({
  user : state.userReducer.user,
  timetable : state.lessonsReducer.timetable
})
const mapDispatchToProps = dispatch => ({
  requestGetUser : id => dispatch(requestGetUser(id)),
  requestGetTimetable : id => dispatch(requestGetTimetable(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
