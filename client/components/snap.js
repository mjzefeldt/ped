import React, {Fragment, Component} from 'react'
import Snap from 'snapsvg-cjs'

export class SnapTest extends Component {
  componentDidMount() {
    // pass in idProp from parent to add to id to make unique
    // this is a snap
    let s = Snap('#svg')
    s.attr({viewBox: '0 0 100% 100%'})
    let myCircle = s.circle('50%', '50%', '25%')
  }

  render() {
    const idKey = 'svg' //pass in idProp from parent to add to id to make unique
    return (
      <Fragment>
        <p>snap component</p>
        <svg id={idKey} />
      </Fragment>
    )
  }
}

export default SnapTest
