import React from "react";
import HeroSection from "../components/HeroSection";
import foreImage from "../assets/profile-pictures/foreImage.jpg";
import Mtweka from "../assets/profile-pictures/Mtweka.jpg"
import Tembo from "../assets/profile-pictures/Tembo.jpg"
import Balloon from "../assets/profile-pictures/Balloon.jpg"
import Lion from "../assets/profile-pictures/Lion.jpg"
import Wildbeest from "../assets/profile-pictures/Wildbeest.jpg"
import Giraffe from "../assets/profile-pictures/Giraffe.jpg"
import SafariTourCard from "../components/cards/SafariTourCard";


const WildlifeSafaris = () => {
  return (
    <>
      <HeroSection
        backgroundImage={foreImage}
        title="Explore the Wild Like Never Before"
        description="Experience breathtaking wildlife safaris in the heart of nature. Witness majestic creatures in their natural habitat and create unforgettable memories."
        buttonText="Book Your Safari"
      />

      <div className="container mx-auto px-1 mt-20">
        <h2 className="text-3xl font-bold text-black-800">Wildlife Safaris</h2>
      </div>

      {/* Safari Tour Cards Section */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SafariTourCard
          imageUrl={Mtweka}
          title="Lake Manyara National Park"
          location="Nothern, Tanzania"
          duration={7}
          groupSize="10-15"
          rating={5}
          isFeatured={true}
          showPrice={false} // Hide the price
        />
        <SafariTourCard
          imageUrl={Balloon}
          title="Serengeti National Park"
          location="North-central, Tanzania"
          duration={5}
          groupSize="8-12"
          rating={4}
          showPrice={false} // Hide the price
        />
        <SafariTourCard
          imageUrl={Tembo}
          title="Tarangire National Park"
          location="Manyara Region, Tanzania"
          duration={6}
          groupSize="12-18"
          rating={5}
          showPrice={false} // Hide the price
        />
      </div>
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SafariTourCard
          imageUrl={Lion}
          title="Ruaha National Park"
          location="Central to Southern Tanzania"
          duration={7}
          groupSize="10-15"
          rating={5}
          isFeatured={true}
          showPrice={false} // Hide the price
        />
        <SafariTourCard
          imageUrl={Wildbeest}
          title="Ngorongoro National Park"
          location="Nothern-higlands, Tanzania"
          duration={5}
          groupSize="8-12"
          rating={4}
          showPrice={false} // Hide the price
        />
        <SafariTourCard
          imageUrl={Giraffe}
          title="Mikumi National Park"
          location="South-West, Tanzania"
          duration={6}
          groupSize="12-18"
          rating={5}
          showPrice={false} // Hide the price
        />
      </div>
    </>
  );
};

export default WildlifeSafaris;
