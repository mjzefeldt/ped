import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import MyPed from './my-ped'
// temporary disable while work on svg and front end components
// import {fetchActivitySteps, fetchSleepLog, fetchSleepGoal} from '../store'

export class ActivityContainer extends Component {
  // may need local state for ped slider interaction
  constructor() {
    // this.state = {
    //     pedAppearance: [],
    //     days: [],
    //     data: []
    // }
    super()
    // temporary disable while work on svg and front end components
    // this.handleActivity = this.handleActivity.bind(this)
    // this.handleSleep = this.handleSleep.bind(this)
    // this.handleSleepGoal = this.handleSleepGoal.bind(this)
  }

  // temporary disable while work on svg and front end components
  // handleActivity() {
  //   this.props.fetchActivitySteps(this.props.userInfo)
  // }
  // handleSleep() {
  //   this.props.fetchSleepLog(this.props.userInfo)
  // }
  // handleSleepGoal() {
  //   this.props.fetchSleepGoal(this.props.userInfo)
  // }

  render() {
    return (
      <Fragment>
        <div>
          {/* temporary disable while work on svg and front end components */}
          {/* <button type="button" onClick={this.handleActivity}>
            Get Activity
          </button>
          <button type="button" onClick={this.handleSleep}>
            Get Sleep Log
          </button>
          <button type="button" onClick={this.handleSleepGoal}>
            Get Sleep Goal
          </button> */}

          <MyPed />
        </div>
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
