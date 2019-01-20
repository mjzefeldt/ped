import axios from 'axios'
import {currentDay} from '../helper'

// ACTION TYPES

const GET_ACTIVITY_STEPS = 'GET_ACTIVITY_STEPS'

// INITIAL STATE

const defaultInfo = {
    activitySteps: []
  }

// ACTION CREATORS
const getActivitySteps = activitySteps => ({
  type: GET_ACTIVITY_STEPS,
  activitySteps
})

// HEADER CREATER
const headers = token => ({
  Authorization: `Bearer ${token}`
  // 'Content-Type': 'application/x-www-form-urlencoded'
})

// THUNK CREATORS

export const fetchActivitySteps = userInfo => async dispatch => {
  const header = headers(userInfo.token)
  try {
    const {data} = await axios.get(
      `https://api.fitbit.com/1/user/-/activities/tracker/steps/date/2019-01-15/${currentDay()}.json`,
      {headers: header}
    )
    console.log(data[`activities-tracker-steps`], '<<< the data')
    // dispatch(getActivitySteps(data))
  } catch (err) {
    console.error(err, '<<< ERROR in fetchFitInfo thunk')
  }
}
// an array of arrays[100 at a time] of objects
// [[{}, {}, {}..], [], []]
// REDUCER

export default function(state = defaultInfo, action) {
  switch (action.type) {
    case GET_ACTIVITY_STEPS:
      return {...state, activitySteps: action.activitySteps}
    default:
      return state
  }
}
