"use client"

import { usePathname } from 'next/navigation'
import CenterBanner from '@/components/center/CenterBanner'
import ContactForm from '@/components/common/ContactForm'
import Gallery from '@/components/center/Gallery'
import { Suspense } from 'react'
import Amenities from '@/components/center/Amenities'
import LocationDetails from '@/components/center/LocationDetails'
import Overview from '@/components/center/Overview'
import NearbyBuildings from '@/components/center/NearbyBuildings'

const centerPage = () => {
 
  return (
    <>
      <CenterBanner />
      <Overview />
      <Amenities />
      <Gallery />
      <LocationDetails />
      <NearbyBuildings/>
      <ContactForm />
    </>
  );
}

export default centerPage