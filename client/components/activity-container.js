import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import MyPed from './my-ped'
import utils from '../../helper'

const defaultState = {
  // in actual datapull will need to reverse sleep array from way it loads reverse()
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
  currentDate: 5 // num that will correspond with sleep index or activity index - default on initial load to today
  // will only have 6 days of data
}

export class ActivityContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sleep: this.props.sleep,
      goal: this.props.goal,
      currentDate: 5
    }
    this.hydrateStateWithLocalStorage = this.hydrateStateWithLocalStorage.bind(
      this
    )
    this.handleSlideChange = this.handleSlideChange.bind(this)
  }

  componentDidMount() {
    console.log('ActivityContainer mounted')
    this.hydrateStateWithLocalStorage()
    // ???
    // this.setState({
    //   sleep: this.props.sleep,
    //   goal: this.props.goal
    // })
  }

  handleSlideChange(evt) {
    evt.preventDefault()
    const day = parseInt(evt.target.value, 10)
    localStorage.setItem('currentDate', day)
    this.setState({currentDate: day})
  }

  hydrateStateWithLocalStorage() {
    const key = 'currentDate'
    if (localStorage.hasOwnProperty(key)) {
      const value = parseInt(localStorage.getItem(key), 10)
      try {
        this.setState({[key]: value})
      } catch (e) {
        console.error(e)
        this.setState({[key]: 6}) // default value to current day
      }
    }
  }

  render() {
    console.log(this.props, '<<< props activity container')
    const sleepGoal = this.state.goal.minDuration / 3
    const currentSleepAmount = this.state.sleep[this.state.currentDate]
      .minutesAsleep
    const bodyColors = utils.sleepColorSetter(sleepGoal, currentSleepAmount)
    return (
      <Fragment>
        <div>
          <MyPed bodyColors={bodyColors} />
          {/* need slider component to default to most recent day [5] of array[6] only have 6 days data
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
              defaultValue={this.state.currentDate}
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

// checking if passing in as props from user home - reached rate limit and can't verify at moment
// if that works delete this
const mapState = state => {
  return {
    userInfo: state.fitbit.fitInfo,
    sleep: state.sleep.sleep,
    goal: state.sleep.goal
  }
}

// export default connect(mapState)(ActivityContainer)
export default ActivityContainer
