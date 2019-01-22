import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import ActivityContainer from './activity-container'

export class UserHome extends Component {
  componentDidMount() {
    localStorage.setItem('sleep', this.props.sleep)
    localStorage.setItem('goal', this.props)
  }

  render(props) {
    console.log(this.props.goal.minDuration, '<<<home goal')
    return (
      <Fragment>
        <div>
          <header className="center">
            <h2>Your Ped</h2>
          </header>
          <main className="center">
            <div>
              <div id="goal">Sleep Goal: 7 hr 45 min</div>
            </div>
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
    sleep: state.sleep.sleep,
    goal: state.sleep.goal
  }
}

export default connect(mapState)(UserHome)
