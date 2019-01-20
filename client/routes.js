import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Login, UserHome} from './components'

class Routes extends Component {
  // componentDidMount() {
  //   this.props.loadInitialData()
  // }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes places here are avaialable without fitbit user authentication */}
        <Route exact path="/" component={Login} />

        {/* Routes placed here are available after fitbit user authentication */}
        {/* {isLoggedIn && */}
        <Route exact path="/home" component={UserHome} />
        {/* } */}
      </Switch>
    )
  }
}

{/* temporary disable while work on svg and front end components */}
// const mapState = state => {
//   return {
//     // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
//     // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    
//     isLoggedIn: !!state.fitbit.fitInfo.user
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     loadInitialData() {
//       dispatch(me())
//     }
//   }
// }

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes

{/* temporary disable while work on svg and front end components */}
// export default withRouter(connect(mapState)(Routes))
export default withRouter(Routes)
