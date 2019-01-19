import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {fetchActivitySteps} from '../store'

export class ActivityContainer extends Component {
  constructor() {
    // this.state = {
    //     pedAppearance: [],
    //     days: [],
    //     data: []
    // }
    // will eventually need local state to wrap ped
    super()
    this.handleActivity = this.handleActivity.bind(this)
  }
  handleActivity() {
    this.props.fetchActivitySteps(this.props.userInfo)
  }
  render() {
    console.log(this.props, '<<< activity props')
    return (
      <Fragment>
        <h2>Activity Container</h2>
        <button type="button" onClick={this.handleActivity}>
          Get Activity
        </button>
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
  fetchActivitySteps: userInfo => dispatch(fetchActivitySteps(userInfo))
})

export default connect(null, mapDispatch)(ActivityContainer)
