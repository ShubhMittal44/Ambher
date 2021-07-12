import React, { useState } from 'react'
import CartModal from '../Add to cart modal/CartModal'
import ProductCard from './ProductCard'

const FeaturedRow = (props) => {
  let noOfCards = []
  for (let i = 0; i < props.cards; i++) {
    noOfCards.push(
      <ProductCard
        className="productRowItem"
        cardTitle="Hello World"
        cardDetails="Lorem Ipsum Dolor"
        cardPrice={200}
      />
    )
  }
  return (
    <>
      <div className="productRow">{noOfCards}</div>
    </>
  )
}

export default FeaturedRow
