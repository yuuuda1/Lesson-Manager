import { connect } from 'react-redux'

import { requestLogin } from 'app/foundation/auth/actions'

import Login from 'app/foundation/auth/pages/login/Login'

const mapStateToProps = state => ({
  errorMessage : state.authReducer.errorMessage
})
const mapDispatchToProps = dispatch => ({
  requestLogin : (username, password) => dispatch(requestLogin(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
