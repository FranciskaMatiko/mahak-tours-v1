import { MapPin, User, Briefcase, Map, Navigation } from 'lucide-react';

const PacificTravel = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Left Column */}
                <div className="col-span-2 space-y-8">
                    {/* Activities Section */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">Wildlife Safaris in Tanzania</h2>
                        <p className="text-gray-600">
                            Tanzania, Africa's safari gem, is a wildlife enthusiast's paradise. Imagine exploring the
                            majestic Ngorongoro Crater and the vast Serengeti National Park. The country is home to the
                            legendary Big Five and countless other species. From graceful giraffes and playful hippos
                            to stealthy caracals, African wild dogs, and a myriad of other lesser-known animals.
                        </p>
                        <p className="text-gray-600">
                            On a Tanzanian safari, you're not just observing. You're part of the scene. Animals roam freely, offering a genuine glimpse into their daily lives.
                            As dusk falls, the adventure doesn't end. You'll relax in comfortable lodges, the unique sounds of the savannah as your lullaby.

                            The country's landscapes are as diverse as its wildlife, from the Serengeti's dry plains to Ngorongoro's lush forests.
                            Every corner of Tanzania offers a different slice of nature, promising a rich and unforgettable wildlife journey.
                        </p>
                    </div>

                    {/* Travel Arrangements Section */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-orange-500">
                                <Briefcase className="w-5 h-5" />
                                <h3 className="text-xl font-semibold">Travel Arrangements</h3>
                            </div>
                            <p className="text-gray-600">
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, vel, beatae veritatis vero ducimus voluptates quae ipsum rem voluptate officia dolorem ad pariatur fugiat nesciunt quidem! Tenetur iste accusamus cumque nulla eligendi dolorum provident sequi excepturi necessitatibus.
                                Qui ducimus quas consectetur inventore. Minus quam rem sunt minima atque aperiam praesentium.
                            </p>
                        </div>

                        {/* Sub-sections */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <div className="mb-4">
                                    <Navigation className="w-8 h-8 text-orange-500" />
                                </div>
                                <h4 className="text-lg font-semibold mb-2">Rhyung Ganga</h4>
                                <p className="text-gray-600 text-sm">
                                    A small river named Duden flows by their place and supplied it with the necessary logistics.
                                </p>
                            </div>

                            <div className="bg-green-50 p-6 rounded-lg">
                                <div className="mb-4">
                                    <MapPin className="w-8 h-8 text-orange-500" />
                                </div>
                                <h4 className="text-lg font-semibold mb-2">Leppanow Kofenga</h4>
                                <p className="text-gray-600 text-sm">
                                    A small river named Duden flows by their place and supplied it with the necessary logistics.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Welcome Section */}
                <div className="col-span-2 p-8 bg-gray-50 rounded-xl">
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-orange-500 mb-2">Welcome to Mahak Tours</h2>
                        <h1 className="text-4xl font-bold mb-6">It's time to start your adventure</h1>
                    </div>

                    <p className="mb-6 text-gray-600">
                       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, at aliquam. Nihil laboriosam aliquam debitis sint 
                       consectetur unde vitae. Fugiat, alias officia, asperiores beatae ullam inventore accusamus aliquid aliquam necessitatibus assumenda commodi doloremque voluptas 
                       ipsum molestias sequi tenetur hic quo! Tempora molestias earum possimus ut reiciendis aliquam, alias ipsum facilis.
                    </p>

                    <p className="mb-6 text-gray-600">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti sequi ullam odit earum corporis iste obcaecati explicabo. Eum, illum doloribus cum architecto corporis doloremque impedit quisquam, consectetur voluptatibus deserunt, molestiae ea? Molestiae,
                        libero nemo! Maxime consequatur accusantium ratione itaque obcaecati.
                    </p>

                      {/* Search Destination Section */}
                      <div className="bg-orange-50 p-6 rounded-lg">
                        <div className="flex items-center gap-4">
                            <Map className="w-8 h-8 text-orange-500" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Search Destination</h3>
                                <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors">
                                    Explore Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PacificTravel;