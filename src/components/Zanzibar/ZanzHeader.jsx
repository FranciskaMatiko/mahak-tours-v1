import React, { useEffect, useRef } from 'react';

const ZanzHeader = ({ title }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    // Add animation to text
    const headerElement = headerRef.current;
    
    // Add animation classes
    headerElement.classList.add('animate__animated', 'animate__fadeIn');
    
    // Remove animation classes after completion
    const animationEndHandler = () => {
      headerElement.classList.remove('animate__animated', 'animate__fadeIn');
    };
    
    headerElement.addEventListener('animationend', animationEndHandler);
    
    return () => {
      headerElement.removeEventListener('animationend', animationEndHandler);
    };
  }, []);

  return (
    <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://z.cdrst.com/foto/hotel-sf/1247ce7d/granderesp/foto-hotel-1247c3d3.jpg')" }}>
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70" />
      <div className="relative flex items-center justify-center h-full">
        <h1 
          ref={headerRef} 
          className="text-5xl font-bold text-white"
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default ZanzHeader;