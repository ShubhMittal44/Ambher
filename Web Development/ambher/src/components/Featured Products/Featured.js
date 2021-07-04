import React, { useState } from 'react'
import ProductRow from './ProductRow'
import '../Featured Products/Featured.css'
import PrimaryBtn from '../Primary Button/PrimaryBtn'
import CartModal from '../Add to cart modal/CartModal'

const Featured = (props) => {
  let noOfRows = []
  for (let i = 0; i < props.rows; i++) {
    noOfRows.push(<ProductRow cards={4} />)
  }
  return (
    <div className="featuredSection">
      <h1 className="sectionTitle">{props.title}</h1>
      {noOfRows}

      {/* <CartModal /> */}
    </div>
  )
}

export default Featured
