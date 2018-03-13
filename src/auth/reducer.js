import createReducer from 'app/utils/createReducer'
import AuthActionTypes from './constants'

const initialState = {
  accessToken: '',
  tokenType: '',
  refreshToken : ''
}

const login = (state, action) => Object.assign({}, state, {
  accessToken : action.token.access_token,
  tokenType: action.token.token_type,
  refreshToken : action.token.refresh_token
})

export default createReducer(initialState, {
  [AuthActionTypes.SUCCESS_LOGIN] : login
})
