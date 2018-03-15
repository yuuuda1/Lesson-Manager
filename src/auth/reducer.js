import createReducer from 'app/utils/createReducer'
import AuthActionTypes from './constants'

const initialState = {
  errorMessage: ''
}

const login = () => {
  window.location.href = 'http://localhost:3000/lesson'
}

const failureLogin = state => Object.assign({}, state, {
  errorMessage : 'ログインに失敗しました。IDまたはパスワードが間違えている可能性があります。'
})

export default createReducer(initialState, {
  [AuthActionTypes.SUCCESS_LOGIN] : login,
  [AuthActionTypes.FAILUER_LOGIN] : failureLogin
})
