import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {fetchFitInfo} from '../store'
import ActivityContainer from './activity-container'

export class UserHome extends Component {
  // constructor() {
  //   super()
  // }
  componentDidMount() {
    const url = window.location.href
    const user = url
      .split('#')[1]
      .split('=')[2]
      .split('&')[0]
    const token = url
      .split('#')[1]
      .split('=')[1]
      .split('&')[0]
    const fitInfo = {user, token}
    this.props.fetchFitInfo(fitInfo)
  }

  render() {
    console.log(this.props.user, this.props.token, '<<< home props')
    const userInfo = this.props.userInfo
    return (
      <Fragment>
        <div>
          <h3>Welcome! Fitbit OAuth worked!</h3>
        </div>
        <ActivityContainer userInfo={userInfo} />
      </Fragment>
    )
  }
}

const mapState = state => {
  return {
    user: state.fitbit.fitInfo.user,
    token: state.fitbit.fitInfo.token,
    userInfo: state.fitbit.fitInfo
  }
}

const mapDispatch = dispatch => ({
  fetchFitInfo: fitInfo => dispatch(fetchFitInfo(fitInfo))
})

export default connect(mapState, mapDispatch)(UserHome)
