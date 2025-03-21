import { Menu, X, Locate, Mail,Facebook,Instagram,Twitter } from "lucide-react";
import { useState } from 'react';
import logo from '../assets/logo.png';
import { navItems } from '../constants';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav className="sticky top-0 z-50 py-0 backdrop-blur-lg border-b border-neutral-700/80 " >

                <div className="w-full py-4 px-4 relative text-sm bg-green-900 text-white">
                    <div className="flex justify-between items-center w-full">
                        <div className="hidden lg:flex items-center flex-shrink-0">
                            <Locate />
                            <span className="text-sm tracking-tight ml-2 mr-4">Dodoma Tanzania</span>
                            <Mail />
                            <span className="text-sm tracking-tight ml-2">info@mahaktours.co.tz</span>
                        </div>
                        <div className="hidden lg:flex items-center flex-shrink-0 space-x-4 mr-9">
                        <Facebook />
                        <Instagram />
                        <Twitter />
                        </div>
                    </div>
                    
                </div>


                <div className="container py-4 px-4 mx-auto relative text-sm ">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center flex-shrink-0">
                            <img className='h-10 w-10 mr-2' src={logo} alt="logo" />
                            <span className="text-xl tracking-tight">Mahak Tours</span>
                        </div>
                        <ul className="hidden lg:flex ml-14 space-x-12">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="hidden lg:flex justify-center space-x-12 items-center">
                            <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Book Now</a>
                        </div>
                        <div className="lg:hidden md:flex flex-col justify-end">
                            <button onClick={toggleMenu}>
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                    {isOpen && (
                        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                            <ul>
                                {navItems.map((item, index) => (
                                    <li key={index} className="py-4">
                                        <a href={item.href}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex space-x-6">
                                <a href="#" className="py-2 px-3 border rounded-md" >Sign In</a>
                                <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">Booking Now</a>
                            </div>
                        </div>
                    )}
                </div>

            </nav>
        </>
    )
}

export default Navbar