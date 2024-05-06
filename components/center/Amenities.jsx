"use client"
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";



const amenitiesData = [
    {
      id: "1",
      icon: "/images/sketch.png",
      title: "Meeting Rooms",
     
    },
    {
      id: "2",
      icon: "/images/sketch.png",
      title: "Activity Zone",
     
    },
    {
      id: "3",
      icon: "/images/sketch.png",
      title: "Conference Rooms",
  
    },

    {
        id: "4",
        icon: "/images/sketch.png",
        title: "Smart Store",
        
      },

      {
        id: "5",
        icon: "/images/sketch.png",
        title: "Cafeteria",
        
      },

      {
        id: "6",
        icon: "/images/sketch.png",
        title: "Lounge Space",
        
      },
      {
        id: "7",
        icon: "/images/sketch.png",
        title: "Training Room",
        
      },
      {
        id: "8",
        icon: "/images/sketch.png",
        title: "Games Zone",
        
      },
      {
        id: "9",
        icon: "/images/sketch.png",
        title: "xxxxxxxx",
        
      },
      {
        id: "10",
        icon: "/images/sketch.png",
        title: "xxxxxxxx",
        
      },
      {
        id: "11",
        icon: "/images/sketch.png",
        title: "xxxxxxxx",
        
      },
      {
        id: "12",
        icon: "/images/sketch.png",
        title: "xxxxxxxx",
        
      },
      {
        id: "13",
        icon: "/images/sketch.png",
        title: "xxxxxxxx",
        
      },
      {
        id: "14",
        icon: "/images/sketch.png",
        title: "xxxxxxxx",
        
      },
  ];

const Amenities = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
          breakpoint: 767,
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
    <section className=" amenitiesSlider">
      <div className="container">
        <div className="sectionHeader mb-5">
          <div className="sectionTitle">
         
            <h2 className="mb-3">
              Amenities 
            </h2>
          </div>
        </div>
       <div className="slider-container">
          <Slider {...settings}>
            {amenitiesData &&
              amenitiesData.map((item, index) => (
                <div className="aminitiBox" key={index}>
                  <div className="aminitiIcon">
                    <Image
                      src={item.icon}
                      width={48}
                      height={48}
                      alt="ameniti icon"
                    />
                  </div>
                  <div className="amenitiText">
                    <h3>
                      <Link href="">{item.title}</Link>
                    </h3>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Amenities