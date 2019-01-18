import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchProfile} from '../store'

/**
 * COMPONENT
 */
export class UserHome extends Component {
  // const {email} = props
  componentDidMount() {
    this.props.fetchProfile()
  }
  render() {
    // this.props.fetchProfile()
    return (
      <div>
        <h3>Welcome! Fitbit OAuth worked!</h3>
      </div>
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

const mapDispatch = dispatch => ({
  fetchProfile: () => dispatch(fetchProfile())
})

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string
// }
