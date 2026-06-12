import React from 'react';

export default function Navbar() {
  return (
    <div style={{
      position: 'fixed',
      top: '30px',
      left: '0',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      zIndex: 100,
      pointerEvents: 'none',
    }}>
      <nav style={{
        pointerEvents: 'auto',
        width: '90%',
        maxWidth: '1000px', /* Made wider */
        background: 'rgba(10, 10, 12, 0.8)', /* Deeper glass */
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '50px',
        padding: '16px 40px', /* Taller and wider padding */
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
      }}>
        
        {/* Left: Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: '1.3rem',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 700,
            letterSpacing: '-0.5px'
        }}>
          Ashmit Cajla.
        </div>

        {/* Center: Links */}
        <div style={{ display: 'flex', gap: '40px' }}>
          {['Experience', 'Projects'].map((name) => (
            <a
              key={name}
              href={`#${name.toLowerCase()}`}
              style={{
                textDecoration: 'none',
                color: '#a0a0a0',
                fontFamily: '"Manrope", sans-serif',
                fontSize: '0.95rem',
                fontWeight: 500,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => e.target.style.color = '#fff'}
              onMouseLeave={(e) => e.target.style.color = '#a0a0a0'}
            >
              {name}
            </a>
          ))}
        </div>

        {/* Right: Normal CTA Button */}
        <a 
          href="#contact"
          style={{
            textDecoration: 'none',
            background: '#ffffff',
            color: '#050505',
            padding: '10px 24px',
            borderRadius: '50px',
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: '0.9rem',
            fontWeight: 600,
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(255,255,255,0.1)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(255,255,255,0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(255,255,255,0.1)';
          }}
        >
          Let's Connect
        </a>

      </nav>
    </div>
  );
}