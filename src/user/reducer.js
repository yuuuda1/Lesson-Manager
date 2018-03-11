import createReducer from './../utils/createReducer'
import UsersActionTypes from './constants'

const initialState = {
  users: [],
  user: {}
}

const getUsers = (state, action) => Object.assign({}, state, {
  users : action.users.data,
  user : state.user
})

const getUser = (state, action) => Object.assign({}, state, {
  users : state.users,
  user : action.user.data
})

export default createReducer(initialState, {
  [UsersActionTypes.SUCCESS_ALL_USERS] : getUsers,
  [UsersActionTypes.SUCCESS_GET_USERS] : getUser
})
