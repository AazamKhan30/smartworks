import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link';
import styles from '@/styles/citybanner.module.css'

export const cityBannerText = {
  imgUrl: "../images/banner-mumbai.jpg",
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
      className={`section-padding vh-100 d-flex bgImg  ${styles.showcase}`}
      style={{
        backgroundImage: `url(${cityBannerText.imgUrl})`,
      }}
    >
      <Container>
        <Row>
          <Col md={6}>
            <div className={styles.bannerText}>
              <h1
                className={styles.bannerTitle}
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="600"
                data-aos-once="false"
              >
                {cityBannerText.bannerTitle}
              </h1>
              <p
                className={styles.bannerDesc}
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
                data-aos-once="false"
              >
                {cityBannerText.bannerDesc}
              </p>
              <div
                className={styles.bannerButtons}
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="600"
                data-aos-once="false"
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
              </div>
            </div>
          </Col>
        </Row>
        <div className={styles.bottomBox}>
          <p className={styles.bottomText}>{cityBannerText.bottomText}</p>
          <Link href={cityBannerText.bottomBtnLink} className="siteBtnLink">
            {cityBannerText.bottomBtnLabel}
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CityBanner;