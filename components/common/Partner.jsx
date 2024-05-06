"use client";
import Slider from "react-slick";
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

  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
   
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]


  };
  return (
    <div className="pb100 pt-5">
    <div className="container">
    <div className="sectionHeader  px-3">
          <div className="sectionTitle">
           <h2 className='mb-3'>Our Trusted Clients</h2>
         </div>
     </div>
    {partnerData && (
         <Slider {...settings}>
        
            {partnerData &&
              partnerData.map((partner) => (
            
                  <div className={styles.partnerItem} key={partner.id}>
                    <Image
                      src={partner.image}
                      alt="partner"
                      width={100}
                      height={26} />
                  </div>
            
              ))}
          
          </Slider>
      
    )}
  </div>
 </div>
  )
}

export default Partner