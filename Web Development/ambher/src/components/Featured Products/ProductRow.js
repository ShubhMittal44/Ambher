import React from 'react'
import ProductCard from './ProductCard'

const FeaturedRow = (props) => {
  return (
    <div className="productRow">
      <ProductCard
        className="productRowItem"
        cardTitle="Hello World"
        cardPrice={200}
      />
      <ProductCard
        className="productRowItem"
        cardTitle="Hello World"
        cardPrice={200}
      />
      <ProductCard
        className="productRowItem"
        cardTitle="Hello World"
        cardPrice={200}
      />
      <ProductCard
        className="productRowItem"
        cardTitle="Hello World"
        cardPrice={200}
      />
    </div>
  )
}

export default FeaturedRow
