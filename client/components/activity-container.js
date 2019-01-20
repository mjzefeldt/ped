import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {fetchActivitySteps, fetchSleepLog, fetchSleepGoal} from '../store'

export class ActivityContainer extends Component {
  constructor() {
    // this.state = {
    //     pedAppearance: [],
    //     days: [],
    //     data: []
    // }
    // will eventually need local state to wrap ped
    super()
    this.handleActivity = this.handleActivity.bind(this)
    this.handleSleep = this.handleSleep.bind(this)
    this.handleSleepGoal = this.handleSleepGoal.bind(this)
  }
  handleActivity() {
    this.props.fetchActivitySteps(this.props.userInfo)
  }
  handleSleep() {
    this.props.fetchSleepLog(this.props.userInfo)
  }
  handleSleepGoal() {
    this.props.fetchSleepGoal(this.props.userInfo)
  }
  render() {
    return (
      <Fragment>
        <h2>Activity Container</h2>
        <button type="button" onClick={this.handleActivity}>
          Get Activity
        </button>
        <button type="button" onClick={this.handleSleep}>
          Get Sleep Log
        </button>
        <button type="button" onClick={this.handleSleepGoal}>
          Get Sleep Goal
        </button>
      </Fragment>
    )
  }
}

// const mapState = state => {
//     return {
// days:
// data:
// userInfo: state.fitbit.fitInfo
//     }
// }

const mapDispatch = dispatch => ({
  fetchActivitySteps: userInfo => dispatch(fetchActivitySteps(userInfo)),
  fetchSleepLog: userInfo => dispatch(fetchSleepLog(userInfo)),
  fetchSleepGoal: userInfo => dispatch(fetchSleepGoal(userInfo))
})

export default connect(null, mapDispatch)(ActivityContainer)
