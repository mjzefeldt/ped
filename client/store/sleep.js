import axios from 'axios'
import utils from '../../helper'

// ACTION TYPES

const GET_SLEEP_LOG = 'GET_SLEEP_LOG'
const GET_SLEEP_GOAL = 'GET_SLEEP_GOAL'

// INITIAL STATE

const defaultInfo = {
  sleep: [],
  goal: {}
}

// ACTION CREATORS
const getSleepLog = sleepLog => ({
  type: GET_SLEEP_LOG,
  sleepLog
})

const getSleepGoal = sleepGoal => ({
  type: GET_SLEEP_GOAL,
  sleepGoal
})

// THUNK CREATORS

export const fetchSleepLog = userInfo => async dispatch => {
  const currentDay = utils.currentDay()
  const weekAgo = utils.previousWeek(currentDay)
  try {
    const {data} = await axios.get(
      `https://api.fitbit.com/1.2/user/-/sleep/date/${weekAgo}/${currentDay}.json`,
      utils.headers(userInfo.token)
    )
    dispatch(getSleepLog(data.sleep))
  } catch (err) {
    console.error(err, '<<< ERROR in fetchSleepLog thunk')
  }
}

export const fetchSleepGoal = userInfo => async dispatch => {
  try {
    const {data} = await axios.get(
      `https://api.fitbit.com/1/user/-/sleep/goal.json`,
      utils.headers(userInfo.token)
    )
    console.log(data, '<<< the goal')
    dispatch(getSleepGoal(data))
  } catch (err) {
    console.error(err, '<<< ERROR in fetchSleepGoal thunk')
  }
}

export default function(state = defaultInfo, action) {
  switch (action.type) {
    case GET_SLEEP_LOG:
      return {...state, sleep: action.sleepLog}
    case GET_SLEEP_GOAL:
      return {...state, goal: action.sleepGoal}
    default:
      return state
  }
}
