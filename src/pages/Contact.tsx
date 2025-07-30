import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

declare global {
  interface Window {
    google: any;
  }
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Initialize Google Maps
    const initMap = () => {
      if (window.google && window.google.maps) {
        const map = new window.google.maps.Map(
          document.getElementById('map') as HTMLElement,
          {
            center: { lat: 55.7558, lng: 37.6176 }, // Moscow coordinates
            zoom: 15,
            styles: [
              {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                  { "saturation": -100 },
                  { "lightness": -20 }
                ]
              }
            ]
          }
        );

        new window.google.maps.Marker({
          position: { lat: 55.7558, lng: 37.6176 },
          map: map,
          title: 'Viktor Kozlov Studio'
        });

        setMapLoaded(true);
      }
    };

    // Check if Google Maps is already loaded
    if (window.google && window.google.maps) {
      initMap();
    } else {
      // Wait for Google Maps to load
      const checkGoogleMaps = setInterval(() => {
        if (window.google && window.google.maps) {
          initMap();
          clearInterval(checkGoogleMaps);
        }
      }, 100);

      // Cleanup interval after 10 seconds
      setTimeout(() => clearInterval(checkGoogleMaps), 10000);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert('Message sent successfully! I will get back to you soon.');
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
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
            <h1>CONTACT</h1>
            <p style={{ 
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Interested in collaborations, exhibitions, or commissioning digital art works? 
              Let's discuss how we can create something extraordinary together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: 'var(--spacing-3xl)', alignItems: 'start' }}>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-lg">SEND MESSAGE</h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">NAME *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">EMAIL *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">SUBJECT *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">MESSAGE *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows={6}
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--spacing-xs)',
                    alignSelf: 'flex-start'
                  }}
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  {!isSubmitting && <Send size={16} />}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="mb-lg">STUDIO INFO</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
                <div className="card">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-md)' }}>
                    <Mail size={24} style={{ color: 'var(--color-red)', marginTop: '2px' }} />
                    <div>
                      <h3 style={{ marginBottom: 'var(--spacing-xs)' }}>EMAIL</h3>
                      <p style={{ color: 'var(--color-gray-lighter)' }}>viktor@kozlov.art</p>
                      <p style={{ color: 'var(--color-gray-lighter)', fontSize: '0.875rem' }}>
                        For commissions and collaborations
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-md)' }}>
                    <Phone size={24} style={{ color: 'var(--color-red)', marginTop: '2px' }} />
                    <div>
                      <h3 style={{ marginBottom: 'var(--spacing-xs)' }}>PHONE</h3>
                      <p style={{ color: 'var(--color-gray-lighter)' }}>+7 (495) 123-4567</p>
                      <p style={{ color: 'var(--color-gray-lighter)', fontSize: '0.875rem' }}>
                        Available Mon-Fri, 10:00-18:00 MSK
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-md)' }}>
                    <MapPin size={24} style={{ color: 'var(--color-red)', marginTop: '2px' }} />
                    <div>
                      <h3 style={{ marginBottom: 'var(--spacing-xs)' }}>STUDIO</h3>
                      <p style={{ color: 'var(--color-gray-lighter)' }}>
                        Artplay Design Center<br />
                        10 Nizhnyaya Syromyatnicheskaya St<br />
                        Moscow, 105120, Russia
                      </p>
                      <p style={{ color: 'var(--color-gray-lighter)', fontSize: '0.875rem' }}>
                        Visits by appointment only
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section" style={{ backgroundColor: 'var(--color-gray-dark)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center mb-xl">STUDIO LOCATION</h2>
            <div style={{ 
              height: '400px',
              border: '4px solid var(--color-white)',
              backgroundColor: 'var(--color-gray-medium)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div 
                id="map" 
                style={{ 
                  width: '100%', 
                  height: '100%',
                  display: mapLoaded ? 'block' : 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {!mapLoaded && (
                  <div style={{ 
                    textAlign: 'center',
                    color: 'var(--color-gray-lighter)'
                  }}>
                    <MapPin size={48} style={{ marginBottom: 'var(--spacing-md)' }} />
                    <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      LOADING MAP...
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div style={{ 
              marginTop: 'var(--spacing-lg)',
              textAlign: 'center',
              fontSize: '0.875rem',
              color: 'var(--color-gray-lighter)'
            }}>
              <p>
                Located in Moscow's creative district, the studio is housed in a converted 
                industrial space that reflects the brutalist aesthetic of my work.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Studio Hours */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
            style={{ maxWidth: '600px', margin: '0 auto' }}
          >
            <h2 className="mb-lg">STUDIO HOURS</h2>
            <div className="grid grid-2" style={{ gap: 'var(--spacing-lg)' }}>
              <div>
                <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>WEEKDAYS</h3>
                <p style={{ color: 'var(--color-gray-lighter)' }}>
                  Monday - Friday<br />
                  10:00 - 18:00 MSK
                </p>
              </div>
              <div>
                <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>WEEKEND</h3>
                <p style={{ color: 'var(--color-gray-lighter)' }}>
                  Saturday: 12:00 - 16:00<br />
                  Sunday: By Appointment
                </p>
              </div>
            </div>
            <p style={{ 
              marginTop: 'var(--spacing-lg)',
              fontSize: '0.875rem',
              color: 'var(--color-gray-lighter)',
              fontStyle: 'italic'
            }}>
              Please schedule visits in advance. The studio also serves as an active workspace 
              for large-scale digital installations.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;