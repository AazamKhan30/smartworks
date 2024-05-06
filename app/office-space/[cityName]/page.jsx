
import CityBanner from '@/components/cities/CityBanner'
import AboutContent from '@/components/cities/AboutContent'
import WhyUs from '@/components/cities/WhyUs'
import Centers from '@/components/common/Centers'
import FeaturedSection from '@/components/common/FeaturedSection'
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
      
    </>
  )
}

export default page