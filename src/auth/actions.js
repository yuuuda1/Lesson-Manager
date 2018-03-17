import AuthActionTypes from './constants'

export const requestLogin = (username, password) => ({
  type : AuthActionTypes.REQUEST_LOGIN,
  username: username,
  password: password
})

export const successLogin = token => ({
  type : AuthActionTypes.SUCCESS_LOGIN,
  token: token
})

export const failuerLogin = error => ({
  type : AuthActionTypes.FAILUER_LOGIN,
  error: error
})

export const requestLogout = () => ({
  type : AuthActionTypes.REQUEST_LOGOUT
})

export const successLogout = () => ({
  type : AuthActionTypes.SUCCESS_LOGOUT
})

export const successAuth = () => ({
  type: AuthActionTypes.SUCCESS_AUTH
})
