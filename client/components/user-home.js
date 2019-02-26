import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import ActivityContainer from './activity-container'
import Scale from './scale'

export class UserHome extends Component {
  render() {
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
            <div id="scale">
              <Scale />
            </div>
            {this.props.sleep.length ? (
              <ActivityContainer
                sleep={this.props.sleep}
                goal={this.props.goal}
              />
            ) : (
              <p>
                Hmm...no sleep data logged for your fitbit. So Ped cannot exist.
                Try again once log sleep data.
              </p>
            )}
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
