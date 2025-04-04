import { Menu, X, Locate, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { useState } from 'react';
import logo from '../assets/logo.png';
import { navItems } from '../constants';
import { Link } from 'react-router-dom';

const MobileDropdown = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-2">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="hover:text-orange-500"
      >
        {item.label} {isOpen ? '▴' : '▾'}
      </button>
      
      {isOpen && (
        <ul className="mt-2 space-y-2">
          {item.subItems.map((subItem, subIndex) => (
            <li key={subIndex}>
              <Link 
                to={subItem.href} 
                className="block py-1 hover:text-orange-500"
              >
                {subItem.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 py-0 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="w-full py-4 px-4 relative text-sm bg-green-900 text-white">
          <div className="flex justify-between items-center w-full">
            <div className="hidden lg:flex items-center flex-shrink-0">
              <Locate />
              <span className="text-sm tracking-tight ml-2 mr-4">Dodoma Tanzania</span>
              <Mail />
              <span className="text-sm tracking-tight ml-2">info@mahaktours.co.tz</span>
            </div>
            <div className="hidden lg:flex items-center flex-shrink-0 space-x-4 mr-9">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter /></a>
            </div>
          </div>
        </div>

        <div className="container py-4 px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center flex-shrink-0">
              <img className='h-10 w-10 mr-2' src={logo} alt="logo" />
              <span className="text-xl tracking-tight">Mahak Tours</span>
            </Link>

            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  {item.subItems ? (
                    <>
                      <Link to={item.href} className="hover:text-orange-500 transition-colors">
                        {item.label}
                        <span className="ml-1">▾</span>
                      </Link>
                      <ul className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[200px] z-50">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link 
                              to={subItem.href} 
                              className="block px-4 py-2 hover:bg-gray-100 text-black"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link 
                      to={item.href} 
                      className="hover:text-orange-500 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <Link to="/login" className='py-2 px-3 border rounded-md'>Sign In</Link>
              <Link to="/booking" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Book Now</Link>
            </div>

            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleMenu}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul className="w-full">
                {navItems.map((item, index) => (
                  <li key={index} className="py-4 text-center">
                    {item.subItems ? (
                      <MobileDropdown item={item} />
                    ) : (
                      <Link 
                        to={item.href} 
                        onClick={toggleMenu}
                        className="hover:text-orange-500"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6">
                <Link to="/login" className="py-2 px-3 border rounded-md">Sign In</Link>
                <Link to="/booking" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">Booking Now</Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;