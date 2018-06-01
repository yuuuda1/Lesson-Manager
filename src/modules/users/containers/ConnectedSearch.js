import { connect } from 'react-redux'

import { requestAllUsers } from 'app/modules/users/actions'

import SearchPage from 'app/modules/users/pages/SearchPage'

const mapStateToProps = state => ({
  users : state.userReducer.users
})
const mapDispatchToProps = dispatch => ({
  requestAllUsers : word => dispatch(requestAllUsers(word))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
