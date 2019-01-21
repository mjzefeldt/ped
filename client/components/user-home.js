import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {
  fetchFitInfo,
  fetchActivitySteps,
  fetchSleepLog,
  fetchSleepGoal
} from '../store'
import ActivityContainer from './activity-container'

export class UserHome extends Component {
  componentDidMount() {
    const url = window.location.href
    const user = url
      .split('#')[1]
      .split('=')[2]
      .split('&')[0]
    const token = url
      .split('#')[1]
      .split('=')[1]
      .split('&')[0]
    const fitInfo = {user, token}
    this.props.fetchFitInfo(fitInfo)
  }

  componentDidUpdate() {
    this.props.fetchActivitySteps(this.props.userInfo)
    this.props.fetchSleepLog(this.props.userInfo)
    this.props.fetchSleepGoal(this.props.userInfo)
  }

  render() {
    const userInfo = this.props.userInfo
    return (
      <Fragment>
        <div>
          <header className="center">
            <h3>Welcome! Fitbit OAuth worked!</h3>
          </header>
          <main className="center">
            {/* This may be working - reached rate limit and can't verify */}
            <ActivityContainer
              sleep={this.props.sleep}
              goal={this.props.goal}
            />
          </main>
        </div>
      </Fragment>
    )
  }
}

const mapState = state => {
  return {
    user: state.fitbit.fitInfo.user,
    token: state.fitbit.fitInfo.token,
    userInfo: state.fitbit.fitInfo
    // sleep: state.sleep.sleep, //cant do this here bc of component didUpdate...
    // goal: state.sleep.goal,
  }
}

const mapDispatch = dispatch => ({
  fetchFitInfo: fitInfo => dispatch(fetchFitInfo(fitInfo)),
  fetchActivitySteps: userInfo => dispatch(fetchActivitySteps(userInfo)),
  fetchSleepLog: userInfo => dispatch(fetchSleepLog(userInfo)),
  fetchSleepGoal: userInfo => dispatch(fetchSleepGoal(userInfo))
})

export default connect(mapState, mapDispatch)(UserHome)
// export default UserHome
