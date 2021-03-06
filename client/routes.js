import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {AuthForm, WakeUp, UserHome} from './components'

class Routes extends Component {
  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes places here are avaialable without fitbit user authentication */}
        <Route exact path="/" component={AuthForm} />
        <Route exact path="/wakeup" component={WakeUp} />

        {/* Routes placed here are available after fitbit user authentication */}
        {isLoggedIn && <Route exact path="/home" component={UserHome} />}
      </Switch>
    )
  }
}

const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    isLoggedIn: !!state.fitbit.fitInfo.user
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes

export default withRouter(connect(mapState)(Routes))
