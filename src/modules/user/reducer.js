import createReducer from 'app/utils/createReducer'
import UsersActionTypes from './constants'

const initialState = {
  me: {},
  users: [],
  user: {},
  message: ''
}

const getUsers = (state, action) => Object.assign({}, state, {
  me : state.me,
  users : action.users.data,
  user : state.user,
  message : state.message
})

const getUser = (state, action) => Object.assign({}, state, {
  me : state.me,
  users : state.users,
  user : action.user.data,
  message : state.message
})

const getMe = (state, action) => Object.assign({}, state, {
  me : action.user.data,
  users : state.users,
  user : state.user,
  message : state.message
})

const putMe = (state, action) => Object.assign({}, state, {
  me : action.user.data,
  users : state.users,
  user : state.user,
  message : '編集に成功しました'
})

const failPutMe = state => Object.assign({}, state, {
  me : state.me,
  users : state.users,
  user : state.user,
  message : '編集に失敗しました'
})

export default createReducer(initialState, {
  [UsersActionTypes.SUCCESS_ALL_USERS] : getUsers,
  [UsersActionTypes.SUCCESS_GET_USERS] : getUser,
  [UsersActionTypes.SUCCESS_MY_USERS] : getMe,
  [UsersActionTypes.SUCCESS_PUT_USERS] : putMe,
  [UsersActionTypes.FAILUER_PUT_USERS] : failPutMe
})
