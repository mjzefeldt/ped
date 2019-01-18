import React, {Component, Fragment} from 'react'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'
// import {fetchProfile} from '../store'

/**
 * COMPONENT
 */
export class UserHome extends Component {
  // const {email} = props
  // componentDidMount() {
  //   this.props.fetchProfile(url)
  // }
  constructor() {
    super()
    // this.handleClick = this.handleClick.bind(this)
  }
  // handleClick() {
  //   const url = window.location.href
  //   console.log(url,'<<<URL')
  //   this.props.fetchProfile(url)
  // }
  render() {
    // this.props.fetchProfile()
    return (
      <Fragment>
        <div>
          <h3>Welcome! Fitbit OAuth worked!</h3>
        </div>
        {/* <button onClick={this.handleClick}>Press</button> */}
      </Fragment>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

// const mapDispatch = dispatch => ({
//   fetchProfile: (url) => dispatch(fetchProfile(url))
// })

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string
// }
