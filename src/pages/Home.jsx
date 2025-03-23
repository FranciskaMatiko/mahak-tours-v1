
// import TourCardsSection from "./components/TourCardsSection";
import SafariTripsSection from "../components/SafariTripsSection";
import SafariToursSection from "../components/SafariToursSection";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";


const Home = () => {
  const backgroundImage = "https://statics.tpn.to/hero/images/safaris.jpg";
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <Hero />
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-1 px-6">
          <Hero2 />
        </div>
      
      <Features />
      <SafariTripsSection />
      <SafariToursSection />
    </>
  )
}

export default Home;