
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const MoonIcon= () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-primary" viewBox="0 0 20 20" fill="currentColor">
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
);

const VisitorCounter= () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const currentCount = parseInt(localStorage.getItem('visitorCount') || '0', 10);
        const newCount = currentCount + 1;
        localStorage.setItem('visitorCount', newCount.toString());
        setCount(newCount);
    }, []);

    return (
        <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-full text-sm">
            <span className="font-bold">Visitors:</span>
            <span className="text-brand-primary font-mono">{count.toLocaleString()}</span>
        </div>
    );
};

const Header= () => {
  const navLinkClasses = "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out";
  const getNavLinkClass = ({ isActive }) =>
    `${navLinkClasses} ${isActive ? 'bg-brand-primary text-gray-900' : 'text-light-text hover:bg-gray-700 hover:text-white'}`;

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "About & Contact", path: "/about-contact" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <header className="bg-dark-bg shadow-lg font-serif top-0 z-50">
      <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: "url(/assets/imgs/multiple_festivals/festivals.png)" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl text-white font-bold tracking-wider text-center">Moonlight Events</h1>
        </div>
      </div>

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center space-x-2">
              <MoonIcon />
              <span className="font-bold text-xl hidden sm:block">Moonlight Events</span>
            </NavLink>
          </div>
          <div className="hidden md:flex items-baseline space-x-4">
            {menuItems.map((item) => (
              <NavLink key={item.name} to={item.path} className={getNavLinkClass}>
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center">
             <VisitorCounter />
          </div>
        </div>
      </nav>

    </header>
  );
};

export default Header;
// Coded by Umar Mahmud Ahmad with junior dev support from Gemini & ChatGPT 
