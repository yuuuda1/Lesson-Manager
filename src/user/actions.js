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
