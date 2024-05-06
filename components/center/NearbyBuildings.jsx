import Slider from "react-slick";
import Image from 'next/image'
import Link from 'next/link'
const nearByData = [
    {
       id:1, 
       imageUrl: "/images/centers/fleet-house.jpg",
       title: "Fleet House",
       desc: " Andheri East Near Marol Naka Metro Station",
       btnLabel:"Know More",
       btnLink: "#",

    },
    {
        id:2, 
        imageUrl: "/images/centers/paradigm.jpg",
        title: "Paradigm",
        desc: "Malad West, Near Mindspace",
        btnLabel:"Know More",
        btnLink: "#",
 
     },
     {
        id:3, 
        imageUrl: "/images/centers/paradigm.jpg",
        title: "Paradigm",
        desc: "Malad West, Near Mindspace",
        btnLabel:"Know More",
        btnLink: "#",
 
     },

     {
        id:4, 
        imageUrl: "/images/centers/paradigm.jpg",
        title: "Paradigm",
        desc: "Malad West, Near Mindspace",
        btnLabel:"Know More",
        btnLink: "#",
 
     },
]

const NearbyBuildings = () => {

    const settings = {
        dots: false,
        autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false,
       responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
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
    <div className="nearByBuildings py-5">
      <div className="container">
        <div className="nearbySlider ">
          <Slider {...settings}>
            {nearByData &&
              nearByData.map((item, i) => (
                <div className="nearbyBox" key={item.id}>
                  <div className="nearByImage mb-4">
                    <Image src={item.imageUrl} alt="Nearby Building" fill />
                  </div>
                  <div className="nearByText">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <Link
                      href={item.btnLink}
                      className="siteBtn siteBtnBlack mt-4"
                    >
                      {item.btnLabel}
                    </Link>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default NearbyBuildings