import { useState, useEffect } from 'react';

const AboutUsBanner = ({ images, transitionDuration = 5000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, transitionDuration);

    return () => clearInterval(interval);
  }, [transitionDuration, images.length]);

  return (
    <div className="relative h-[500px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
      
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-5xl font-bold text-white z-10">
          About Us
        </h2>
      </div>
    </div>
  );
};

export default AboutUsBanner;