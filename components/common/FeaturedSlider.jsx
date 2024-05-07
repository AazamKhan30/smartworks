"use client"
import Slider from "react-slick";
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

const FeaturedSlider = ({products}) => {
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
    <section className="pt100 bgBlack text-white">
    <div className="container">
      <div className="sectionHeader ">
        <div className="sectionTitle">
         
          <h2 className="mb-3 text-white">
            Featured <br />
            properties
          </h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
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
                <div className="hoverBox overlay">
                  <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.</p>
                </div>
              </div>
              <div className="fContent mt-3">
                <h3>{value.title}</h3>
                <Link href={value.btnLink} className="fBtn siteBtn mt-3">
                  {value.btnLabel}
                </Link>
              </div>
            </div>
          ))}
      </Slider>
    </div>
    </div>
    </section>
  );
}

export default FeaturedSlider