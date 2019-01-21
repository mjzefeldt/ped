import React, {Fragment, Component} from 'react'
// import Ped from '!svg-react-loader!../../public/snapsvg_ped_003.svg'
import Ped from './ped'

export class MyPed extends Component {
  constructor() {
    super()
    this.state = {
      bodyShadowObj: {},
      bodyTopObj: {},
      hairBackObj: {},
      hairFrontObj: {}
    }
  }
  componentDidMount() {
    console.log('hitting componentDidMount MyPed')
    const {bodyTop, bodyShadow, hairFront, hairBack} = this.props.bodyColors
    const bodyShadowObj = document
      .getElementById('body-shadow')
      .setAttribute('fill', bodyShadow)
    this.setState({bodyShadowObj})
    const bodyTopObj = document
      .getElementById('body-top')
      .setAttribute('fill', bodyTop)
    this.setState({bodyTopObj})
    const hairBackObj = document
      .getElementById('hairBack')
      .setAttribute('fill', hairBack)
    this.setState({hairBackObj})
    const hairFrontObj = document
      .getElementById('hairFront')
      .setAttribute('fill', hairFront)
    this.setState({hairFrontObj})
  }

  componentDidUpdate() {
    console.log('hitting componentDidUpdate MyPed')
    const {bodyTop, bodyShadow, hairFront, hairBack} = this.props.bodyColors
    const bodyShadowObj = document
      .getElementById('body-shadow')
      .setAttribute('fill', bodyShadow)
    // this.setState({bodyShadowObj})
    const bodyTopObj = document
      .getElementById('body-top')
      .setAttribute('fill', bodyTop)
    // this.setState({bodyTopObj})
    const hairBackObj = document
      .getElementById('hairBack')
      .setAttribute('fill', hairBack)
    // this.setState({hairBackObj})
    const hairFrontObj = document
      .getElementById('hairFront')
      .setAttribute('fill', hairFront)
    // this.setState({hairFrontObj})
  }
  render() {
    // const {bodyTop, bodyShadow, hairFront, hairBack} = this.props.bodyColors
    // const bodyShadowObj = this.state.bodyShadowObj
    // console.log(bodyShadowObj, '<<< body shadow')
    // bodyShadowObj.setAttribute('fill', bodyShadow)
    // const bodyTopObj = this.state.bodyTopObj
    // bodyTopObj.setAttribute('fill', bodyTop)
    return (
      <Fragment>
        <Ped />
      </Fragment>
    )
  }
}

export default MyPed
