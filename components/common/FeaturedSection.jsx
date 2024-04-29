
import React from 'react'
import FeaturedSlider from './FeaturedSlider'
import Link from 'next/link'
const FeaturedSection = () => {
  return (
    <section className="pt100 bgBlack text-white">
      <div className="container">
        <div className="sectionHeader  px-3">
          <div className="sectionTitle">
            <span>Lorem Ipsum</span>
            <h2 className='mb-3'>Featured <br/>properties </h2>
            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

       
         
        </div>
        <div>
          <FeaturedSlider />
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection