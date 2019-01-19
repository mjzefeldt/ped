import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <h1>Ped - Virtual Fitness Pet</h1>
    <nav>
      {/* Links here available only after fitbit authentication */}
      {isLoggedIn && <Link to="/home">Home</Link>}
    </nav>
    <hr />
  </div>
)

const mapState = state => {
  return {
    isLoggedIn: !!state.fitbit.fitInfo.user
  }
}

export default connect(mapState)(Navbar)
