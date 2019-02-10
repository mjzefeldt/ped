import React from 'react'

const Scale = props => {
  return (
    <div id="scale-wrapper">
      <div>% Sleep Goal:</div>
      <div className="scaleItem">
        <div className="simple-flex">
          <div className="colorScale" id="happy">
            <div className="percent">+90%</div>
          </div>
          <div>{` `}- Happy</div>
        </div>
      </div>
      <div className="scaleItem">
        <div className="simple-flex">
          <div className="colorScale" id="neutral">
            <div className="percent">+60%</div>
          </div>
          <div>{` `}- Neutral</div>
        </div>
      </div>
      <div className="scaleItem">
        <div className="simple-flex">
          <div className="colorScale" id="sad">
            <div className="percent">-59%</div>
          </div>
          <div>{` `}- Sad</div>
        </div>
      </div>
    </div>
  )
}

export default Scale
