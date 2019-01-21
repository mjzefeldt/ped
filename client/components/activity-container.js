import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import MyPed from './my-ped'
import utils from '../../helper'
// temporary disable while work on svg and front end components
// import {fetchActivitySteps, fetchSleepLog, fetchSleepGoal} from '../store'

export class ActivityContainer extends Component {
  // may need local state for ped slider interaction
  constructor() {
    super()
    this.state = {
      // wwill need to reverse sleep array from way it loads reverse()
      sleep: [
        {dateOfSleep: '2019-01-14', minutesAsleep: 0},
        {dateOfSleep: '2019-01-15', minutesAsleep: 0},
        {dateOfSleep: '2019-01-16', minutesAsleep: 0},
        {dateOfSleep: '2019-01-17', minutesAsleep: 301},
        {dateOfSleep: '2019-01-18', minutesAsleep: 244},
        {dateOfSleep: '2019-01-19', minutesAsleep: 634},
        {dateOfSleep: '2019-01-20', minutesAsleep: 208}
      ],
      goal: {
        minDuration: 465
      },
      currentDate: 6 // num that will correspond with sleep index or activity index - default on initial load to today
    }
    // temporary disable while work on svg and front end components
    // this.handleActivity = this.handleActivity.bind(this)
    // this.handleSleep = this.handleSleep.bind(this)
    // this.handleSleepGoal = this.handleSleepGoal.bind(this)
    this.handleSlideChange = this.handleSlideChange.bind(this)
  }

  handleSlideChange(evt) {
    // evt.preventDefault()
    console.log('htting handler', evt.target.value)
    const day = parseInt(evt.target.value, 10)
    this.setState({currentDate: day})
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
    const currentSleepAmount = this.state.sleep[this.state.currentDate]
      .minutesAsleep
    const bodyColors = utils.sleepColorSetter(sleepGoal, currentSleepAmount)
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
          slides to other days to manipulate this.state.currentDate */}
          <div>
            <input
              type="range"
              id="date"
              name="date"
              min="0"
              max="6"
              step="1"
              list="tickMarks"
              onChange={evt => this.handleSlideChange(evt, this.value)}
            />
            {/* label={this.state.sleep[0].dateOfSleep} - not supported in Chrome :-(  */}
            <datalist id="tickMarks">
              <option value="0" label={this.state.sleep[0].dateOfSleep} />
              <option value="1" label={this.state.sleep[1].dateOfSleep} />
              <option value="2" label={this.state.sleep[2].dateOfSleep} />
              <option value="3" label={this.state.sleep[3].dateOfSleep} />
              <option value="4" label={this.state.sleep[4].dateOfSleep} />
              <option value="5" label={this.state.sleep[5].dateOfSleep} />
              <option value="6" label={this.state.sleep[6].dateOfSleep} />
            </datalist>
            <label htmlFor="date">Date</label>
          </div>
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
