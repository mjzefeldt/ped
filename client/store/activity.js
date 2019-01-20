import axios from 'axios'
import utils from '../../helper'

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

// THUNK CREATORS

export const fetchActivitySteps = userInfo => async dispatch => {
  const currentDay = utils.currentDay()
  const weekAgo = utils.previousWeek(currentDay)
  try {
    const {data} = await axios.get(
      `https://api.fitbit.com/1/user/-/activities/tracker/steps/date/${weekAgo}/${currentDay}.json`,
      utils.headers(userInfo.token)
    )
    dispatch(getActivitySteps(data[`activities-tracker-steps`]))
  } catch (err) {
    console.error(err, '<<< ERROR in fetchActivitySteps thunk')
  }
}

export default function(state = defaultInfo, action) {
  switch (action.type) {
    case GET_ACTIVITY_STEPS:
      return {...state, activitySteps: action.activitySteps}
    default:
      return state
  }
}
