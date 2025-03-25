import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from './pages/AboutUs';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery"  />
        <Route path="/tours"  />
        <Route path="/contact" />
        <Route path="*" /> 
      </Routes>
      <Footer />
    </Router>
  )
}