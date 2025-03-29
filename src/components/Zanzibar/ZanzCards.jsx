import React, { useState, useEffect } from 'react';
import { FaClock, FaUser, FaCamera, FaArrowRight } from 'react-icons/fa';
import 'animate.css';

const ZanzCards = () => {
    const [cards, setCards] = useState([
        {
            id: 1,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYFfggCjjBQGNJlt1cxtqgfTXPWDsgVrMQw&s',
            title: 'Zanzibar Spice Tour',
            location: 'Zanzibar',
            duration: '30',
            participants: '30',
            photos: '1',
            actionText: 'Explore'
        },
        {
            id: 2,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrOr1UQ9imdtok86ifhlNUVFRE2lOP0gd3RQ&s',
            title: 'Safari Blue',
            location: 'Zanzibar',
            duration: '6 hours',
            participants: '30',
            photos: '3',
            actionText: 'Explore'
        },
        {
            id: 3,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlLhl5st0b6vbAev3MciKnGfIL6kXOb8u0zA&s',
            title: 'Nungwi Village Cultural Tour',
            location: 'Nungwi',
            participants: '10',
            photos: '3',
            actionText: 'Explore'
        },
        {
            id: 4,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR789aJ2G5q5MegMeTpbXh8oIt7LWFWmhNWFQ&s',
            title: 'Jozani Forest Tour',
            location: 'Zanzibar',
            participants: '30',
            photos: '2',
            actionText: 'Explore'
        },
        {
            id: 5,
            image: 'https://tanzania-specialist.com/wp-content/uploads/2023/11/11-1.jpg',
            title: 'Stone Town',
            location: 'Zanzibar',
            duration: '3 hours',
            participants: '40',
            photos: '3',
            actionText: 'Explore'
        },
        {
            id: 6,
            image: 'https://cdn.getyourguide.com/img/tour/b5e055f954c96aaa.jpeg/98.jpg',
            title: 'Dhow Sunset Cruise',
            location: 'Nungwi',
            duration: '2 hours',
            participants: '10',
            photos: '3',
            actionText: 'Explore'
        },
        {
            id: 7,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR789aJ2G5q5MegMeTpbXh8oIt7LWFWmhNWFQ&s',
            title: 'Jozani Forest Tour',
            location: 'Zanzibar',
            participants: '30',
            photos: '2',
            actionText: 'Explore'
        },
        {
            id: 8,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrOr1UQ9imdtok86ifhlNUVFRE2lOP0gd3RQ&s',
            title: 'Safaris',
            location: 'Zanzibar',
            duration: '6 hours',
            participants: '30',
            photos: '3',
            actionText: 'Explore'
        },
        {
            id: 9,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR789aJ2G5q5MegMeTpbXh8oIt7LWFWmhNWFQ&s',
            title: 'Kijichi Forest Tour',
            location: 'Zanzibar',
            participants: '30',
            photos: '2',
            actionText: 'Explore'
        },
    ]);

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMounted(true);
        }, 200);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${isMounted ? 'animate__fadeIn' : ''}`}>
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        {/* Image */}
                        <div className="relative h-64">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Stats Bar */}
                        <div className="flex justify-between px-4 py-2 bg-gray-50">
                            <div className="flex items-center text-xs text-gray-600">
                                <FaUser className="mr-1 text-gray-400" />
                                {card.participants}
                            </div>
                            {card.duration && (
                                <div className="flex items-center text-xs text-gray-600">
                                    <FaClock className="mr-1 text-gray-400" />
                                    {card.duration}
                                </div>
                            )}
                            <div className="flex items-center text-xs text-gray-600">
                                <FaCamera className="mr-1 text-gray-400" />
                                {card.photos}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-1">{card.title}</h3>
                            <div className="flex items-center text-sm text-gray-600 mb-4">
                                <FaUser className="mr-1 text-gray-400" />
                                <span className="font-medium text-orange-500">Sh0</span>
                                <span className="ml-4 flex items-center">
                                    <FaArrowRight className="text-gray-400" />
                                </span>
                                <span className="ml-2 text-orange-500">{card.actionText}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ZanzCards;