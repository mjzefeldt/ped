import React, {Component, Fragment} from 'react'
import MyPed from './my-ped'
import utils from '../../helper'

export class ActivityContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sleep: [],
      goal: {},
      currentDate: null
    }
    this.handleSlideChange = this.handleSlideChange.bind(this)
  }

  componentDidMount() {
    this.setState({
      sleep: this.props.sleep.reverse(), // data from api comes in most recent first
      goal: this.props.goal,
      currentDate: this.props.sleep.length - 1 // most recent date
    })

    setInterval(() => {
      let {topLid, bottomLid} = utils.opacityGetter(
        this.state.currentDate,
        this.state.sleep[this.state.currentDate].minutesAsleep,
        this.state.goal.minDuration
      )
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
      setTimeout(function() {
        document
          .getElementById('left_bottom_lid')
          .setAttribute('style', bottomLid)
        document.getElementById('left_top_lid').setAttribute('style', topLid)
        document
          .getElementById('right_bottom_lid')
          .setAttribute('style', bottomLid)
        document.getElementById('right_top_lid').setAttribute('style', topLid)
      }, 1000)
    }, 5000)
  }

  handleSlideChange(evt) {
    evt.preventDefault()
    const day = parseInt(evt.target.value, 10)
    localStorage.setItem('currentDate', day)
    this.setState({currentDate: day})
  }

  render() {
    let sleepGoal
    let currentSleepAmount
    let bodyColors
    let lidOpacity
    if (this.state.sleep.length) {
      sleepGoal = this.state.goal.minDuration / 10 // sleep goal increments

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

              <div>
                <button>Prev</button>
                {this.state.sleep[this.state.currentDate].dateOfSleep.slice(5)}
                <button>Next</button>
              </div>
              <div className="center">
                <div id="currentSleep">
                  Total Daily Sleep: {utils.minToHrMin(currentSleepAmount)}
                </div>
              </div>

              {/* <div className="slider-layout">
                <div>
                  <div className="slider">
                    <div id="ticks">
                      <span className="tick">
                        {this.state.sleep[
                          this.state.sleep.length - 7
                        ].dateOfSleep.slice(5)}
                      </span>
                      <span className="tick">
                        {this.state.sleep[
                          this.state.sleep.length - 6
                        ].dateOfSleep.slice(5)}
                      </span>
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
                      max="6"
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
                      <option value="5" />
                      <option value="6" />
                    </datalist>
                  </div>
                </div>
                <div id="slider-label">
                  <label htmlFor="date">Daily Sleep Input</label>
                </div>
              </div> */}
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
