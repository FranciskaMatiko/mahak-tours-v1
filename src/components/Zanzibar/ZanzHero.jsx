import React, { useEffect, useRef } from 'react';

const ZanzHero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const elements = [titleRef, subtitleRef, descriptionRef];
    
    elements.forEach((element, index) => {
      if (element.current) {
        element.current.classList.add('animate__animated', 'animate__fadeIn');
        element.current.style.animationDelay = `${index * 0.2}s`;
        const animationEndHandler = () => {
          element.current.classList.remove('animate__animated', 'animate__fadeIn');
        };
        
        element.current.addEventListener('animationend', animationEndHandler);
        
        return () => {
          element.current.removeEventListener('animationend', animationEndHandler);
        };
      }
    });
  }, []);

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 
          ref={subtitleRef} 
          className="text-orange-400 font-medium mb-4 text-xl"
        >
          Places to go
        </h3>
        <h2 
          ref={titleRef} 
          className="text-4xl font-bold mb-8"
        >
          Perfect Destinations
        </h2>

        <div 
          ref={descriptionRef} 
          className="max-w-xl mx-auto mb-6 text-gray-600"
        >
          <p className="mb-4">
            Zanzibar is a fairytale island in the Indian Ocean with tropical greenery, turquoise-green warm seas, swaying coconut palms and a friendly population.
          </p>
          <p>
            A perfect place for those who want to escape, relax, get active with snorkelling, kite-surfing and more or are looking for great Instagram pictures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZanzHero;