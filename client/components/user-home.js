import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
// temporary disable while work on svg and front end components
// import {fetchFitInfo} from '../store'
import ActivityContainer from './activity-container'

export class UserHome extends Component {
  // unlikely will need local state here - keep until sure
  // constructor() {
  //   super()
  // }

  // temporary disable while work on svg and front end components
  // componentDidMount() {
  //   const url = window.location.href
  //   const user = url
  //     .split('#')[1]
  //     .split('=')[2]
  //     .split('&')[0]
  //   const token = url
  //     .split('#')[1]
  //     .split('=')[1]
  //     .split('&')[0]
  //   const fitInfo = {user, token}
  //   this.props.fetchFitInfo(fitInfo)
  // }

  render() {
    // temporary disable while work on svg and front end components
    // const userInfo = this.props.userInfo
    return (
      <Fragment>
        <div>
          <header className="center">
            <h3>Welcome! Fitbit OAuth worked!</h3>
          </header>
          {/* pass in user info into ActivityContainer so have userInfo as props for fetches to fitbit api */}
          {/* temporary disable while work on svg and front end components */}
          {/* <ActivityContainer userInfo={userInfo} /> */}
          <main className="center">
            <ActivityContainer />
          </main>
        </div>
      </Fragment>
    )
  }
}

{
  /* temporary disable while work on svg and front end components */
}
// const mapState = state => {
//   return {
//     user: state.fitbit.fitInfo.user,
//     token: state.fitbit.fitInfo.token,
//     userInfo: state.fitbit.fitInfo
//   }
// }

{
  /* temporary disable while work on svg and front end components */
}
// const mapDispatch = dispatch => ({
//   fetchFitInfo: fitInfo => dispatch(fetchFitInfo(fitInfo))
// })

{
  /* temporary disable while work on svg and front end components */
}
// export default connect(mapState, mapDispatch)(UserHome)
export default UserHome
