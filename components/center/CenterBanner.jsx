import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";



 const centerImages =[
    {
      id:1,
      imgUrl: "/images/centerBanner1.jpg",
    },
    {
      id:2,
      imgUrl: "/images/centerBanner2.jpg",
    },
  ]

 


const CenterBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    pauseOnHover:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  
   
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
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
    }
  return (
    <section className="centerBanner">
      <Slider {...settings}>
        {centerImages.map((item, i) => (
          <div className="position-relative min-vh-100 d-flex align-items-center centerSlide" key={item.id}>
            <Image src={item.imgUrl} alt="Center Banner" fill />
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="centerBannerText">
                    <h2 className="text-white mb-0">
                      Times Square<br />Building
                    </h2>
                    <h5 className="text-white">Andheri East, Mumbai</h5>
                    <Link href="#contactForm" className="siteBtn">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default CenterBanner