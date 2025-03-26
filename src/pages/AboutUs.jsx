import React from 'react';
import AboutUsBannerComponent from "../components/AboutUsBannerComponent";
import TravelAgencyComponent from '../components/AboutUS/Agency';
import WhyUs from '../components/AboutUS/WhyUs';
import OurTeam from '../components/AboutUS/OurTeam';
import FAQ from "../components/AboutUS/FAQ";
import StatsComponent from "../components/AboutUS/StatsComponent";



const AboutUs = () => {
  const bannerImages = [
    'https://c4.wallpaperflare.com/wallpaper/92/481/105/lion-lion-cub-family-cub-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/737/1004/39/serengeti-lioness-sleeping-wallpaper-preview.jpg',
    'https://c1.wallpaperflare.com/preview/92/961/217/zebra-animal-mammal-zebras.jpg'
  ];

  return (
    <>
      <AboutUsBannerComponent images={bannerImages} transitionDuration={7000} />
      <TravelAgencyComponent />
      <WhyUs />
      <OurTeam />
      <FAQ />
      <StatsComponent />
    </>
  );
};

export default AboutUs;