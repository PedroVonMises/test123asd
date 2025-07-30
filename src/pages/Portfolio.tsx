import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['ALL', 'DIGITAL ART', 'INSTALLATION', 'SERIES', 'EXPERIMENTAL'];

  const works = [
    {
      id: 1,
      title: 'DIGITAL BRUTALISM',
      category: 'INSTALLATION',
      year: '2024',
      description: 'Interactive digital installation exploring Soviet architectural principles',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'CONCRETE DREAMS',
      category: 'DIGITAL ART',
      year: '2024',
      description: 'Series of digital paintings inspired by brutalist architecture',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'SOVIET FUTURES',
      category: 'SERIES',
      year: '2023',
      description: 'Reimagining Soviet space program aesthetics in digital form',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'MONOLITHIC VISIONS',
      category: 'DIGITAL ART',
      year: '2023',
      description: 'Abstract digital compositions based on concrete structures',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'URBAN DECAY',
      category: 'EXPERIMENTAL',
      year: '2023',
      description: 'Experimental digital media exploring urban deterioration',
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'CONSTRUCTIVIST ECHOES',
      category: 'INSTALLATION',
      year: '2022',
      description: 'Large-scale digital installation honoring constructivist principles',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 7,
      title: 'DIGITAL MONUMENTS',
      category: 'SERIES',
      year: '2022',
      description: 'Virtual monuments to forgotten Soviet architectural achievements',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 8,
      title: 'PIXEL CONCRETE',
      category: 'EXPERIMENTAL',
      year: '2022',
      description: 'Exploring the materiality of digital pixels as concrete blocks',
      image: 'https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const filteredWorks = activeFilter === 'ALL' 
    ? works 
    : works.filter(work => work.category === activeFilter);

  return (
    <div>
      {/* Header */}
      <section className="section" style={{ paddingBottom: 'var(--spacing-lg)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1>PORTFOLIO</h1>
            <p style={{ 
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              A collection of digital works exploring the intersection of Soviet brutalist architecture 
              and contemporary digital art practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section style={{ 
        backgroundColor: 'var(--color-gray-dark)',
        padding: 'var(--spacing-lg) 0',
        borderTop: '2px solid var(--color-gray-medium)',
        borderBottom: '2px solid var(--color-gray-medium)'
      }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--spacing-md)'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 'var(--spacing-sm)' 
            }}>
              <Filter size={20} />
              <span style={{ 
                fontWeight: 700, 
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                FILTER:
              </span>
            </div>
            
            {/* Desktop Filter */}
            <div style={{ display: 'none' }} className="desktop-filter">
              <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`btn ${activeFilter === category ? 'btn-primary' : ''}`}
                    style={{ 
                      fontSize: '0.75rem',
                      padding: 'var(--spacing-xs) var(--spacing-md)'
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Filter */}
            <div className="mobile-filter">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="btn"
                style={{ 
                  fontSize: '0.75rem',
                  padding: 'var(--spacing-xs) var(--spacing-md)'
                }}
              >
                {activeFilter} ▼
              </button>
              
              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      right: 0,
                      backgroundColor: 'var(--color-gray-dark)',
                      border: '2px solid var(--color-gray-medium)',
                      zIndex: 100,
                      minWidth: '150px'
                    }}
                  >
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setActiveFilter(category);
                          setIsFilterOpen(false);
                        }}
                        style={{
                          display: 'block',
                          width: '100%',
                          padding: 'var(--spacing-sm)',
                          background: 'none',
                          border: 'none',
                          color: activeFilter === category ? 'var(--color-red)' : 'var(--color-white)',
                          textAlign: 'left',
                          cursor: 'pointer',
                          fontSize: '0.875rem',
                          fontFamily: 'var(--font-mono)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em'
                        }}
                      >
                        {category}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Works Grid */}
      <section className="section">
        <div className="container">
          <motion.div layout className="grid grid-2" style={{ gap: 'var(--spacing-xl)' }}>
            <AnimatePresence>
              {filteredWorks.map((work, index) => (
                <motion.div
                  key={work.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card"
                  style={{ padding: 0, overflow: 'hidden' }}
                >
                  <div className="image-container" style={{ height: '300px' }}>
                    <img src={work.image} alt={work.title} />
                  </div>
                  <div style={{ padding: 'var(--spacing-lg)' }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      marginBottom: 'var(--spacing-sm)'
                    }}>
                      <span style={{ 
                        fontSize: '0.75rem', 
                        color: 'var(--color-red)',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                      }}>
                        {work.category}
                      </span>
                      <span style={{ 
                        fontSize: '0.75rem', 
                        color: 'var(--color-gray-lighter)'
                      }}>
                        {work.year}
                      </span>
                    </div>
                    <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>{work.title}</h3>
                    <p style={{ 
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                      color: 'var(--color-gray-lighter)'
                    }}>
                      {work.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredWorks.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
              style={{ padding: 'var(--spacing-3xl) 0' }}
            >
              <p style={{ fontSize: '1.25rem', color: 'var(--color-gray-lighter)' }}>
                NO WORKS FOUND IN THIS CATEGORY
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <style jsx>{`
        @media (min-width: 769px) {
          .desktop-filter {
            display: block !important;
          }
          .mobile-filter {
            display: none !important;
          }
        }
        
        @media (max-width: 768px) {
          .mobile-filter {
            position: relative;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;