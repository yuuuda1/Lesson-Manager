import { connect } from 'react-redux'

import { requestLogin } from './../../auth/actions'

import Login from './../Login'

const mapStateToProps = state => ({
  tokenType : state.authReducer.tokenType,
  accessToken : state.authReducer.accessToken,
  refreshToken: state.authReducer.refreshToken
})
const mapDispatchToProps = dispatch => ({
  requestLogin : (username, password) => dispatch(requestLogin(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
