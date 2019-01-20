import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
// import user from './user'
import fitbit from './fitbit'
import activity from './activity'
import sleep from './sleep'

const reducer = combineReducers({
  fitbit,
  activity,
  sleep
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './fitbit'
export * from './activity'
export * from './sleep'
