import React from 'react'
import Featured from '../components/Featured Products/Featured'
import TargetAudience from '../components/TargetAudience/TargetAudience'
import CategoryPage from './CategoryPage'
import PrimaryBtn from '../components/Primary Button/PrimaryBtn'
import ShopsNear from '../components/Shops near me/ShopsNear'
import CartModal from '../components/Add to cart modal/CartModal'
import CartModal2 from '../components/Add to cart modal/CartModal2'

const Landing = () => {
  return (
    <>
      <CartModal2 />
      <ShopsNear title="Shops Near Me" />
      <Featured rows={2} title="Featured Products" />
      <PrimaryBtn text="View More" />
      <TargetAudience />
      {/* <CategoryPage categoryName="Traditional Wear" /> */}
    </>
  )
}

export default Landing
