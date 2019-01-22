import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  fetchFitInfo,
  // fetchActivitySteps, not doing for presentation
  fetchSleepLog,
  fetchSleepGoal
} from '../store'

class WakeUp extends Component {
  constructor() {
    super()
    this.clickHandler = this.clickHandler.bind(this)
  }

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

  clickHandler() {
    this.props.fetchSleepLog(this.props.userInfo)
    this.props.fetchSleepGoal(this.props.userInfo)
  }

  render() {
    return (
      <Fragment>
        <div className="center">
          <h2>Great! Let's get your data</h2>
          <button onClick={this.clickHandler} type="button">
            Get Data
          </button>
          {this.props.sleep.length && this.props.goal ? (
            <Fragment>
              <h3>Now let's wake up your Ped!</h3>
              <button type="button">
                <Link to="/home">Wake Ped</Link>
              </button>
            </Fragment>
          ) : (
            ''
          )}
        </div>
      </Fragment>
    )
  }
}

const mapState = state => {
  return {
    user: state.fitbit.fitInfo.user,
    token: state.fitbit.fitInfo.token,
    userInfo: state.fitbit.fitInfo,
    sleep: state.sleep.sleep,
    goal: state.sleep.goal
  }
}

const mapDispatch = dispatch => ({
  fetchFitInfo: fitInfo => dispatch(fetchFitInfo(fitInfo)),
  // fetchActivitySteps: userInfo => dispatch(fetchActivitySteps(userInfo)), not doing for presentation
  fetchSleepLog: userInfo => dispatch(fetchSleepLog(userInfo)),
  fetchSleepGoal: userInfo => dispatch(fetchSleepGoal(userInfo))
})

export default connect(mapState, mapDispatch)(WakeUp)
