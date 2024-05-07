import Slider from "react-slick";
import Image from 'next/image';
const galleryImageData = [
  {
    id: "1",
    image: "/images/gallery/galleryImg1.jpg",
  },
  {
    id: "2",
    image: "/images/gallery/galleryImg2.jpg",
  },
  {
    id: "3",
    image: "/images/gallery/galleryImg3.jpg",
  },
  {
    id: "4",
    image: "/images/gallery/galleryImg4.jpg",
  },

  {
    id: "8",
    image: "/images/gallery/galleryImg1.jpg",
  },
];
const Gallery = () => {

  var settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "250px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <>
      <div className="py-5">
        <div className="container">
          <div className="sectionHeader mb-5">
            <div className="sectionTitle">
              <h2 className="mb-3">Gallery of this project</h2>
            </div>
          </div>
        </div>
        <div className="gallerySlider">
          <Slider {...settings}>
            {galleryImageData &&
              galleryImageData.map((value, i) => (
                <div className="gBox" key={i}>
                  <Image
                    src={value.image}
                    width={521}
                    height={353}
                    alt="Gallery Img"
                  />
                </div>
              ))}
          </Slider>
        </div>
        {/* {galleryImageData && (
            <ResponsiveMasonry
              columnsCountBreakPoints={{
                300: 1,
                576: 2,
                992: 3,
              }}
            >
              <Masonry gutter="30px">
                {galleryImageData &&
                  galleryImageData.map((value, i) => (
                    <div key={i}>
                      <Image
                        src={value.image}
                        alt="gallery image"
                        width={352}
                        height={382}
                      />
                    </div>
                  ))}
              </Masonry>
            </ResponsiveMasonry>
          )} */}
      </div>
    </>
  );
}

export default Gallery