import AuthActionTypes from './constants'

export const requestLogin = (username, password) => ({
  type : AuthActionTypes.REQUEST_LOGIN,
  username,
  password
})

export const successLogin = token => ({
  type : AuthActionTypes.SUCCESS_LOGIN,
  token
})
export const failuerLogin = error => ({
  type : AuthActionTypes.FAILUER_LOGIN,
  error
})