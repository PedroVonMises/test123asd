import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'HOME', path: '/' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'ABOUT', path: '/about' },
    { name: 'BLOG', path: '/blog' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={{ 
      backgroundColor: 'var(--color-black)', 
      borderBottom: '2px solid var(--color-gray-medium)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: 'var(--spacing-md)' 
      }}>
        {/* Logo */}
        <Link to="/" style={{ 
          fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', 
          fontWeight: 800, 
          textTransform: 'uppercase',
          letterSpacing: '0.1em'
        }}>
          VIKTOR <span style={{ color: 'var(--color-red)' }}>KOZLOV</span>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ 
            display: 'flex', 
            listStyle: 'none', 
            gap: 'var(--spacing-xl)' 
          }}>
            {navigation.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  style={{ fontSize: '0.875rem' }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-white)',
            cursor: 'pointer',
            padding: 'var(--spacing-xs)',
            display: 'block'
          }}
          className="mobile-menu-btn"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: 'var(--color-gray-dark)',
              borderTop: '2px solid var(--color-gray-medium)',
              overflow: 'hidden'
            }}
            className="mobile-nav"
          >
            <div className="container">
              <ul style={{ 
                listStyle: 'none', 
                padding: 'var(--spacing-md) 0' 
              }}>
                {navigation.map((item, index) => (
                  <motion.li
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    style={{ marginBottom: 'var(--spacing-sm)' }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                      style={{ 
                        display: 'block',
                        padding: 'var(--spacing-sm) 0',
                        fontSize: '1rem'
                      }}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (min-width: 769px) {
          .desktop-nav {
            display: block !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        
        @media (max-width: 768px) {
          .mobile-nav {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;