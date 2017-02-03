import 'babelify/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { createHistory } from 'history'
import routes from './routes'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import * as reducers from './reducers'
import { fromJS } from 'immutable'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const $app = document.getElementById('ReactApp')
console.log('test')

if ($app) {
  let initialState = window.__INITIAL_STATE__ || {}

  // back and forwards browser
  const history = createHistory()


  const loggerMiddleware = createLogger()

  const reducer = combineReducers(reducers)
  const store = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore)(reducer, initialState)

  ReactDOM.render(
    <Provider store={store}>
      <Router children={routes} history={history} />
    </Provider>,
    $app
  )
}
