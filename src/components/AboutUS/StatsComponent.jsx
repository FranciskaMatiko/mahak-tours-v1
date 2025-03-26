
import { FaMapMarkedAlt, FaCompass, FaSuitcase, FaUsers } from 'react-icons/fa';

const StatsComponent = () => {
  return (
    <div className="relative bg-cover bg-center bg-fixed h-96" style={{ backgroundImage: "url('https://ajkenyasafaris.com/wp-content/uploads/2023/05/south-africa-safari-tour-bg1.webp')" }}>
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70" />
      <div className="relative max-w-6xl mx-auto px-4 py-16">
        <div className="flex justify-center items-center space-x-24">
          {/* Destinations */}
          <div className="text-center">
            <FaMapMarkedAlt className="text-white text-4xl mb-4" />
            <h3 className="text-5xl font-bold text-white mb-2">154</h3>
            <p className="text-orange-400">Destinations</p>
          </div>
          
          {/* Amazing tours */}
          <div className="text-center">
            <FaCompass className="text-white text-4xl mb-4" />
            <h3 className="text-5xl font-bold text-white mb-2">2,165</h3>
            <p className="text-orange-400">Amazing tours</p>
          </div>
          
          {/* Tour types */}
          <div className="text-center">
            <FaSuitcase className="text-white text-4xl mb-4" />
            <h3 className="text-5xl font-bold text-white mb-2">98</h3>
            <p className="text-orange-400">Tour types</p>
          </div>
          
          {/* Happy customers */}
          <div className="text-center">
            <FaUsers className="text-white text-4xl mb-4" />
            <h3 className="text-5xl font-bold text-white mb-2">17,259</h3>
            <p className="text-orange-400">Happy customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;