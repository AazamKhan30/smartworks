
import CityBanner from '@/components/Locations/CityBanner'
import AboutContent from '@/components/Locations/AboutContent'
import WhyUs from '@/components/Locations/WhyUs'
import Centers from '@/components/common/Centers'
import FeaturedSection from '@/components/common/FeaturedSection'
import Footer from '@/components/common/Footer'
import Partner from '@/components/common/Partner'


const page = () => {

  return (
    <>
        <CityBanner/>
        <AboutContent/>
        <FeaturedSection/> 
        <WhyUs/>
        <Centers/>
        <Partner/>
        <Footer/>
    </>
  )
}

export default page