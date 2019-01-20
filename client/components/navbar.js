import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <h1>Ped - Virtual Fitness Pet</h1>
    <nav>
      {/* temporary disable while work on svg and front end components */}
      {/* Links here available only after fitbit authentication */}
      {/* {isLoggedIn && <Link to="/home">Home</Link>} */}
      
      {/* temporary use while above disabled working on svg and front end components */}
      <Link to="/home">Home</Link>
    </nav>
    <hr />
  </div>
)

{/* temporary disable while work on svg and front end components */}
// const mapState = state => {
//   return {
//     isLoggedIn: !!state.fitbit.fitInfo.user
//   }
// }

{/* temporary disable while work on svg and front end components */}
// export default connect(mapState)(Navbar)
export default Navbar