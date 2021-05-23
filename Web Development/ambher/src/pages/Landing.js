import React from 'react'
import Featured from '../components/Featured Products/Featured'
import TargetAudience from '../components/TargetAudience/TargetAudience'

const Landing = () => {
  return (
    <>
      <Featured rows={2} title="Featured Products" />
      <TargetAudience />
    </>
  )
}

export default Landing
