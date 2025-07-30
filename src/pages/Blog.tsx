import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Calendar, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      slug: 'digital-concrete',
      title: 'The Digital Concrete: Materiality in Virtual Space',
      excerpt: 'Exploring how digital materials can embody the weight and presence of physical brutalist structures. In this essay, I examine the relationship between pixels and concrete blocks.',
      date: '2025-01-15',
      category: 'THEORY',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      slug: 'moscow-memories',
      title: 'Moscow Memories: Architecture as Autobiography',
      excerpt: 'How the architectural landscape of my childhood continues to influence my digital practice. A personal reflection on growing up among brutalist monuments.',
      date: '2025-01-10',
      category: 'PERSONAL',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      slug: 'soviet-aesthetics-digital-age',
      title: 'Soviet Aesthetics in the Digital Age',
      excerpt: 'An analysis of how Soviet design principles translate to contemporary digital art. From constructivism to contemporary screen-based works.',
      date: '2025-01-05',
      category: 'ANALYSIS',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      slug: 'installation-process',
      title: 'Behind the Installation: Digital Brutalism Process',
      excerpt: 'A detailed look at the creation process of my latest installation work. From concept to execution, exploring the technical and conceptual challenges.',
      date: '2024-12-28',
      category: 'PROCESS',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      slug: 'brutalism-digital-future',
      title: 'Brutalism and the Digital Future',
      excerpt: 'What can brutalist architecture teach us about designing for digital spaces? Exploring permanence, functionality, and honesty in virtual environments.',
      date: '2024-12-20',
      category: 'THEORY',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      slug: 'concrete-dreams-exhibition',
      title: 'Concrete Dreams: Exhibition Reflection',
      excerpt: 'Reflecting on my recent exhibition at the Garage Museum. The challenges and rewards of translating digital work into physical gallery space.',
      date: '2024-12-15',
      category: 'EXHIBITION',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
            <h1>THOUGHTS & PROCESS</h1>
            <p style={{ 
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Essays, reflections, and insights on digital art, brutalist architecture, 
              and the intersection of Soviet aesthetics with contemporary practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search */}
      <section style={{ 
        backgroundColor: 'var(--color-gray-dark)',
        padding: 'var(--spacing-lg) 0',
        borderTop: '2px solid var(--color-gray-medium)',
        borderBottom: '2px solid var(--color-gray-medium)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '400px', margin: '0 auto', position: 'relative' }}>
            <Search 
              size={20} 
              style={{ 
                position: 'absolute',
                left: 'var(--spacing-sm)',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--color-gray-lighter)'
              }} 
            />
            <input
              type="text"
              placeholder="SEARCH POSTS..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input"
              style={{ 
                paddingLeft: 'calc(var(--spacing-sm) + 20px + var(--spacing-xs))',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            />
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
                style={{ padding: 0, overflow: 'hidden' }}
              >
                <div className="grid grid-2" style={{ gap: 0, alignItems: 'stretch' }}>
                  <div className="image-container" style={{ height: '300px' }}>
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div style={{ 
                    padding: 'var(--spacing-xl)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <div>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        marginBottom: 'var(--spacing-md)'
                      }}>
                        <span style={{ 
                          fontSize: '0.75rem', 
                          color: 'var(--color-red)',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em'
                        }}>
                          {post.category}
                        </span>
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: 'var(--spacing-xs)',
                          fontSize: '0.75rem',
                          color: 'var(--color-gray-lighter)'
                        }}>
                          <Calendar size={14} />
                          {formatDate(post.date)}
                        </div>
                      </div>
                      <h2 style={{ 
                        fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                        marginBottom: 'var(--spacing-md)'
                      }}>
                        {post.title}
                      </h2>
                      <p style={{ 
                        fontSize: '0.875rem',
                        lineHeight: 1.6,
                        color: 'var(--color-gray-lighter)',
                        marginBottom: 'var(--spacing-md)'
                      }}>
                        {post.excerpt}
                      </p>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center'
                    }}>
                      <span style={{ 
                        fontSize: '0.75rem',
                        color: 'var(--color-gray-lighter)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        {post.readTime}
                      </span>
                      <Link 
                        to={`/blog/${post.slug}`} 
                        className="btn"
                        style={{ 
                          fontSize: '0.75rem',
                          padding: 'var(--spacing-xs) var(--spacing-md)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--spacing-xs)'
                        }}
                      >
                        READ MORE <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
              style={{ padding: 'var(--spacing-3xl) 0' }}
            >
              <p style={{ fontSize: '1.25rem', color: 'var(--color-gray-lighter)' }}>
                NO POSTS FOUND MATCHING YOUR SEARCH
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section" style={{ backgroundColor: 'var(--color-gray-dark)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
            style={{ maxWidth: '600px', margin: '0 auto' }}
          >
            <h2 className="mb-md">STAY UPDATED</h2>
            <p style={{ 
              fontSize: '1rem',
              lineHeight: 1.6,
              marginBottom: 'var(--spacing-xl)',
              color: 'var(--color-gray-lighter)'
            }}>
              Subscribe to receive notifications about new posts, exhibitions, and digital art insights.
            </p>
            <form style={{ 
              display: 'flex', 
              gap: 'var(--spacing-sm)',
              maxWidth: '400px',
              margin: '0 auto'
            }}>
              <input
                type="email"
                placeholder="YOUR EMAIL ADDRESS"
                className="form-input"
                style={{ 
                  flex: 1,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              />
              <button type="submit" className="btn btn-primary">
                SUBSCRIBE
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;