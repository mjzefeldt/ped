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
    this.prevBtnClick = this.prevBtnClick.bind(this)
    this.nextBtnClick = this.nextBtnClick.bind(this)
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

  prevBtnClick() {
    this.setState(prev => {
      return {currentDate: prev.currentDate - 1}
    })
  }

  nextBtnClick() {
    this.setState(prev => {
      return {currentDate: prev.currentDate + 1}
    })
  }

  render() {
    let sleepGoal
    let currentSleepAmount
    let bodyColors
    let lidOpacity
    let date
    if (this.state.sleep.length) {
      sleepGoal = this.state.goal.minDuration / 10 // sleep goal increments
      currentSleepAmount = this.state.sleep[this.state.currentDate]
        .minutesAsleep
      bodyColors = utils.sleepColorSetter(sleepGoal, currentSleepAmount)
      lidOpacity = utils.opacitySetter(sleepGoal, currentSleepAmount)
      date =
        this.state.sleep[this.state.currentDate].dateOfSleep.slice(5) +
        `-` +
        this.state.sleep[this.state.currentDate].dateOfSleep.slice(0, 4)
    }

    return (
      <Fragment>
        {this.state.goal.hasOwnProperty('minDuration') ? (
          <Fragment>
            <MyPed bodyColors={bodyColors} lidOpacity={lidOpacity} />
            <h3>Daily Sleep Total</h3>
            <div id="currentSleep" className="simple-flex">
              <div>
                <button
                  type="button"
                  className="daily-sleep-btn"
                  onClick={this.prevBtnClick}
                  disabled={this.state.currentDate === 0}
                >{`< Prev`}</button>
              </div>
              <div id="daily-info">
                <div>{date}</div>
                <div>{utils.minToHrMin(currentSleepAmount)}</div>
              </div>
              <div>
                <button
                  type="button"
                  className="daily-sleep-btn"
                  onClick={this.nextBtnClick}
                  disabled={
                    this.state.currentDate === this.state.sleep.length - 1
                  }
                >{`Next >`}</button>
              </div>
            </div>
          </Fragment>
        ) : (
          <p>Ped Loading...</p>
        )}
      </Fragment>
    )
  }
}

export default ActivityContainer
