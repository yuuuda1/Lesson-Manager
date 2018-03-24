import UsersActionTypes from './constants'

export const requestAllUsers = word => ({
  type : UsersActionTypes.REQUEST_ALL_USERS,
  word: word
})

export const successAllUsers = users => ({
  type : UsersActionTypes.SUCCESS_ALL_USERS,
  users: users
})

export const failuerAllUsers = error => ({
  type : UsersActionTypes.FAILUER_ALL_USERS,
  error: error
})

export const requestGetUser = id => ({
  type : UsersActionTypes.REQUEST_GET_USERS,
  id: id
})

export const successGetUser = user => ({
  type : UsersActionTypes.SUCCESS_GET_USERS,
  user: user
})

export const failuerGetUser = error => ({
  type : UsersActionTypes.FAILUER_GET_USERS,
  error: error
})

export const requestMe = () => ({
  type : UsersActionTypes.REQUEST_MY_USERS
})

export const successMe = user => ({
  type : UsersActionTypes.SUCCESS_MY_USERS,
  user: user
})

export const failuerMe = error => ({
  type : UsersActionTypes.FAILUER_MY_USERS,
  error: error
})

export const requestPutMe = (name, email, password) => ({
  type : UsersActionTypes.REQUEST_PUT_USERS,
  name: name,
  email: email,
  password: password
})

export const successPutMe = user => ({
  type : UsersActionTypes.SUCCESS_PUT_USERS,
  user: user
})

export const failuerPutMe = error => ({
  type : UsersActionTypes.FAILUER_PUT_USERS,
  error: error
})
