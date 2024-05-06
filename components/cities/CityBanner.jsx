"use client"
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link';
import styles from '@/styles/citybanner.module.css'
import { motion } from "framer-motion"
import Image from 'next/image';

export const cityBannerText = {
  imgUrl: "/images/banner-mumbai.jpg",
  bannerTitle: "Managed office Space in Mumbai",
  bannerDesc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. sed diam nonu mmy nibh euismod tincidunt ut taorest dolore",
  btn1Label: "Get Started",
  btn2Label: "How it Work",
  btn1Link: "#",
  btn2Link: "#",
  bottomText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
  bottomBtnLink: "#",
  bottomBtnLabel: "Lorem Ipsum"
};


const CityBanner = () => {
  return (
    <section
      className={`section-padding vh-100 d-flex bgImg position-relative ${styles.showcase}`}
        
    > 
    <Image src={cityBannerText.imgUrl} alt='City banner' fill/>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className={styles.bannerText}>
              <motion.h1
                className={styles.bannerTitle}
                initial={{ y: 100, opacity:0 }} 
                whileInView={{ y: 0, opacity:1 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {cityBannerText.bannerTitle}
              </motion.h1>
              <motion.p
                className={styles.bannerDesc}
                initial={{ y: 75, opacity:0 }} 
                whileInView={{ y: 0, opacity:1 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay:0.5 }}
              >
                {cityBannerText.bannerDesc}
              </motion.p>
              <motion.div
                className={styles.bannerButtons}
                initial={{ y: 75, opacity:0 }} 
                whileInView={{ y: 0, opacity:1 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay:0.8 }}
              >
                <Link href={cityBannerText.btn1Link} className="siteBtn">
                  {cityBannerText.btn1Label}
                </Link>
                <Link
                  href={cityBannerText.btn2Link}
                  className="siteBtn siteBtnOutline"
                >
                  {cityBannerText.btn2Label}
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        <div className={styles.bottomBox}>
          <p className={styles.bottomText}>{cityBannerText.bottomText}</p>
          <Link href={cityBannerText.bottomBtnLink} className="siteBtnLink">
            {cityBannerText.bottomBtnLabel}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CityBanner;