import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const featuredWorks = [
    {
      id: 1,
      title: 'DIGITAL BRUTALISM',
      category: 'INSTALLATION',
      year: '2024',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'CONCRETE DREAMS',
      category: 'DIGITAL ART',
      year: '2024',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'SOVIET FUTURES',
      category: 'SERIES',
      year: '2023',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        minHeight: '90vh', 
        display: 'flex', 
        alignItems: 'center',
        background: 'linear-gradient(135deg, var(--color-black) 0%, var(--color-gray-dark) 100%)'
      }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: 'var(--spacing-3xl)' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 style={{ 
                fontSize: 'clamp(2.5rem, 8vw, 6rem)',
                lineHeight: 0.9,
                marginBottom: 'var(--spacing-xl)'
              }}>
                DIGITAL
                <br />
                <span style={{ color: 'var(--color-red)' }}>BRUTALISM</span>
              </h1>
              <p style={{ 
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                marginBottom: 'var(--spacing-xl)',
                maxWidth: '500px',
                lineHeight: 1.6
              }}>
                Exploring the intersection of Soviet architectural principles and contemporary digital art. 
                Raw, uncompromising, and brutally honest.
              </p>
              <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
                <Link to="/portfolio" className="btn btn-primary">
                  VIEW WORKS <ArrowRight size={16} style={{ marginLeft: 'var(--spacing-xs)' }} />
                </Link>
                <button className="btn" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                  <Play size={16} /> WATCH REEL
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="image-container"
              style={{ 
                height: '500px',
                border: '4px solid var(--color-white)'
              }}
            >
              <img 
                src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Featured Digital Art"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="section" style={{ backgroundColor: 'var(--color-gray-dark)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center mb-xl">FEATURED WORKS</h2>
            <div className="grid grid-3">
              {featuredWorks.map((work, index) => (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card"
                  style={{ padding: 0, overflow: 'hidden' }}
                >
                  <div className="image-container" style={{ height: '250px' }}>
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
                    <h3 style={{ fontSize: '1.25rem' }}>{work.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
              <Link to="/portfolio" className="btn">
                VIEW ALL WORKS <ArrowRight size={16} style={{ marginLeft: 'var(--spacing-xs)' }} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Artist Statement */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
          >
            <h2 className="mb-xl">ARTIST STATEMENT</h2>
            <p style={{ 
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              lineHeight: 1.8,
              marginBottom: 'var(--spacing-lg)'
            }}>
              "In the digital realm, I seek to recreate the monumental presence of Soviet brutalist architecture. 
              Each pixel is placed with the same intentionality as concrete blocks, forming structures that 
              challenge our perception of space, time, and human experience."
            </p>
            <p style={{ 
              fontSize: '0.875rem',
              color: 'var(--color-gray-lighter)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              — Viktor Kozlov, Digital Artist
            </p>
            <div style={{ marginTop: 'var(--spacing-xl)' }}>
              <Link to="/about" className="btn">
                READ MORE <ArrowRight size={16} style={{ marginLeft: 'var(--spacing-xs)' }} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="section" style={{ backgroundColor: 'var(--color-gray-dark)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center mb-xl">LATEST THOUGHTS</h2>
            <div className="grid grid-2">
              <div className="card">
                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    color: 'var(--color-red)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    JANUARY 15, 2025
                  </span>
                </div>
                <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>
                  THE DIGITAL CONCRETE
                </h3>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>
                  Exploring how digital materials can embody the weight and presence of physical brutalist structures...
                </p>
                <Link to="/blog/digital-concrete" className="btn" style={{ fontSize: '0.75rem', padding: 'var(--spacing-xs) var(--spacing-md)' }}>
                  READ MORE
                </Link>
              </div>
              
              <div className="card">
                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    color: 'var(--color-red)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    JANUARY 10, 2025
                  </span>
                </div>
                <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>
                  MOSCOW MEMORIES
                </h3>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>
                  How the architectural landscape of my childhood continues to influence my digital practice...
                </p>
                <Link to="/blog/moscow-memories" className="btn" style={{ fontSize: '0.75rem', padding: 'var(--spacing-xs) var(--spacing-md)' }}>
                  READ MORE
                </Link>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
              <Link to="/blog" className="btn">
                VIEW ALL POSTS <ArrowRight size={16} style={{ marginLeft: 'var(--spacing-xs)' }} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;