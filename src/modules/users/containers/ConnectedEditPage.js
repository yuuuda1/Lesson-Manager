import { connect } from 'react-redux'

import { requestPutMe } from 'app/modules/users/actions'

import UserEditPage from 'app/modules/users/pages/UserEditPage'

const mapStateToProps = state => ({
  me : state.userReducer.me,
  message : state.userReducer.message
})
const mapDispatchToProps = dispatch => ({
  requestPutMe : (name, email, password) => dispatch(requestPutMe(name, email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserEditPage)