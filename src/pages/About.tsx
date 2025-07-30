import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, MapPin, Users } from 'lucide-react';

const About: React.FC = () => {
  const exhibitions = [
    {
      year: '2024',
      title: 'Digital Brutalism: New Forms',
      venue: 'Moscow Museum of Modern Art',
      type: 'Solo Exhibition'
    },
    {
      year: '2023',
      title: 'Concrete Dreams',
      venue: 'Garage Museum of Contemporary Art',
      type: 'Group Exhibition'
    },
    {
      year: '2023',
      title: 'Soviet Futures',
      venue: 'Tretyakov Gallery',
      type: 'Solo Exhibition'
    },
    {
      year: '2022',
      title: 'Digital Architecture',
      venue: 'Multimedia Art Museum',
      type: 'Group Exhibition'
    }
  ];

  const awards = [
    {
      year: '2024',
      title: 'Digital Art Innovation Award',
      organization: 'Moscow Art Foundation'
    },
    {
      year: '2023',
      title: 'Best Contemporary Installation',
      organization: 'Russian Digital Arts Society'
    },
    {
      year: '2022',
      title: 'Emerging Artist Grant',
      organization: 'Ministry of Culture'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: 'var(--spacing-3xl)' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 style={{ marginBottom: 'var(--spacing-lg)' }}>ABOUT THE ARTIST</h1>
              <p style={{ 
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                lineHeight: 1.8,
                marginBottom: 'var(--spacing-lg)'
              }}>
                Viktor Kozlov is a Moscow-based digital artist whose work explores the intersection 
                of Soviet brutalist architecture and contemporary digital media. Born in 1985, 
                Kozlov grew up surrounded by the monumental concrete structures that define much 
                of Moscow's architectural landscape.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                  <MapPin size={20} style={{ color: 'var(--color-red)' }} />
                  <span>Moscow, Russia</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                  <Calendar size={20} style={{ color: 'var(--color-red)' }} />
                  <span>Born 1985</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                  <Users size={20} style={{ color: 'var(--color-red)' }} />
                  <span>Digital Artist & Installation Designer</span>
                </div>
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
                alt="Viktor Kozlov Portrait"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Artist Statement */}
      <section className="section" style={{ backgroundColor: 'var(--color-gray-dark)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            <h2 className="text-center mb-xl">ARTIST STATEMENT</h2>
            <div style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8 }}>
              <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                "My work is rooted in the monumental architecture of the Soviet era—structures that 
                were built to last forever, to embody ideological permanence through raw concrete 
                and uncompromising form. In the digital realm, I seek to recreate this sense of 
                monumentality, this weight of history and intention."
              </p>
              <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                "Each digital piece begins with the same principles that guided brutalist architects: 
                honesty of materials, functional beauty, and the rejection of unnecessary ornamentation. 
                In my case, the 'material' is code, pixels, and light—but the philosophy remains unchanged."
              </p>
              <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                "I am particularly interested in how digital art can carry the emotional weight of 
                physical architecture. How can a screen-based work feel as imposing as a concrete 
                tower? How can virtual space evoke the same sense of awe and contemplation as walking 
                through a brutalist complex?"
              </p>
              <p>
                "Through my installations and digital works, I aim to bridge the gap between the 
                utopian aspirations of Soviet architecture and the limitless possibilities of 
                digital space. Both represent attempts to reshape reality according to human vision—
                one through concrete, the other through code."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Exhibitions */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center mb-xl">EXHIBITIONS</h2>
            <div className="grid grid-2">
              {exhibitions.map((exhibition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start',
                    marginBottom: 'var(--spacing-sm)'
                  }}>
                    <span style={{ 
                      fontSize: '2rem', 
                      fontWeight: 800,
                      color: 'var(--color-red)',
                      lineHeight: 1
                    }}>
                      {exhibition.year}
                    </span>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      color: 'var(--color-gray-lighter)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em'
                    }}>
                      {exhibition.type}
                    </span>
                  </div>
                  <h3 style={{ marginBottom: 'var(--spacing-xs)' }}>{exhibition.title}</h3>
                  <p style={{ 
                    color: 'var(--color-gray-lighter)',
                    fontSize: '0.875rem'
                  }}>
                    {exhibition.venue}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Awards */}
      <section className="section" style={{ backgroundColor: 'var(--color-gray-dark)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center mb-xl">AWARDS & RECOGNITION</h2>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--spacing-md)',
                    padding: 'var(--spacing-lg) 0',
                    borderBottom: index < awards.length - 1 ? '1px solid var(--color-gray-medium)' : 'none'
                  }}
                >
                  <Award size={24} style={{ color: 'var(--color-red)', marginTop: '2px' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'flex-start',
                      marginBottom: 'var(--spacing-xs)'
                    }}>
                      <h3 style={{ fontSize: '1.125rem' }}>{award.title}</h3>
                      <span style={{ 
                        fontSize: '0.875rem', 
                        color: 'var(--color-red)',
                        fontWeight: 700
                      }}>
                        {award.year}
                      </span>
                    </div>
                    <p style={{ 
                      color: 'var(--color-gray-lighter)',
                      fontSize: '0.875rem'
                    }}>
                      {award.organization}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education & Background */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-2"
          >
            <div>
              <h2 className="mb-lg">EDUCATION</h2>
              <div className="card">
                <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>
                  MASTER OF FINE ARTS
                </h3>
                <p style={{ 
                  color: 'var(--color-gray-lighter)',
                  marginBottom: 'var(--spacing-sm)'
                }}>
                  Moscow State Academic Art Institute
                </p>
                <p style={{ 
                  fontSize: '0.875rem',
                  color: 'var(--color-red)',
                  fontWeight: 700
                }}>
                  2007-2012
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="mb-lg">STUDIO PRACTICE</h2>
              <div className="card">
                <p style={{ 
                  fontSize: '0.875rem',
                  lineHeight: 1.6,
                  marginBottom: 'var(--spacing-md)'
                }}>
                  Working from a converted industrial space in Moscow's Artplay district, 
                  Kozlov's studio combines traditional art-making tools with cutting-edge 
                  digital technology.
                </p>
                <p style={{ 
                  fontSize: '0.875rem',
                  lineHeight: 1.6
                }}>
                  The studio serves as both a creative laboratory and a space for 
                  large-scale digital installations, equipped with projection mapping 
                  systems and immersive audio equipment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;