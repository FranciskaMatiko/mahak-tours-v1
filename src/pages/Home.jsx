
// import TourCardsSection from "./components/TourCardsSection";
import SafariTripsSection from "../components/SafariTripsSection";
import SafariToursSection from "../components/SafariToursSection";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import PacificTravel from "../components/cards/PacificTravel";


const Home = () => {
  const backgroundImage = "https://c4.wallpaperflare.com/wallpaper/552/776/879/phenomenon-africa-purple-sky-national-park-wallpaper-preview.jpg";
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <Hero />
        </div>
      </div>
      {/* <div className="max-w-7xl mx-auto pt-1 px-6">
          <Hero2 />
      </div> */}
      
      {/* 
          <SafariTripsSection />
       */}
      <PacificTravel />
      <Features />
      <SafariToursSection />
 
    </>
  )
}

export default Home;