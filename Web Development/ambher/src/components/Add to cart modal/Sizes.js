import React from 'react'
import '../Add to cart modal/Sizes.css'

const Sizes = (props) => {
  return (
    <div className="sizeContainer">
      <p style={{ fontSize: '1.5rem', fontWeight: '300' }}>{props.size}</p>
    </div>
  )
}

export default Sizes
