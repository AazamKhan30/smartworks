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
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <section className="py-5 amenitiesSlider">
      <div className="container">
      <div className="sectionHeader px-3 mb-5">
          <div className="sectionTitle">
            <span>Amenities</span>
            <h2 className="mb-3">
           Aminties for <br/>this Office
            </h2>
           
          </div>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            <div>

              <div className="row">
                {amenitiesData && amenitiesData.slice(0, 8).map((item, index)=>(
                      <div className="col-md-3" key={index}>
                      <div className="aminitiBox">
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
                    </div>
                ))}
              
              
              </div>
            </div>
            <div>
              <div className="row">
              {amenitiesData && amenitiesData.slice(8, 16).map((item, index)=>(
                      <div className="col-md-3" key={index}>
                      <div className="aminitiBox">
                        <div className="aminitiIcon">
                          <img
                            src={item.icon}
                            width={50}
                            height={50}
                            alt="ameniti icon"
                          />
                        </div>
                        <div className="amenitiText">
                          <h3>
                            <Link href="">{item.title}</Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Amenities