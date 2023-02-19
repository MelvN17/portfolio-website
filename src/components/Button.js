import React from 'react'
import '../App.css'
const Button = (props) => {
  return (
    <div>
        <div className="resumeBtn btn" style = {{ fontSize: props.fSize }}> {props.textBtn}</div>
    </div>
  )
}

export default Button