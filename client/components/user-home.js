import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import ActivityContainer from './activity-container'

export class UserHome extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <header className="center">
            <h3>Your Ped</h3>
          </header>
          <main className="center">
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
