import React, {Fragment, Component} from 'react'
// import Ped from '!svg-react-loader!../../public/snapsvg_ped_003.svg'
import Ped from './ped'

export class MyPed extends Component {
  componentDidMount() {
    const {bodyTop, bodyShadow, hairFront, hairBack} = this.props.bodyColors
    document.getElementById('body-shadow').setAttribute('class', bodyShadow)
    document.getElementById('body-top').setAttribute('class', bodyTop)
    document.getElementById('hairBack').setAttribute('class', hairBack)
    document.getElementById('hairFront').setAttribute('class', hairFront)
  }
  render() {
    return (
      <Fragment>
        <Ped />
      </Fragment>
    )
  }
}

export default MyPed
