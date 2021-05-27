import React from 'react'
import '../Add to cart modal/CartModal.css'
import Shoes from '../../assets/images/Shoes.png'
import Slideshow from './Slideshow'

const slideImages = [Shoes, Shoes, Shoes]

const CartModal = () => {
  return (
    <div className="container">
      <div className="carousel">
        <Slideshow />
      </div>
      <div className="productDetails"></div>
      <h1>Hello World</h1>
    </div>
  )
}

export default CartModal
