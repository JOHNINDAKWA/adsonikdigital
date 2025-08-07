import React from 'react'
import Landing from './Landing/Landing'
import AboutUs from './AboutUs/AboutUs'
import DigitalMarketingHighlights from './DigitalMarketingHighlights/DigitalMarketingHighlights'
import AdsonicHero from './AdsonicHero/AdsonicHero'
import BrandingDesignSection from './BrandingDesignSection/BrandingDesignSection'

const Home = () => {
  return (
    <div>
        <Landing />
        <AboutUs/>
        <DigitalMarketingHighlights/>
        <AdsonicHero/>
        <BrandingDesignSection/>
    </div>
  )
}

export default Home