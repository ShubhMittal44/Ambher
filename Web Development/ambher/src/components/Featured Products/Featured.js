import React from 'react'
import ProductRow from './ProductRow'
import '../Featured Products/Featured.css'

const Featured = (props) => {
  let noOfRows = []
  for (let i = 0; i < props.rows; i++) {
    noOfRows.push(<ProductRow cards={4} />)
  }
  return (
    <div className="featuredSection">
      <h1 className="sectionTitle">{props.title}</h1>
      {noOfRows}
    </div>
  )
}

export default Featured
