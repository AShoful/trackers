import React from 'react'
import './Tracker.css'

const Tracker = ({name, isStarted}) => {
  
  const icon = <span className="material-icons">
      {isStarted ? "play_circle_outline" : "pause_circle_outline" }
    </span>
  
  const del = <span className="material-icons"> remove_circle_outline</span>
  
  return <div className="tracker_p"> {name}{icon} {del}  </div>
  
}

export default Tracker