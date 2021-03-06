import React, {Fragment, Component} from 'react'
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
    const {topLid, bottomLid, mouth} = this.props.lidOpacity

    // setUpMouthChanges
    document.getElementById('mouth_sad').setAttribute('style', mouth.mouthSad)
    document
      .getElementById('mouth_neutral')
      .setAttribute('style', mouth.mouthNeutral)
    document
      .getElementById('mouth_happy')
      .setAttribute('style', mouth.mouthHappy)

    // setUpColorChanges
    document.getElementById('body-shadow').setAttribute('fill', bodyShadow)
    document.getElementById('body-top').setAttribute('fill', bodyTop)
    document.getElementById('hairBack').setAttribute('fill', hairBack)
    document.getElementById('hairFront').setAttribute('fill', hairFront)
    document.getElementById('top_left_bottom_lid').setAttribute('class', lid)
    document.getElementById('top_top_lid-2').setAttribute('class', lid)
    document.getElementById('top_bottom_lid-3').setAttribute('class', lid)
    document.getElementById('top_top_lid-3').setAttribute('class', lid)
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
    const {topLid, bottomLid, mouth} = this.props.lidOpacity

    // setUpMouthChanges
    document.getElementById('mouth_sad').setAttribute('style', mouth.mouthSad)
    document
      .getElementById('mouth_neutral')
      .setAttribute('style', mouth.mouthNeutral)
    document
      .getElementById('mouth_happy')
      .setAttribute('style', mouth.mouthHappy)

    // setUpColorChanges
    document.getElementById('body-shadow').setAttribute('fill', bodyShadow)
    document.getElementById('body-top').setAttribute('fill', bodyTop)
    document.getElementById('hairBack').setAttribute('fill', hairBack)
    document.getElementById('hairFront').setAttribute('fill', hairFront)
    document.getElementById('top_left_bottom_lid').setAttribute('class', lid)
    document.getElementById('top_top_lid-2').setAttribute('class', lid)
    document.getElementById('top_bottom_lid-3').setAttribute('class', lid)
    document.getElementById('top_top_lid-3').setAttribute('class', lid)
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
