import React, { useState } from 'react'
import ProductRow from '../Featured Products/ProductRow'
import '../Featured Products/Featured.css'
import './ShopsNear.css'
import PrimaryBtn from '../Primary Button/PrimaryBtn'
import CartModal from '../Add to cart modal/CartModal'
import ShopCard from './ShopCard'

const ShopsNear = (props) => {
  let noOfRows = []
  for (let i = 0; i < props.rows; i++) {
    noOfRows.push(<ProductRow cards={4} />)
  }
  return (
    <div className="shopsNearMe">
      <h1 className="sectionTitle">{props.title}</h1>
      <div className="shopRows">
        <ShopCard cardTitle="Shop title" cardDetails="shop Details" />
        <ShopCard cardTitle="Shop title" cardDetails="shop Details" />
        <ShopCard cardTitle="Shop title" cardDetails="shop Details" />
        <ShopCard cardTitle="Shop title" cardDetails="shop Details" />
      </div>

      {/* <CartModal /> */}
    </div>
  )
}

export default ShopsNear
