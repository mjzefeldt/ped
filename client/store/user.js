import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
// const GET_PROFILE = 'USER_PROFILE'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
// const getProfile = () => GET_PROFILE

/**
 * THUNK CREATORS
 */

// fetch now installed if want to try that
// export const fetchProfile = (url) => async dispatch => {
//   console.log('thunk before call')

//   try {
//     const res = await axios.post('https://api.fitbit.com/oauth2/token', {
//       method: 'POST',
//       headers: {
//         'Authorization': 'Basic MjJEQjlROjEzNWM2YzI3NjIxZTY1NWRlZWVlYTQwNDNhMjA2MzU2',
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       body: `client_id=22DB9Q&grant_type=authorization_code&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fauth%2Ffitbit%2Fcallback&code=${url}`
//     })
//     console.log(res.data, '<<< res in thunk')
//   } catch (err) {
//     console.error(err)
//   }
// }
// client_id=22DB9Q&grant_type=authorization_code&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fauth%2Ffitbit%2Fcallback&code=303739859f45e8230dec0fff048949410a8900c0

// curl -X POST -i -H 'Authorization: Basic MjJEQjlROjEzNWM2YzI3NjIxZTY1NWRlZWVlYTQwNDNhMjA2MzU2' -H 'Content-Type: application/x-www-form-urlencoded'
// -d "clientId=22DB9Q" -d "grant_type=authorization_code" -d "redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fauth%2Ffitbit%2Fcallback" -d "code=7b2dfdab0a80d3dad6c5c93c30de03e2e0224a5c" https://api.fitbit.com/oauth2/token

export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
