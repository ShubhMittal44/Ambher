import React from 'react'
import ProductCard from './ProductCard'

const FeaturedRow = (props) => {
  return (
    <div className="productRow">
      <ProductCard cardTitle="Hello World" cardPrice={200} />
      <ProductCard cardTitle="Hello World" cardPrice={200} />
      <ProductCard cardTitle="Hello World" cardPrice={200} />
      <ProductCard cardTitle="Hello World" cardPrice={200} />
    </div>
  )
}

export default FeaturedRow
