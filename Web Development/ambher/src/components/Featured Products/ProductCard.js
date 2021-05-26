import React from 'react'
import '../Featured Products/Featured.css'
import productImage from '../../assets/images/Shoes.png'

const FeaturedCard = ({ cardTitle, cardPrice }) => {
  return (
    <div className="productCard">
      <div
        className="productImage"
        style={{
          backgroundImage: `url(${productImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      {/* <img className="productImage" src={productImage} /> */}
      <h1>{cardTitle}</h1>
      <h3>{cardPrice}</h3>
    </div>
  )
}

export default FeaturedCard
