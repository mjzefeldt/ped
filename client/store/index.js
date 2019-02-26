import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import fitbit from './fitbit'
import activity from './activity'
import sleep from './sleep'

const reducer = combineReducers({
  fitbit,
  activity,
  sleep
})

const localStorageMiddleware = ({getState}) => {
  return next => action => {
    const result = next(action)
    localStorage.setItem('applicationState', JSON.stringify(getState()))
    return result
  }
}

const reHydrateStore = () => {
  if (localStorage.getItem('applicationState') !== null) {
    return JSON.parse(localStorage.getItem('applicationState'))
  }
}

const middleware = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware,
    createLogger({collapsed: true}),
    localStorageMiddleware
  )
)
const store = createStore(reducer, reHydrateStore(), middleware)

export default store
export * from './fitbit'
export * from './activity'
export * from './sleep'
