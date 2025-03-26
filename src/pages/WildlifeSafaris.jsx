import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import SafariTourCard from "../components/cards/SafariTourCard";
import Pagination from "../components/Pagination";
import { Pictures } from "../constants/index";

const Zebra ="https://cdn.tourradar.com/s3/tour/1500x800/52052_31fa14.jpg";
const Twiga ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEkRdj2V7P4TFUvMJ7Tw-bWNr7A6G3WJmAjw&s";
const Animal ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoFiWMhSEaw6w4aKU6hXhaZxqBeoyYb04Xg&s";
const Junior = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsFT-W9oHDRvRHjtLMVZ2yLJ5W9TQQgNgZlg&s";
const Elephant = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ30x-gjNGy6opL7P499tyFCWBmBUbFUXC1bQ&s";
const Flamingo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW951YbE81MkGmcO5JBUzZCPlFr_mmY4v2vA&s";

const safariData = [
  { imageUrl: Pictures.Mtweka, title: "Lake Manyara National Park", location: "Northern, Tanzania", duration: 7, groupSize: "10-15", rating: 5, isFeatured: true, showPrice: false },
  { imageUrl: Pictures.Balloon, title: "Serengeti National Park", location: "North-central, Tanzania", duration: 5, groupSize: "8-12", rating: 4,isFeatured: true, showPrice: false },
  { imageUrl: Pictures.Tembo, title: "Tarangire National Park", location: "Manyara Region, Tanzania", duration: 6, groupSize: "12-18", rating: 5, isFeatured: true, showPrice: false },
  { imageUrl: Pictures.Lion, title: "Ruaha National Park", location: "Central to Southern Tanzania", duration: 7, groupSize: "10-15", rating: 5, isFeatured: true, showPrice: false },
  { imageUrl: Pictures.Wildbeest, title: "Ngorongoro National Park", location: "Northern Highlands, Tanzania", duration: 5, groupSize: "8-12", rating: 4, isFeatured: true, showPrice: false },
  { imageUrl: Pictures.Giraffe, title: "Mikumi National Park", location: "South-West, Tanzania", duration: 6, groupSize: "12-18", rating: 5, isFeatured: true, showPrice: false },
  { imageUrl: Zebra, title: "Serengeti National Park", location: "North-central, Tanzania", duration: 8, groupSize: "10-15", rating: 5, isFeatured: true, showPrice: false },
  { imageUrl: Twiga, title: "Lake Manyara National Park", location: "Northern, Tanzania", duration: 7, groupSize: "10-15", rating: 5, isFeatured: true, showPrice: false },
  { imageUrl: Animal, title: "Ruaha National Park", location: "Central to Southern Tanzania", duration: 7, groupSize: "10-15", rating: 5, isFeatured: true, showPrice: false },
  { imageUrl: Junior, title: "Mikumi National Park", location: "South-West, Tanzania", duration: 6, groupSize: "12-18", rating: 5, isFeatured: true, showPrice: false },
  { imageUrl: Elephant, title: "Tarangire National Park", location: "Manyara Region, Tanzania", duration: 6, groupSize: "12-18", rating: 5, isFeatured: true, showPrice: false },
  { imageUrl: Flamingo, title: "Ngorongoro National Park", location: "Northern Highlands, Tanzania", duration: 5, groupSize: "8-12", rating: 4, isFeatured: true, showPrice: false },




];

const picOnline = "https://www.andbeyond.com/wp-content/uploads/sites/5/Africa-Tanzania-Serengeti-National-Park-hot-air-balloons-Website-1920x1080-fill-gravityauto-Q_AutoBest.jpg";

const heroImages = [Pictures.foreImage, picOnline, Pictures.Giraffe];

const WildlifeSafaris = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(safariData.length / itemsPerPage);

  const handlePageChange = (newPage) => setCurrentPage(newPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSafaris = safariData.slice(startIndex, endIndex);

  return (
    <>
      <HeroSection
        backgroundImage={heroImages[(currentPage - 1) % heroImages.length]}
        title="Explore the Wild Like Never Before"
        description="Experience breathtaking wildlife safaris in the heart of nature. Witness majestic creatures in their natural habitat and create unforgettable memories."
        buttonText="Book Your Safari"
      />

      <div className="container mx-auto px-1 mt-20">
        <h2 className="text-3xl font-bold text-black-800">Wildlife Safaris</h2>
      </div>

      {/* Safari Cards */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentSafaris.map((safari, index) => (
          <SafariTourCard key={index} {...safari} />
        ))}
      </div>

      {/* Pagination Component */}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </>
  );
};

export default WildlifeSafaris;
