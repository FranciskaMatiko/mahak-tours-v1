import { FaShoePrints, FaCross, FaStar, FaMapMarkerAlt, FaSuitcase, FaTicketAlt } from 'react-icons/fa';

const WhyUs = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-400 font-medium text-center mb-4">Why us</p>
          <h2 className="text-4xl font-bold text-center mb-12">
            We Make All The Process Easy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-orange-400">
                <FaShoePrints className="text-orange-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Best Travel Agent</h3>
                <p className="text-gray-600">
                  The generated Lorem Ipsum is therefore always free from repetition available
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-orange-400">
                <FaCross className="text-orange-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Trust & Safety</h3>
                <p className="text-gray-600">
                  There are many variations of passages of Lorem Ipsum available you available
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-orange-400">
                <FaStar className="text-orange-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Best Price Guarantee</h3>
                <p className="text-gray-600">
                  All the Lorem Ipsum generators on the Internet need
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-orange-400">
                <FaMapMarkerAlt className="text-orange-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Beautiful Places</h3>
                <p className="text-gray-600">
                  The generated Lorem Ipsum is therefore always free from repetition
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-orange-400">
                <FaSuitcase className="text-orange-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Passionate Travel</h3>
                <p className="text-gray-600">
                  There are many variations of passages of Lorem Ipsum available
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-orange-400">
                <FaTicketAlt className="text-orange-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Fast Booking</h3>
                <p className="text-gray-600">
                  If you are going to use a passage of Lorem Ipsum, you need
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;