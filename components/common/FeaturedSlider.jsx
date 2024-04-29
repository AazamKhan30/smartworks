"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Image from 'next/image';


const featuredData =[
    {
        id: "1",
        imgUrl: "/images/featuredOffice1.jpg",
        title: "SmartWorks Corportate Office",
        btnLabel: "visit",
        btnLink: "#",
      },

      {
        id: "2",
        imgUrl: "/images/featuredOffice2.jpg",
        title: "SmartWorks Corporate Office",
        btnLabel: "Visit",
        btnLink: "#",
      },

      {
        id: "3",
        imgUrl: "/images/featuredOffice3.jpg",
        title: "SmartWorks Corporate Office",
        btnLabel: "Visit",
        btnLink: "#",
      },

      {
        id: "3",
        imgUrl: "/images/featuredOffice1.jpg",
        title: "SmartWorks Corporate Office",
        btnLabel: "Visit",
        btnLink: "#",
      },
]

const FeaturedSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:true,
   
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]


  };

  return (
    <div className="featuredSlider pb100">
      <Slider {...settings}>
        {featuredData &&
          featuredData.map((value, i) => (
            <div className="fBox" key={i}>
              <div className="fBoxInner">
                <div className="fImg">
                  <Image
                    src={value.imgUrl}
                    alt="Office"
                    width={352}
                    height={395}
                  />
                </div>
                <div className="fContent">
                  <h3>{value.title}</h3>
                </div>
              </div>
              <div className="fBtn mt-4">
                <Link href={value.btnLink} className="siteBtn">
                  {value.btnLabel}
                </Link>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default FeaturedSlider