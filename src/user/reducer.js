import createReducer from './../utils/createReducer'
import UsersActionTypes from './constants'

const initialState = {
  users: [],
  user: []
}

const getUsers = (state, action) => {
  return Object.assign({}, state, { 
    users : action.users,
    user : state.user
  })
}

const getUser = (state, action) => {
    return Object.assign({}, state, {
      users : state.users,
      user : action.user
    })
}

export default createReducer(initialState, {
  [UsersActionTypes.SUCCESS_ALL_USERS] : getUsers,
  [UsersActionTypes.SUCCESS_GET_USERS] : getUser
})
