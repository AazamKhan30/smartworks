  
"use client"
import Image from "next/image";
import Link from 'next/link';
const centersData = [
    {
      id: "1",
      image: "/images/centers/center1.jpg",
      title: "Lorem ipsum dolor sit amet, consectetur.",
      desc: "Maple Corporate Tower A and B, Sector-125, Noida, Uttar Pradesh - 201303",
      location: "Mumbai",
      link: "#",
      btnLabel: "Know More",
      btnLink: "#"
    },
    {
        id: "2",
        image: "/images/centers/center2.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur.",
        desc: "Maple Corporate Tower A and B, Sector-125, Noida, Uttar Pradesh - 201303",
        location: "Mumbai",
        link: "#",
        btnLabel: "Know More",
        btnLink: "#"
      },
      {
        id: "3",
        image: "/images/centers/center3.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur.",
        desc: "Maple Corporate Tower A and B, Sector-125, Noida, Uttar Pradesh - 201303",
        location: "Mumbai",
        link: "#",
        btnLabel: "Know More",
        btnLink: "#"
      },
      {
        id: "4",
        image: "/images/centers/center4.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur.",
        desc: "Maple Corporate Tower A and B, Sector-125, Noida, Uttar Pradesh - 201303",
        location: "Mumbai",
        link: "#",
        btnLabel: "Know More",
        btnLink: "#"
      },
      {
        id: "5",
        image: "/images/blog/blog4.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur.",
        desc: "Maple Corporate Tower A and B, Sector-125, Noida, Uttar Pradesh - 201303",
        location: "Mumbai",
        link: "#",
         btnLabel: "Know More",
         btnLink: "#"
      },
      {
        id: "6",
        image: "/images/blog/blog4.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur.",
        desc: "Maple Corporate Tower A and B, Sector-125, Noida, Uttar Pradesh - 201303",
        location: "Mumbai",
        link: "#",
        btnLabel: "Know More",
        btnLink: "#"
      },
      {
        id: "7",
        image: "/images/blog/blog4.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur.",
        desc: "Maple Corporate Tower A and B, Sector-125, Noida, Uttar Pradesh - 201303",
        location: "Mumbai",
        link: "#",
        btnLabel: "Know More",
        btnLink: "#"
      },
      {
        id: "8",
        image: "/images/blog/blog4.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur.",
        desc: "Maple Corporate Tower A and B, Sector-125, Noida, Uttar Pradesh - 201303",
        location: "Mumbai",
        link: "#",
        btnLabel: "Know More",
        btnLink: "#"
      },
  ];
const Centers = () => {
  return (
    <section className="pt100 ">
    <div className="container">
      <div className="sectionHeader  px-3">
        <div className="sectionTitle">
          <span>Centers</span>
          <h2 className='mb-3'>All <br/>Centers</h2>
       </div>
    </div>
      {centersData && (
            <div className="row justify-content-center">
              {centersData &&
                centersData.slice(0, 4).map((value, i) => (
                  <div className="col-lg-6 col-md-12 mb-5" key={i}>
                    <div className="centerItem">
                      <div className="centerimage">
                        <Link href={value.link}>
                          <Image
                            src={value.image}
                            alt="image"
                            width={1230}
                            height={560}
                          />
                        </Link>
                      </div>
                      <div className="content wrap-color">
                        <span className="location">{value.location}</span>
                        <h3>
                          <a href={value.link}>{value.title}</a>
                        </h3>
                      </div>
                    </div>
                    <div className="centerText">
                        <p>{value.desc}</p>
                        <Link href={value.btnLink} className="siteBtn siteBtnBlack">{value.btnLabel}</Link>
                      </div>
                  </div>
                ))}
            </div>
          )}    

      </div>
      </section>
  )
}

export default Centers