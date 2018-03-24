import { successAuth } from './actions'

const authMiddleware = store => next => action => {
  const auth = store.getState().authReducer
  if (!auth.isAuthenticated) {
    const token = sessionStorage.getItem('_lesson_manager_token')
    if (token) {
      // TODO: token は正しいかの検証
      next(successAuth())
    }
  }
  next(action)
}

export default authMiddleware
