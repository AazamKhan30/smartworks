"use client";

import React from "react";
import Image from "next/image";
import styles from "@/styles/partner.module.css"

const partnerData = [
  {
    id: "1",
    image: "/images/partner/partner1.png",
  },
  {
    id: "2",
    image: "/images/partner/partner2.png",
  },
  {
    id: "3",
    image: "/images/partner/partner3.png",
  },
  {
    id: "4",
    image: "/images/partner/partner4.png",
  },
  {
    id: "5",
    image: "/images/partner/partner5.png",
  },
  {
    id: "6",
    image: "/images/partner/partner6.png",
  },
];

const Partner = () => {
  return (
    <div className="py100">
    <div className="container">
    <div className="sectionHeader  px-3">
          <div className="sectionTitle">
            <span>Clients</span>
            <h2 className='mb-3'>Our Clients<br/> in Mumbai</h2>
           
          </div>
     </div>
    {partnerData && (
      
          <div className="row g-0 justify-content-center align-items-center">
            {partnerData &&
              partnerData.map((partner) => (
                <div
                  className="col-lg-2 col-md-3 col-6 col-sm-4"
                  key={partner.id}
                >
                  <div className={styles.partnerItem}>
                    <Image
                      src={partner.image}
                      alt="partner"
                      width={100}
                      height={26}
                
                    />
                  </div>
                </div>
              ))}
          </div>
      
    )}
  </div>
 </div>
  )
}

export default Partner