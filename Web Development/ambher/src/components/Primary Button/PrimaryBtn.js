import React from 'react'
import '../Primary Button/primaryBtn.css'

const PrimaryBtn = (props) => {
  return (
    <div className="primaryBtn">
      <h1>{props.text}</h1>
    </div>
  )
}

export default PrimaryBtn
