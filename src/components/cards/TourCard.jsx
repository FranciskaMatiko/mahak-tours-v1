import { ArrowRight } from 'lucide-react';

const TourCard = ({ title, subtitle, imageUrl }) => {
  return (
    <div className="group relative h-[500px] w-full overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={imageUrl}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      {/* Gradient overlay for a digital look */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
      <div className="absolute inset-x-0 bottom-0 p-6 z-10">
        <div className="relative bg-white/90 p-4 rounded-xl backdrop-blur-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              <p className="text-sm font-medium text-gray-600">{subtitle}</p>
            </div>
            <button className="p-2 rounded-full bg-emerald-700 text-white flex items-center justify-center transition-colors duration-300 hover:bg-emerald-600">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
