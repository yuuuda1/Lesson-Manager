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
