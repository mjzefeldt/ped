import React, {Component, Fragment} from 'react'
import MyPed from './my-ped'
import utils from '../../helper'

const defaultState = {
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
  currentDate: 4 // num that will correspond with sleep index (latest day = sleep.length - 1)
}

export class ActivityContainer extends Component {
  constructor(props) {
    super(props)
    this.state = defaultState
    // FINISH STYLING
    // {
    //   sleep: [],
    //   goal: {},
    //   currentDate: null
    // }
    this.hydrateStateWithLocalStorage = this.hydrateStateWithLocalStorage.bind(
      this
    )
    this.handleSlideChange = this.handleSlideChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage()
    // FINISH STYLING
    // this.setState({
    //   sleep: this.props.sleep.reverse(),
    //   goal: this.props.goal,
    //   currentDate: 4
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
        this.setState({[key]: 4}) // default value to current day until calculate dynamically
      }
    }
  }

  handleClick() {
    console.log('in mouseover')
    document
      .getElementById('left_bottom_lid')
      .setAttribute('style', 'opacity: 100')
    document
      .getElementById('left_top_lid')
      .setAttribute('style', 'opacity: 100')
    document
      .getElementById('right_bottom_lid')
      .setAttribute('style', 'opacity: 100')
    document
      .getElementById('right_top_lid')
      .setAttribute('style', 'opacity: 100')
  }

  render() {
    let sleepGoal
    let currentSleepAmount
    let bodyColors
    let lidOpacity
    if (this.state.sleep.length) {
      sleepGoal = this.state.goal.minDuration / 2
      currentSleepAmount = this.state.sleep[this.state.currentDate]
        .minutesAsleep
      bodyColors = utils.sleepColorSetter(sleepGoal, currentSleepAmount)
      lidOpacity = utils.opacitySetter(sleepGoal, currentSleepAmount)
    }
    return (
      <Fragment>
        <div>
          {this.state.goal.hasOwnProperty('minDuration') ? (
            <Fragment>
              <MyPed bodyColors={bodyColors} lidOpacity={lidOpacity} />
              <button type="button" onClick={this.handleClick} />
              <div className="slider-layout">
                <div>
                  <div className="slider">
                    <div id="ticks">
                      <span className="tick">
                        {this.state.sleep[
                          this.state.sleep.length - 5
                        ].dateOfSleep.slice(5)}
                      </span>
                      <span className="tick">
                        {this.state.sleep[
                          this.state.sleep.length - 4
                        ].dateOfSleep.slice(5)}
                      </span>
                      <span className="tick">
                        {this.state.sleep[
                          this.state.sleep.length - 3
                        ].dateOfSleep.slice(5)}
                      </span>
                      <span className="tick">
                        {this.state.sleep[
                          this.state.sleep.length - 2
                        ].dateOfSleep.slice(5)}
                      </span>
                      <span className="tick">today</span>
                    </div>
                    <input
                      type="range"
                      id="day"
                      name="date"
                      min="0"
                      max="4"
                      step="1"
                      list="tickMarks"
                      defaultValue={this.state.currentDate}
                      onChange={evt => this.handleSlideChange(evt, this.value)}
                    />
                    <datalist id="tickMarks">
                      <option value="0" />
                      <option value="1" />
                      <option value="2" />
                      <option value="3" />
                      <option value="4" />
                      {/* <option value="5" />
                      <option value="6" /> */}
                    </datalist>
                  </div>
                </div>
                <div id="slider-label">
                  <label htmlFor="date">Daily Sleep Input</label>
                </div>
              </div>
            </Fragment>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </Fragment>
    )
  }
}

export default ActivityContainer
