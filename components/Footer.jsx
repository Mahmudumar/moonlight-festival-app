
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Ticker = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const [location, setLocation] = useState('Fetching location...');

    useEffect(() => {
        const timer = setInterval(() => setDateTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    // In a real app, you'd use a reverse geocoding service here.
                    // For this demo, we'll just show coordinates.
                    setLocation(`Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`);
                },
                () => {
                    setLocation('Location access denied.');
                }
            );
        } else {
            setLocation('Geolocation not supported.');
        }
    }, []);

    const tickerContent = `Current Time: ${dateTime.toLocaleTimeString()} | Date: ${dateTime.toLocaleDateString()} | Location: ${location}`;

    return (
        <div className="bg-gray-800 text-gray-300 py-2 overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-ticker">
                <span className="px-8">{tickerContent}</span>
                <span className="px-8">{tickerContent}</span>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="bg-dark-bg text-gray-400 font-sans">
            <Ticker />
            <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h3 className="font-bold text-white text-lg mb-2">Moonlight Events</h3>
                        <p className="text-sm">Celebrating cultural diversity through festivals worldwide.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-lg mb-2">Quick Links</h3>
                        <ul className="space-y-1">
                            <li><Link to="/" className="hover:text-brand-primary transition-colors">Home</Link></li>
                            <li><Link to="/gallery" className="hover:text-brand-primary transition-colors">Gallery</Link></li>
                            <li><Link to="/faq" className="hover:text-brand-primary transition-colors">FAQ</Link></li>
                            <li><Link to="/sitemap" className="hover:text-brand-primary transition-colors">Sitemap</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-lg mb-2">Contact Us</h3>
                        <Link to="/about-contact" className="hover:text-brand-primary transition-colors">eprojectgroup2@gmail.com</Link>
                        <p className="text-sm">3rd floor Aptech, Wuse II, Abuja</p>

                    </div>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Moonlight Events. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};
// Coded by Umar Mahmud Ahmad with junior dev support from Gemini & ChatGPT 

export default Footer;
