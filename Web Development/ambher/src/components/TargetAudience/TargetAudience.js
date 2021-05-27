import React, { useState } from 'react'
import '../TargetAudience/TargetAudience.css'
import eventGathering from '../../assets/images/eventGathering.png'
import collegeFest from '../../assets/images/collegeFest.png'
import traditionalWear from '../../assets/images/traditionalWear.png'

const TargetAudience = () => {
  const [zoom, setZoom] = useState([1, 1, 1])
  console.log(zoom[2])

  const eventStyles = {
    transform: `scale(${zoom[0]})`,
  }
  const collegeStyles = {
    transform: `scale(${zoom[1]})`,
  }
  const traditionalStyles = {
    transform: `scale(${zoom[2]})`,
  }

  return (
    <div className="targetAudience">
      <div className="row">
        <div className="column">
          <div className="eventGathering">
            <div
              className="backdrop"
              onMouseEnter={() => setZoom([1.2, 1, 1])}
              onMouseLeave={() => setZoom([1, 1, 1])}
            >
              <div className="columnTitle">Event Gathering</div>
            </div>
            <img style={eventStyles} src={eventGathering} width="100%" />
          </div>
        </div>
        <div className="column">
          <div className="collegeFest">
            <div
              className="backdrop"
              onMouseEnter={() => setZoom([1, 1.2, 1])}
              onMouseLeave={() => setZoom([1, 1, 1])}
            >
              <div className="columnTitle">College Fests</div>
            </div>
            <img style={collegeStyles} src={collegeFest} width="100%" />
          </div>

          <div className="traditionalWear">
            <div
              className="backdrop"
              onMouseEnter={() => setZoom([1, 1, 1.2])}
              onMouseLeave={() => setZoom([1, 1, 1])}
            >
              <div className="columnTitle">Traditional Wear</div>
            </div>
            <img style={traditionalStyles} src={traditionalWear} width="100%" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TargetAudience
