import React from 'react'
// import {connect} from 'react-redux'
// import {auth} from '../store'
import secrets from '../../secrets' 

/**
 * COMPONENT
 */
const AuthForm = props => {
  return (
    <div>
      <h2>Welcome Back - Wake up your Ped!</h2>
      <a
        href={`https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=${secrets.id()}&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fhome&scope=activity%20profile%20sleep&expires_in=604800`}
      >
        Wake up!
      </a>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
// const mapLogin = state => {
//   return {
//     name: 'login',
//     displayName: 'Login',
//     error: state.user.error
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handleSubmit(evt) {
//       evt.preventDefault()
//       const formName = evt.target.name
//       const email = evt.target.email.value
//       const password = evt.target.password.value
//       dispatch(auth(email, password, formName))
//     }
//   }
// }

// export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Login = AuthForm
