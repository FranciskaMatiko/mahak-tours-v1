import React from 'react';
import AboutUsBannerComponent from "../components/AboutUsBannerComponent";
import { FaCampground as FaCamping, FaMountain, FaUmbrellaBeach } from 'react-icons/fa';

const AboutUs = () => {
  const bannerImages = [
    'https://c4.wallpaperflare.com/wallpaper/92/481/105/lion-lion-cub-family-cub-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/737/1004/39/serengeti-lioness-sleeping-wallpaper-preview.jpg',
    'https://c1.wallpaperflare.com/preview/92/961/217/zebra-animal-mammal-zebras.jpg'
  ];

  return (
    <div className="bg-gray-100">
      <AboutUsBannerComponent images={bannerImages} transitionDuration={7000} />
      
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-md mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4 text-gray-600">Who are we?</h2>
            <h1 className="text-4xl font-bold mb-6">Explore Real Adventure & Travels</h1>
            <p className="text-gray-600">
              Discover our fully customizable travel suggestions. At your own pace and according to your desires, we offer you the best that nature has to show you.
            </p>
            
            {/* Added off-the-beaten-track section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-600 mb-3">
                the beaten track experience.
              </h3>
              <p className="text-gray-600">
                Explore off-the-beaten-track adventures with Kale Voyage | Discover unique, lesser-known gems, creating exceptional and authentic experiences.
              </p>
            </div>
          </div>
          
          {/* Rest of the grid remains the same */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ... (existing camping, mountain, beach cards remain unchanged) ... */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;