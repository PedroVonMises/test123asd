import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--color-gray-dark)',
      borderTop: '2px solid var(--color-gray-medium)',
      padding: 'var(--spacing-xl) 0'
    }}>
      <div className="container">
        <div className="grid grid-3" style={{ alignItems: 'start' }}>
          {/* Contact Info */}
          <div>
            <h3 style={{ marginBottom: 'var(--spacing-md)' }}>CONTACT</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                <Mail size={16} />
                <span style={{ fontSize: '0.875rem' }}>viktor@kozlov.art</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                <Phone size={16} />
                <span style={{ fontSize: '0.875rem' }}>+7 (495) 123-4567</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                <MapPin size={16} />
                <span style={{ fontSize: '0.875rem' }}>Moscow, Russia</span>
              </div>
            </div>
          </div>

          {/* Studio Hours */}
          <div>
            <h3 style={{ marginBottom: 'var(--spacing-md)' }}>STUDIO HOURS</h3>
            <div style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
              <p>Monday - Friday: 10:00 - 18:00</p>
              <p>Saturday: 12:00 - 16:00</p>
              <p>Sunday: By Appointment</p>
            </div>
          </div>

          {/* Copyright */}
          <div>
            <h3 style={{ marginBottom: 'var(--spacing-md)' }}>DIGITAL ART</h3>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: 'var(--spacing-md)' }}>
              Exploring the intersection of technology and human experience through digital media.
            </p>
            <p style={{ 
              fontSize: '0.75rem', 
              color: 'var(--color-gray-lighter)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              © 2025 Viktor Kozlov. All Rights Reserved.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          marginTop: 'var(--spacing-xl)',
          paddingTop: 'var(--spacing-lg)',
          borderTop: '1px solid var(--color-gray-medium)',
          textAlign: 'center'
        }}>
          <p style={{ 
            fontSize: '0.75rem', 
            color: 'var(--color-gray-lighter)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            BRUTALIST DIGITAL AESTHETICS • MOSCOW STUDIO • EST. 2020
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;