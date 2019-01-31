import React, {Component} from 'react'
import secrets from '../../secrets'

class AuthForm extends Component {
  render() {
    return (
      <div className="center">
        <div>
          <h2>Loginto Fitbit to get started with Ped</h2>
        </div>
        <div>
          <a
            href={`https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=${secrets.id()}&redirect_uri=https%3A%2F%2Fped-wellness-pet.herokuapp.com%2Fwakeup&scope=activity%20profile%20sleep&expires_in=604800`}
          >
            Login to Fitbit Account
          </a>
        </div>
      </div>
    )
  }
}

export default AuthForm
