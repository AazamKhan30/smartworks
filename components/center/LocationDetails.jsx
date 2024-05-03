import GoogleMap from "./GoogleMap"
import NearbyBuildings from "./NearbyBuildings"

const distanceData = [
    {
      id: "1",
      label: "2 KM",
      value: "JW Marriott",
     
    },
    {
        id: "2",
        label: "2.3 KM",
        value: "Chhatrapati Shivaji Maharaj International Airport ",
     
    },
    {
      id: "3",
      label: "6 KM",
      value: "BKC New CBD",
  
    },
    {
        id: "4",
        label: "650 M",
        value: "Marol Naka Metro Station",
   },
]

const LocationDetails = () => {
  return (
    <section className='locationDetails'>
        <div className="container">
        <div className="sectionHeader px-3 mb-5">
          <div className="sectionTitle">
            <span>Locations</span>
            <h2 className="mb-3">
               Location <br/>Details
            </h2>
           
          </div>
        </div>
            <div className="row">
                <div className="col-md-8">
                    <GoogleMap/>
                    <NearbyBuildings/>
                </div>
                <div className="col-md-4">
                    <div className="distanceDetails pe-5">
                        <ul>
                            {distanceData && distanceData.map((item, i)=>(
                                <li key={item.id}>
                                    <span className="distanceTitle">{item.label}</span>
                                    <p className="distanceText">{item.value}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default LocationDetails