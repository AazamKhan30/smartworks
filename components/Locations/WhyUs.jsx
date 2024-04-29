import React from 'react'
import Link from 'next/link';
import ServiceSlider from '../common/ServiceSlider';
const WhyUs = () => {
  return (
    <section className="py100 bgLightGray">
      <div className="container">
        <div className="sectionHeader d-flex justify-content-between align-items-end px-3">
          <div className="sectionTitle">
            <span>Why Us</span>
            <h2>Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit. </h2>
          </div>
          <div className="siteBtnLink">
            <Link href="#">Orci varius natoque</Link>
          </div>
        </div>
        <div>
          <ServiceSlider />
        </div>
      </div>
    </section>
  );
};

export default WhyUs