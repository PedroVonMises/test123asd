import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Mock blog post data - in a real app, this would come from an API or CMS
  const blogPosts: { [key: string]: any } = {
    'digital-concrete': {
      title: 'The Digital Concrete: Materiality in Virtual Space',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'THEORY',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `
        <p>In the realm of digital art, we often speak of "virtual materials" as if they were somehow less real than their physical counterparts. But what if we approached digital media with the same reverence and understanding that brutalist architects brought to concrete?</p>

        <h2>The Weight of Pixels</h2>
        <p>Every pixel in my digital works carries the same intentionality as every grain of sand in a concrete mix. When I compose a digital piece, I'm not simply arranging colored dots on a screen—I'm building with light itself, creating structures that exist in the liminal space between the physical and the virtual.</p>

        <p>Consider the brutalist principle of "béton brut"—raw concrete, honest in its materiality, unashamed of its industrial origins. In digital art, our "raw material" is code, algorithms, and the fundamental building blocks of computation. Just as Le Corbusier celebrated the honesty of concrete, we must embrace the honesty of our digital materials.</p>

        <h2>Monumental Scale in Virtual Space</h2>
        <p>One of the greatest challenges in digital art is achieving the sense of monumentality that characterizes great brutalist architecture. How do you make something feel massive when it exists only on a screen? The answer lies not in literal scale, but in psychological impact.</p>

        <p>In my installation "Digital Brutalism," I use projection mapping to transform gallery spaces into virtual concrete caverns. The work doesn't simply display images of brutalist buildings—it recreates the feeling of being dwarfed by monumental architecture, of standing in the shadow of something built to outlast human memory.</p>

        <h2>The Permanence Paradox</h2>
        <p>Brutalist architecture was built with permanence in mind. These structures were meant to stand for centuries, to embody the eternal nature of the ideologies they represented. Digital art, by contrast, exists in a state of constant flux—files can be corrupted, formats become obsolete, servers fail.</p>

        <p>Yet there's something profound about this impermanence. Perhaps our digital monuments are more honest than their concrete counterparts. They acknowledge the temporary nature of all human endeavors while still striving for something transcendent.</p>

        <h2>Conclusion</h2>
        <p>As I continue to explore the intersection of brutalist principles and digital media, I'm constantly reminded that the most important element isn't the material itself—whether concrete or code—but the vision that shapes it. The brutalists understood that architecture could be a form of social sculpture, reshaping not just physical space but human consciousness itself.</p>

        <p>In the digital realm, we have the opportunity to continue this tradition, to create works that challenge, inspire, and endure—even if their existence is measured in server uptime rather than centuries.</p>
      `
    },
    'moscow-memories': {
      title: 'Moscow Memories: Architecture as Autobiography',
      date: '2025-01-10',
      readTime: '6 min read',
      category: 'PERSONAL',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `
        <p>Growing up in Moscow in the 1990s meant living among giants. The brutalist housing blocks, government buildings, and cultural centers that defined the Soviet architectural landscape weren't just buildings to me—they were the backdrop of childhood, the stage upon which my earliest memories were formed.</p>

        <h2>Concrete Playgrounds</h2>
        <p>While other children might have played in parks or suburban backyards, my playground was the vast concrete plazas between housing blocks. These spaces, designed with utopian ideals of communal living, became sites of imagination and discovery.</p>

        <p>I remember running my hands along the rough concrete walls, fascinated by their texture, their weight, their seeming indestructibility. These buildings felt eternal, as if they had always existed and always would. There was something both comforting and overwhelming about their presence.</p>

        <h2>The Language of Concrete</h2>
        <p>As I grew older, I began to understand that these structures were speaking a language—a visual vocabulary of power, ideology, and aspiration. The repetitive windows, the massive concrete panels, the bold geometric forms—all of these elements were part of a larger conversation about how society should be organized, how people should live.</p>

        <p>This realization was formative for my artistic practice. I learned that architecture isn't just about shelter or function—it's about communication. Every design decision carries meaning, every material choice makes a statement.</p>

        <h2>Digital Archaeology</h2>
        <p>Today, many of these buildings are being demolished or renovated beyond recognition. The Moscow of my childhood is disappearing, replaced by glass towers and shopping centers. This sense of loss drives much of my current work.</p>

        <p>Through digital art, I'm creating a kind of archaeological record—not just of how these buildings looked, but of how they felt, how they shaped the people who lived among them. My digital reconstructions aren't historically accurate in the traditional sense, but they capture something more elusive: the emotional truth of these spaces.</p>

        <h2>Memory as Material</h2>
        <p>In my recent series "Soviet Futures," I use childhood memories as raw material, processing them through digital filters and algorithms to create new forms. The resulting works are neither purely documentary nor entirely abstract—they exist in the space between memory and imagination, between the past and the future.</p>

        <p>This approach reflects my belief that the most powerful art comes from personal experience transformed through universal themes. The concrete blocks of my childhood become metaphors for permanence and change, for the weight of history and the lightness of digital possibility.</p>
      `
    }
  };

  const post = blogPosts[slug || ''] || blogPosts['digital-concrete'];

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
          >
            <Link 
              to="/blog" 
              style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--spacing-xs)',
                marginBottom: 'var(--spacing-xl)',
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--color-gray-lighter)'
              }}
            >
              <ArrowLeft size={16} /> BACK TO BLOG
            </Link>
            
            <div style={{ maxWidth: '800px' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 'var(--spacing-md)',
                marginBottom: 'var(--spacing-md)',
                flexWrap: 'wrap'
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
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 'var(--spacing-xs)',
                  fontSize: '0.75rem',
                  color: 'var(--color-gray-lighter)'
                }}>
                  <Clock size={14} />
                  {post.readTime}
                </div>
              </div>
              
              <h1 style={{ 
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                lineHeight: 1.2,
                marginBottom: 'var(--spacing-xl)'
              }}>
                {post.title}
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section style={{ marginBottom: 'var(--spacing-3xl)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="image-container"
            style={{ 
              height: '400px',
              border: '4px solid var(--color-white)'
            }}
          >
            <img src={post.image} alt={post.title} />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ 
              maxWidth: '700px', 
              margin: '0 auto',
              fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
              lineHeight: 1.8
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Navigation */}
      <section className="section" style={{ backgroundColor: 'var(--color-gray-dark)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 'var(--spacing-md)'
            }}
          >
            <Link 
              to="/blog/moscow-memories"
              style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-xs)',
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              <ArrowLeft size={16} /> PREVIOUS POST
            </Link>
            
            <Link to="/blog" className="btn">
              ALL POSTS
            </Link>
            
            <Link 
              to="/blog/soviet-aesthetics-digital-age"
              style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-xs)',
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              NEXT POST <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center mb-xl">RELATED POSTS</h2>
            <div className="grid grid-2">
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div className="image-container" style={{ height: '200px' }}>
                  <img 
                    src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Soviet Aesthetics in the Digital Age"
                  />
                </div>
                <div style={{ padding: 'var(--spacing-lg)' }}>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    color: 'var(--color-red)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    ANALYSIS
                  </span>
                  <h3 style={{ margin: 'var(--spacing-sm) 0' }}>
                    Soviet Aesthetics in the Digital Age
                  </h3>
                  <Link 
                    to="/blog/soviet-aesthetics-digital-age" 
                    className="btn"
                    style={{ 
                      fontSize: '0.75rem',
                      padding: 'var(--spacing-xs) var(--spacing-md)'
                    }}
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
              
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div className="image-container" style={{ height: '200px' }}>
                  <img 
                    src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Behind the Installation"
                  />
                </div>
                <div style={{ padding: 'var(--spacing-lg)' }}>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    color: 'var(--color-red)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    PROCESS
                  </span>
                  <h3 style={{ margin: 'var(--spacing-sm) 0' }}>
                    Behind the Installation: Digital Brutalism Process
                  </h3>
                  <Link 
                    to="/blog/installation-process" 
                    className="btn"
                    style={{ 
                      fontSize: '0.75rem',
                      padding: 'var(--spacing-xs) var(--spacing-md)'
                    }}
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        article h2 {
          font-size: clamp(1.5rem, 4vw, 2rem);
          margin: var(--spacing-xl) 0 var(--spacing-md) 0;
          color: var(--color-red);
        }
        
        article p {
          margin-bottom: var(--spacing-lg);
          color: var(--color-gray-lighter);
        }
        
        article p:first-of-type {
          font-size: clamp(1.125rem, 3vw, 1.25rem);
          color: var(--color-white);
        }
      `}</style>
    </div>
  );
};

export default BlogPost;