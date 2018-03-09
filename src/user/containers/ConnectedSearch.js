import { connect } from 'react-redux'

import {
  requestAllUsers
} from './../actions'

import Search from './../Search'

const mapStateToProps = state => ({
  users : state.userReducer.users,
})
const mapDispatchToProps = dispatch => ({
  requestAllUsers : word => dispatch(requestAllUsers(word))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
