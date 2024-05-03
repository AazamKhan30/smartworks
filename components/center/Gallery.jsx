import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from 'next/image';
const galleryImageData = [
    {
      id: "1",
      image: "/images/gallery1.jpg",
    },
    {
      id: "2",
      image: "/images/gallery2.jpg",
    },
    {
      id: "3",
      image: "/images/gallery3.jpg",
    },
    {
      id: "4",
      image: "/images/gallery4.jpg",
    },
    {
      id: "5",
      image: "/images/gallery5.jpg",
    },
    {
      id: "6",
      image: "/images/gallery6.jpg",
    },
    {
      id: "7",
      image: "/images/gallery7.jpg",
    },
     {
      id: "8",
      image: "/images/gallery8.jpg",
    },

  ];
const Gallery = () => {
  return (
    <>
      <div className="py-5">
        <div className="container">
        <div className="sectionHeader px-3">
          <div className="sectionTitle">
            <span>Gallery</span>
            <h2 className="mb-3">
              Gallery for this<br/>project
            </h2>
           
          </div>
        </div>

          {galleryImageData && (
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
          )}
        </div>
      </div>
    </>
  )
}

export default Gallery