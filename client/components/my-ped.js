import React, {Fragment, Component} from 'react'
// import Ped from '!svg-react-loader!../../public/snapsvg_ped_003.svg'
import Ped from './ped'

export class MyPed extends Component {
  componentDidMount() {
    const {
      bodyTop,
      bodyShadow,
      hairFront,
      hairBack,
      lid,
      lidHL
    } = this.props.bodyColors
    const {topLid, bottomLid} = this.props.lidOpacity
    const bodyShadowObj = document
      .getElementById('body-shadow')
      .setAttribute('fill', bodyShadow)
    const bodyTopObj = document
      .getElementById('body-top')
      .setAttribute('fill', bodyTop)
    const hairBackObj = document
      .getElementById('hairBack')
      .setAttribute('fill', hairBack)
    const hairFrontObj = document
      .getElementById('hairFront')
      .setAttribute('fill', hairFront)
    const btmLftLidObj = document
      .getElementById('top_left_bottom_lid')
      .setAttribute('class', lid)
    const topLftLidObj = document
      .getElementById('top_top_lid-2')
      .setAttribute('class', lid)
    const btmRtLidObj = document
      .getElementById('top_bottom_lid-3')
      .setAttribute('class', lid)
    const topRtLidObj = document
      .getElementById('top_top_lid-3')
      .setAttribute('class', lid)
    document.getElementById('bottom_bottom_lid').setAttribute('class', lidHL)
    document.getElementById('top_bottom_lid').setAttribute('class', lidHL)
    document.getElementById('bottom_top_lid').setAttribute('class', lidHL)
    document.getElementById('top_top_lid').setAttribute('class', lidHL)
    document.getElementById('bottom_bottom_lid-2').setAttribute('class', lidHL)
    document.getElementById('back_bottom_lid').setAttribute('class', lidHL)
    document.getElementById('bottom_top_lid-2').setAttribute('class', lidHL)
    document.getElementById('back_top_lid').setAttribute('class', lidHL)
    document.getElementById('left_bottom_lid').setAttribute('style', bottomLid)
    document.getElementById('left_top_lid').setAttribute('style', topLid)
    document.getElementById('right_bottom_lid').setAttribute('style', bottomLid)
    document.getElementById('right_top_lid').setAttribute('style', topLid)
  }

  componentDidUpdate() {
    const {
      bodyTop,
      bodyShadow,
      hairFront,
      hairBack,
      lid,
      lidHL
    } = this.props.bodyColors
    const {topLid, bottomLid} = this.props.lidOpacity
    const bodyShadowObj = document
      .getElementById('body-shadow')
      .setAttribute('fill', bodyShadow)
    const bodyTopObj = document
      .getElementById('body-top')
      .setAttribute('fill', bodyTop)
    const hairBackObj = document
      .getElementById('hairBack')
      .setAttribute('fill', hairBack)
    const hairFrontObj = document
      .getElementById('hairFront')
      .setAttribute('fill', hairFront)
    const btmLftLidObj = document
      .getElementById('top_left_bottom_lid')
      .setAttribute('class', lid)
    const topLftLidObj = document
      .getElementById('top_top_lid-2')
      .setAttribute('class', lid)
    const btmRtLidObj = document
      .getElementById('top_bottom_lid-3')
      .setAttribute('class', lid)
    const topRtLidObj = document
      .getElementById('top_top_lid-3')
      .setAttribute('class', lid)
    document.getElementById('bottom_bottom_lid').setAttribute('class', lidHL)
    document.getElementById('top_bottom_lid').setAttribute('class', lidHL)
    document.getElementById('bottom_top_lid').setAttribute('class', lidHL)
    document.getElementById('top_top_lid').setAttribute('class', lidHL)
    document.getElementById('bottom_bottom_lid-2').setAttribute('class', lidHL)
    document.getElementById('back_bottom_lid').setAttribute('class', lidHL)
    document.getElementById('bottom_top_lid-2').setAttribute('class', lidHL)
    document.getElementById('back_top_lid').setAttribute('class', lidHL)
    document.getElementById('left_bottom_lid').setAttribute('style', bottomLid)
    document.getElementById('left_top_lid').setAttribute('style', topLid)
    document.getElementById('right_bottom_lid').setAttribute('style', bottomLid)
    document.getElementById('right_top_lid').setAttribute('style', topLid)
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
