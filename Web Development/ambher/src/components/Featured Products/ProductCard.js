import React, { useState } from 'react'
import '../Featured Products/Featured.css'
import productImage from '../../assets/images/Shoes.png'
import CartModal from '../Add to cart modal/CartModal'

const FeaturedCard = ({ cardTitle, cardPrice }) => {
  const [clicked, setClicked] = useState(false)
  function modalChange() {
    setClicked(!clicked)
  }

  return (
    <div className="productCard" onClick={modalChange}>
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
      <h3>Rs{cardPrice}</h3>
    </div>
  )
}

export default FeaturedCard
