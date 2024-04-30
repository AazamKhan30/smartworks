"use client"
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import arrowRightIcon from "../../public/images/arrow-right.svg";
import styles from '@/styles/serviceSlider.module.css'
// import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from "react-icons/md";
const servicesData = [
    {
      id: "1",
      icon: "/images/sketch.png",
      title: "Urban Design",
      shortText:
        "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.",
      link: "#",
    },
    {
      id: "2",
      icon: "/images/sketch.png",
      title: "Architecture",
      shortText:
        "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.",
      link: "#",
    },
    {
      id: "3",
      icon: "/images/sketch.png",
      title: "Interior Design",
      shortText:
        "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.",
      link: "#",
    },
  ];
const ServiceSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
        // nextArrow: <MdOutlineArrowForwardIos />,
        // prevArrow: <MdOutlineArrowBackIosNew />,
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
  

    <div className="serviceSlider">
    <Slider {...settings}>
        {servicesData && servicesData.map((value, i)=>(
            <div className={styles.serviceBox} key={i}>
            <div className={styles.serviceIcon}>
              <img  src={value.icon} width={50} height={50} alt="service-icon"/>
            </div>
            <h3>
              <Link href={value.link}>{value.title}</Link>
            </h3>
            <p>{value.shortText}</p>

            <Link href={value.link} className={styles.serviceBtn}>
              <Image src={arrowRightIcon} alt="arrow-right" width={18} height={18} />
            </Link>
          </div>
        ))}
     </Slider>
        </div>
    )}
      

export default ServiceSlider