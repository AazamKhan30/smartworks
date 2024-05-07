import CityBanner from '@/components/cities/CityBanner'
import AboutContent from '@/components/cities/AboutContent'
import WhyUs from '@/components/cities/WhyUs'
import Centers from '@/components/common/Centers'
import Partner from '@/components/common/Partner'
import FeaturedSlider from '@/components/common/FeaturedSlider'

const page = () => {


  return (
    <>
        <CityBanner/>
        <AboutContent/>
        <FeaturedSlider />
         <WhyUs/>
        <Centers/>
        <Partner/>
   
      
    </>
  )
}

export default page