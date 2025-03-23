import { Phone, Mail, Globe, MapPin, Heart, ArrowRight } from 'lucide-react';
import {
    companyInfo,
    ourTripsLinks,
    travelInfoLinks,
    newsletterContent,
    socialMediaLinks
} from '../constants/FooterData';

const Footer = () => {
    return (
        <footer className="bg-beige-100 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1: Company Info */}
                    <div>
                        {/* Logo */}
                        <div className="mb-6">
                            <img src={companyInfo.logoSrc} alt="mahak Tours logo" className="mb-4" />
                            <div className="flex items-center mb-6">
                                <Phone className="w-5 h-5 text-green-700 mr-2" />
                                <span className="text-xl font-medium text-green-700">{companyInfo.phone}</span>
                            </div>
                            <div className="flex items-center mb-4">
                                {companyInfo.certifications.map((cert, index) => (
                                    <img
                                        key={index}
                                        src={cert.src}
                                        alt={cert.alt}
                                        className="h-10 mr-4"
                                    />
                                ))}
                            </div>
                            <p className="text-sm text-gray-600">{companyInfo.copyright}</p>
                        </div>

                        {/* Footer links */}
                        <div>
                            {companyInfo.legalLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="block text-sm text-gray-600 hover:underline mb-2"
                                >
                                    {link.text}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Trips */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-gray-800">OUR TRIPS</h3>
                        <ul>
                            {ourTripsLinks.map((link, index) => (
                                <li key={index} className="mb-3">
                                    <a
                                        href={link.href}
                                        className="text-gray-600 hover:text-green-700 transition-colors"
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Travel Information */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-gray-800">TRAVEL INFORMATION</h3>
                        <ul>
                            {travelInfoLinks.map((link, index) => (
                                <li key={index} className="mb-3">
                                    <a
                                        href={link.href}
                                        className="text-gray-600 hover:text-green-700 transition-colors"
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-gray-800">{newsletterContent.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{newsletterContent.description}</p>

                        {/* Newsletter form */}
                        {/* <form className="mb-2">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="flex-1 px-2 py-2 border rounded"
                                />
                                <input
                                    type="email"
                                    placeholder="Your e-mail"
                                    className="flex-1 px-3 py-2 border rounded"
                                />
                            </div>
                        </form> */}

                        <p className="text-xs text-gray-600 mb-4">
                            {newsletterContent.privacyPolicy}
                            <a href={newsletterContent.privacyPolicyLink.href} className="text-green-700 underline">
                                {newsletterContent.privacyPolicyLink.text}
                            </a>.
                        </p>

                        <button className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition-colors">
                            {newsletterContent.buttonText}
                        </button>

                        {/* Social Media */}
                        <div className="mt-8">
                            <h3 className="text-lg font-bold mb-4 text-gray-800">SOCIAL MEDIA</h3>
                            <div className="flex gap-3">
                                {socialMediaLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center"
                                    >
                                        <span className="text-white">{link.icon.toUpperCase()}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;