import createReducer from 'app/utils/createReducer'
import AuthActionTypes from './constants'

const initialState = {
  isAuthenticated: false,
  errorMessage: ''
}

const login = state => Object.assign({}, state, {
  isAuthenticated: true,
  errorMessage: state.errorMessage
})

const failureLogin = state => Object.assign({}, state, {
  isAuthenticated: false,
  errorMessage : 'ログインに失敗しました。IDまたはパスワードが間違えている可能性があります。'
})

const logout = state => Object.assign({}, state, {
  isAuthenticated: false,
  errorMessage: ''
})

const auth = state => Object.assign({}, state, {
  isAuthenticated: true,
  errorMessage: state.errorMessage
})

export default createReducer(initialState, {
  [AuthActionTypes.SUCCESS_LOGIN] : login,
  [AuthActionTypes.FAILUER_LOGIN] : failureLogin,
  [AuthActionTypes.SUCCESS_LOGOUT] : logout,
  [AuthActionTypes.SUCCESS_AUTH] : auth
})
