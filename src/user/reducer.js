import createReducer from 'app/utils/createReducer'
import UsersActionTypes from './constants'

const initialState = {
  me: {},
  users: [],
  user: {}
}

const getUsers = (state, action) => Object.assign({}, state, {
  me : state.me,
  users : action.users.data,
  user : state.user
})

const getUser = (state, action) => Object.assign({}, state, {
  me : state.me,
  users : state.users,
  user : action.user.data
})

const getMe = (state, action) => Object.assign({}, state, {
  me : action.user.data,
  users : state.users,
  user : state.user
})

const putMe = (state, action) => {
  window.location.href = '/users/me'
  return Object.assign({}, state, {
    me : action.user.data,
    users : state.users,
    user : state.user
  })
}

export default createReducer(initialState, {
  [UsersActionTypes.SUCCESS_ALL_USERS] : getUsers,
  [UsersActionTypes.SUCCESS_GET_USERS] : getUser,
  [UsersActionTypes.SUCCESS_MY_USERS] : getMe,
  [UsersActionTypes.SUCCESS_PUT_USERS] : putMe
})
