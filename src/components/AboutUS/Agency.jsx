import img1 from "../../assets/profile-pictures/Balloon.jpg";
import img2 from "../../assets/profile-pictures/Giraffe.jpg";
import img3 from "../../assets/profile-pictures/Tembo.jpg";

const TravelAgencyComponent = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-start">
     
        <div className="w-full md:w-1/2 p-4">
          <div className="grid grid-cols-2 grid-rows-1 gap-4">
            <div className="col-span-2 row-span-">
              <img 
                src={img1} 
                alt="Aerial view of coastal town" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1">
              <img 
                src={img2}
                alt="Beach scene" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1">
              <img 
                src={img3} 
                alt="Historic street" 
                className="w-full h-64 object-cover"
              />
            </div> 
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="space-y-6">
            <p className="text-orange-400 font-medium">Agency</p>
            <h1 className="text-4xl font-bold leading-tight">
            </h1>
            <div className="space-y-4">
              <p>
                At <strong>Jasafa Tours and Travel Agency</strong> we are passionate about curating travel experiences that go beyond ordinary sightseeing. Founded in 2020, our mission is to inspire exploration, foster meaningful connections, and create unforgettable memories for every traveler.
              </p>
              
              <p>
                With <strong>5+ years of expertise</strong> in the travel industry, we take pride in offering personalized, hassle-free, and value-packed travel solutions tailored to meet your unique needs and desires. Whether you're dreaming of serene beach vacations, thrilling adventure tours, cultural explorations, or luxurious getaways, we are here to turn your travel dreams into reality.
              </p>
              
              {/* Vision */}
              <div>
                <h3 className="font-bold">Our Vision</h3>
                <p>
                  To be a leading travel agency known for delivering exceptional travel experiences, fostering connections, and empowering travelers to explore the world with confidence and curiosity.
                </p>
              </div>
              
              {/* Mission */}
              <div>
                <h3 className="font-bold">Our Mission</h3>
                <p>
                  To make travel accessible, enjoyable, and enriching for all by providing reliable, innovative, and customer-centric services that exceed expectations.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="#" className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Contact Us
                <svg className="ml-2 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 12h10M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelAgencyComponent;