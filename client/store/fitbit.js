import axios from 'axios'

// ACTION TYPES

const GET_FIT_INFO = 'GET_FIT_INFO'

// INITIAL STATE

const defaultInfo = {fitInfo: {}}

// ACTION CREATORS
const getFitInfo = fitInfo => ({type: GET_FIT_INFO, fitInfo})

// THUNK CREATORS

export const fetchFitInfo = fitInfo => dispatch => {
  try {
    dispatch(getFitInfo(fitInfo))
  } catch (err) {
    console.error(err, '<<< ERROR in fetchFitInfo thunk')
  }
}

// REDUCER

export default function(state = defaultInfo, action) {
  switch (action.type) {
    case GET_FIT_INFO:
      return {...state, fitInfo: action.fitInfo}
    default:
      return state
  }
}
