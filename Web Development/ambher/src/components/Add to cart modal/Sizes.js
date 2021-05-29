import React, { useState } from 'react'
import '../Add to cart modal/Sizes.css'

const Sizes = (props) => {
  const [isActive, setActive] = useState(false)
  const [oneSelected, setOneSelected] = useState(false)

  const toggleClass = () => {
    setActive(!isActive)
    setOneSelected(!oneSelected)
  }

  return (
    <div
      className={isActive ? 'sizeContainerActive' : 'sizeContainer'}
      onClick={toggleClass}
    >
      <h3 style={{ fontSize: '1.1rem', fontWeight: '300' }}>{props.size}</h3>
    </div>
  )
}

export default Sizes
