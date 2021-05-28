import React from 'react'
import '../Add to cart modal/CartModal.css'
import Shoes from '../../assets/images/Shoes.png'
import Slideshow from './Slideshow'
import Sizes from './Sizes'

const slideImages = [Shoes, Shoes, Shoes]

const CartModal = () => {
  return (
    <div className="container">
      <div className="carousel">
        <Slideshow />
      </div>
      <div className="productDetails">
        <div className="productText">
          <h1>Formal Coat</h1>
          <p style={{ paddingTop: '20px' }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr.
          </p>
        </div>

        <div className="priceDetails">
          <div className="priceQty">
            <div>
              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: '500',
                  paddingBottom: '5px',
                }}
              >
                Renting Price
              </h3>
              <p style={{ fontSize: '1.8rem', fontWeight: '300' }}>Rs500</p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: '500',
                  paddingBottom: '5px',
                }}
              >
                Qty
              </h3>
              <p style={{ fontSize: '1.5rem', fontWeight: '300' }}>5</p>
            </div>
          </div>
          <div className="size">
            <h3
              style={{
                fontSize: '1.2rem',
                fontWeight: '500',
                paddingBottom: '10px',
              }}
            >
              Size
            </h3>
            <div className="sizes">
              <Sizes size="5" />
              <Sizes size="6" />
              <Sizes size="7" />
              <Sizes size="7" />
              <Sizes size="7" />
              <Sizes size="7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartModal
