import { Star, MapPin, Users, Clock, Heart, Camera } from "lucide-react";

const SafariTourCard = ({
  imageUrl,
  title,
  location,
  duration,
  groupSize,
  rating,
  isFeatured = false,
  hasVideo = false,
  showPrice = true, // NEW: Control visibility of price
  price,
}) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg bg-white transition-shadow hover:shadow-xl">
      {/* Image and featured tag */}
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />

        {/* Featured tag */}
        {isFeatured && (
          <span className="absolute top-4 left-4 bg-cyan-500 text-white px-3 py-1 text-xs font-medium rounded-full">
            FEATURED
          </span>
        )}

        {/* Video icon */}
        {hasVideo && (
          <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 flex items-center justify-center">
            <Camera className="w-4 h-4 text-gray-500" />
            <span className="text-xs text-gray-700 ml-1">3</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Rating */}
        <div className="flex items-center mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-5 h-5 mr-1 ${
                star <= rating ? "text-yellow-400" : "text-gray-200"
              }`}
            />
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>

        {/* Location */}
        <div className="flex items-center text-gray-600 text-sm mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          {location}
        </div>

        {/* Price (Hidden if showPrice is false) */}
        {showPrice && (
          <div className="flex items-center text-red-600 font-medium mb-4">
            <Users className="w-4 h-4 mr-1" />
            From ${price}
          </div>
        )}

        {/* Additional info */}
        <div className="flex justify-between items-center border-t pt-4">
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="w-4 h-4 mr-1" />
            {duration} days
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Users className="w-4 h-4 mr-1" />
            {groupSize}
          </div>
          <button className="text-gray-600 font-medium flex items-center">
            Explore →
          </button>
        </div>
      </div>

      {/* Heart icon */}
      <button className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white shadow-sm transition-all">
        <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
      </button>
    </div>
  );
};

export default SafariTourCard;
