
import CityBanner from '@/components/Locations/CityBanner'
import OfficeSpace from '@/components/Locations/OfficeSpace'
import WhyUs from '@/components/Locations/WhyUs'
import Centers from '@/components/common/Centers'
import FeaturedSection from '@/components/common/FeaturedSection'
import Footer from '@/components/common/Footer'

import Partner from '@/components/common/Partner'

const page = () => {

  return (
    <>
        <CityBanner/>
        <OfficeSpace/>
        <FeaturedSection/> 
        <WhyUs/>
        <Centers/>
        <Partner/>
        <Footer/>
    </>
  )
}

export default page