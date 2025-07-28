// Coded by Umar Mahmud Ahmad with junior dev support from Gemini & ChatGPT 
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 20 20">
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
);

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const currentCount = parseInt(localStorage.getItem('visitorCount') || '0', 10);
    const newCount = currentCount + 1;
    localStorage.setItem('visitorCount', newCount.toString());
    setCount(newCount);
  }, []);

  return (
    <div className="d-flex align-items-center bg-secondary text-white px-3 py-1 rounded-pill small">
      <span className="fw-bold me-2">Visitors:</span>
      <span className="font-monospace">{count.toLocaleString()}</span>
    </div>
  );
};

const Header = () => {
  const getNavLinkClass = ({ isActive }) =>
    `nav-link ${isActive ? 'active text-warning bg-dark rounded px-2' : 'text-light'}`;

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "About & Contact", path: "/about-contact" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <header className="bg-dark text-white position-sticky top-0 z-3 shadow">
      <div className="position-relative" style={{ height: '200px', backgroundImage: 'url(/assets/imgs/multiple_festivals/festivals.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <h1 className="display-4 fw-bold text-center">Moonlight Events</h1>
        </div>
      </div>

      <nav className="container py-3">
        <div className="d-flex justify-content-between align-items-center">
          <NavLink to="/" className="d-flex align-items-center text-decoration-none text-light">
            <MoonIcon />
            <span className="fw-bold fs-4 ms-2 d-none d-sm-block">Moonlight Events</span>
          </NavLink>

          <div className="d-none d-md-flex gap-3">
            {menuItems.map((item) => (
              <NavLink key={item.name} to={item.path} className={getNavLinkClass}>
                {item.name}
              </NavLink>
            ))}
          </div>

          <VisitorCounter />
        </div>
      </nav>
    </header>
  );
};

export default Header;
