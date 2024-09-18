// src/components/Nav.jsx
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define links in an array of objects
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 sticky w-screen top-0 z-10 h-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <a href='https://github.com/JevonThompsonx' className="text-white font-bold">WebDevJev</a>
        {/* Desktop Links */}
        <div className="hidden sm:flex space-x-4">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `text-white hover:text-gray-400 ${isActive ? 'font-bold' : ''
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isOpen ? 'block' : 'hidden'
          } sm:hidden bg-gray-800 text-white space-y-4 p-4`}
      >
        {navLinks.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className="block hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
