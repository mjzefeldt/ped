import React, {Fragment, Component} from 'react'
import Ped from '!svg-react-loader!../../public/snapsvg_ped_003.svg'

export class MyPed extends Component {
  render() {
    return (
      <Fragment>
        <p>snap component</p>
        <Ped className="normal" />
      </Fragment>
    )
  }
}

export default MyPed
