import 'babel-polyfill'

import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'

import reducer from 'app/reducer'
import sagas from 'app/sagas'
import authMiddleware from 'app/auth/middleware'

const sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware(
  routerMiddleware(),
  logger,
  authMiddleware,
  sagaMiddleware
)

const store = createStore(
  reducer,
  middleware
)

sagaMiddleware.run(sagas)

export default store
