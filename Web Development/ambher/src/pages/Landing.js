import React from 'react'
import Featured from '../components/Featured Products/Featured'
import TargetAudience from '../components/TargetAudience/TargetAudience'
import CategoryPage from './CategoryPage'
import PrimaryBtn from '../components/Primary Button/PrimaryBtn'

const Landing = () => {
  return (
    <>
      {/* <Featured rows={2} title="Featured Products" />
        <PrimaryBtn text="View More" />
        <TargetAudience /> */}
      <CategoryPage categoryName="Traditional Wear" />
    </>
  )
}

export default Landing
