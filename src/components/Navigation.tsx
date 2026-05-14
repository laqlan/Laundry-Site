import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import whatsappBubble from '../../media/whatsapp-bubble.png';
import viberBubble from '../../media/viber-bubble.png';

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/laundry', label: 'Laundry Services' },
    { path: '/cleaning', label: 'Property Cleaning' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Greek meander border — 20×20 tile, 2px stroke, 2px gap, single-channel spiral */}
      <div style={{ height: '20px', backgroundColor: '#1199B6', overflow: 'hidden' }}>
        <svg width="100%" height="20" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
          <defs>
            <pattern id="greek-key" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path
                d="M 0,9 L 2,9 L 2,1 L 18,1 L 18,17 L 6,17 L 6,5 L 14,5 L 14,13 L 10,13 L 10,9 L 20,9"
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
              />
            </pattern>
          </defs>
          <rect width="100%" height="20" fill="url(#greek-key)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://static.wixstatic.com/media/bc3598_4ef75b3ee4364af5b2f09e53862ffe0e~mv2.png/v1/fill/w_490,h_496,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Laundromatgreece.png" 
              alt="LaundromatGreece Logo" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Bubbles */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="tel:+306931169958"
              className="flex items-center space-x-2 px-4 py-2 rounded-full text-white font-semibold text-sm shadow-md hover:opacity-90 hover:shadow-lg transition-all duration-200 bg-gradient-to-r from-blue-500 to-blue-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/>
              </svg>
              <span>Call</span>
            </a>
            <a
              href="https://wa.me/306931169958"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-full text-white font-semibold text-sm shadow-md hover:opacity-90 hover:shadow-lg transition-all duration-200"
              style={{ backgroundColor: '#25D366' }}
            >
              <img src={whatsappBubble} alt="" className="h-7 w-7" />
              <span>WhatsApp</span>
            </a>
            <a
              href="viber://chat?number=%2B306931169958"
              className="flex items-center space-x-2 px-4 py-2 rounded-full text-white font-semibold text-sm shadow-md hover:opacity-90 hover:shadow-lg transition-all duration-200"
              style={{ backgroundColor: '#7360F2' }}
            >
              <img src={viberBubble} alt="" className="h-7 w-7 object-contain" />
              <span>Viber</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-center space-x-2 px-3 py-2">
              <a
                href="tel:+306931169958"
                className="flex items-center space-x-2 px-4 py-2 rounded-full text-white font-semibold text-sm shadow-md bg-gradient-to-r from-blue-500 to-blue-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/>
                </svg>
                <span>Call</span>
              </a>
              <a
                href="https://wa.me/306931169958"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 rounded-full text-white font-semibold text-sm shadow-md"
                style={{ backgroundColor: '#25D366' }}
              >
                <img src={whatsappBubble} alt="" className="h-7 w-7" />
                <span>WhatsApp</span>
              </a>
              <a
                href="viber://chat?number=%2B306931169958"
                className="flex items-center space-x-2 px-4 py-2 rounded-full text-white font-semibold text-sm shadow-md"
                style={{ backgroundColor: '#7360F2' }}
              >
                <img src={viberBubble} alt="" className="h-7 w-7 object-contain" />
                <span>Viber</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
