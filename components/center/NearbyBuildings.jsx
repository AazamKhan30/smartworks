import Image from 'next/image'
import Link from 'next/link'
const nearByData = [
    {
       id:1, 
       imageUrl: "/images/centers/fleet-house.jpg",
       title: "Fleet House",
       desc: " Andheri East Near Marol Naka Metro Station",

    },
    {
        id:2, 
        imageUrl: "/images/centers/paradigm.jpg",
        title: "Paradigm",
        desc: "Malad West, Near Mindspace",
 
     },
]

const NearbyBuildings = () => {
  return (
    <div className='nearByBuildings py-5'>
            <div className="container">
                <div className="row">
                    {nearByData && nearByData.map((item, i)=>(
                           <div className="col-md-6 mb-4 mb-md-0" key={item.id}>
                            <Link href="#">
                           <div className="nearbyBox">
                            <div className="nearByImage">
                                <Image src={item.imageUrl} alt='Nearby Building' fill/>
                            </div>
                            <div className="nearByText">
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                            </div>  
                            </Link>   
                        </div>
                    ))}
      
                </div>
            </div>
    </div>
  )
}

export default NearbyBuildings