import { ArrowRight } from 'lucide-react';

const SafariTripCard = ({
  imageUrl,
  title,
  bullets,
  price,
  isPopular = false
}) => {
  return (
    <div className="flex flex-row bg-beige-100 rounded-xl overflow-hidden shadow-md">
      {/* Image container */}
      <div className="w-1/2">
        <img
          src={imageUrl}
          alt="safari"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content container */}
      <div className="w-1/2 p-8 relative">
        {/* Popular badge */}
        {isPopular && (
          <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-md font-medium text-green-700">
            Popular
          </div>
        )}
        
        {/* Title */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {title}
        </h2>
        
        {/* Bullet points */}
        <ul className="space-y-3 mb-8">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-center">
              <span className="text-green-700 mr-2">•</span>
              <span className="text-gray-700">{bullet}</span>
            </li>
          ))}
        </ul>
        
        {/* Price tag */}
        <div className="absolute right-0 top-0 bg-red-600 text-white p-6 text-center">
          <div className="text-sm">FROM</div>
          <div className="text-xl font-bold">${price} USD</div>
        </div>
        
        {/* CTA button */}
        <button className="w-full bg-green-700 text-white py-3 rounded-md font-medium hover:bg-green-800 transition-colors">
          VIEW THIS TRIP
        </button>
      </div>
    </div>
  );
};

export default SafariTripCard;