import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import MyPed from './my-ped'
// temporary disable while work on svg and front end components
// import {fetchActivitySteps, fetchSleepLog, fetchSleepGoal} from '../store'

export class ActivityContainer extends Component {
  // may need local state for ped slider interaction
  constructor() {
    super()
    this.state = {
      sleep: [
        {
          dateOfSleep: '2019-01-19',
          minutesAsleep: 250
        }
      ],
      goal: {
        minDuration: 465
      },
      currentDay: 0 // num that will correspond with sleep index or activity index
    }
    // temporary disable while work on svg and front end components
    // this.handleActivity = this.handleActivity.bind(this)
    // this.handleSleep = this.handleSleep.bind(this)
    // this.handleSleepGoal = this.handleSleepGoal.bind(this)
  }

  // temporary disable while work on svg and front end components
  // this should load in a componentDidMount to get store going and then populate state
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
    const sleepGoal = this.state.goal.minDuration / 3
    const currentSleepAmount = this.state.sleep[this.state.currentDay]
      .minutesAsleep
    let bodyShadow
    let bodyTop
    const colorKey = {
      sad: {
        top: '#428e92',
        bottom: '#00363a'
      },
      neutral: {
        top: '#cddc39',
        bottom: '#9a0'
      },
      happy: {
        top: '#ffff4d',
        bottom: '#ffd54d'
      }
    }

    const sleepColorSetter = (goal, currentAmount) => {
      let mood
      if (currentAmount < goal) mood = 'sad'
      else if (currentAmount < goal * 2)
        // class for ped will be sad and sickly
        mood = 'neutral' // class for ped will be neutral - eh
      else mood = 'happy' // class for ped will be health and happy

      return {
        bodyTop: colorKey[mood].top,
        bodyShadow: colorKey[mood].bottom,
        hairFront: colorKey[mood].top,
        hairBack: colorKey[mood].bottom
      }
    }
    const bodyColors = sleepColorSetter(sleepGoal, currentSleepAmount)
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

          <MyPed bodyColors={bodyColors} />
          {/* need slider component to default to most recent day [6] of array[7]
          slides to other days to manipulate this.state.currentDay */}
        </div>
      </Fragment>
    )
  }
}

// pull in data from store to populate local state
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
