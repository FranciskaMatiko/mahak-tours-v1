import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WildlifeSafaris from './pages/WildlifeSafaris';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import MapPage from './pages/MapPage';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery"  />
        <Route path="/Wildlife_Safaris"  element={<WildlifeSafaris />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="*" /> 
      </Routes>
      <Footer />
    </Router>
  )
}