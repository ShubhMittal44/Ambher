import React from 'react'
import Featured from '../components/Featured Products/Featured'
import traditionalWear from '../assets/images/tradtionalClothes.jpg'
import './CategoryPage.css'

const CategoryPage = (props) => {
  return (
    <>
      <div
        className="headingContainer"
        style={{
          backgroundImage: `url(${traditionalWear})`,
          backgroundSize: 'cover',
          backdropFilter: 'brightness(80%)',
        }}
      >
        <h1 style={{ color: 'black  ' }}>{props.categoryName}</h1>
      </div>
      <Featured rows={2} title="" />
    </>
  )
}

export default CategoryPage
