import React from 'react';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ 
      width: '100%',
      maxWidth: '1200px', /* Increased max-width */
      margin: '0 auto',
      minHeight: '85vh', /* Increased vertical presence */
      padding: '180px 40px 100px 40px', /* More breathing room */
      display: 'grid',
      gridTemplateColumns: '1.2fr 0.8fr', /* Give text more weight */
      gap: '100px',
      alignItems: 'center',
      pointerEvents: 'none' 
    }}>
      
      {/* Left Column: Copy & Buttons */}
      <div style={{ pointerEvents: 'auto' }}>
        <div style={{ 
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: '0.9rem',
          color: '#888',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          marginBottom: '25px',
        }}>
          Researching & Architecting
        </div>

        <h1 style={{ 
          fontFamily: '"Space Grotesk", sans-serif', 
          fontSize: 'clamp(4rem, 9vw, 6.5rem)', /* Even bigger text */
          fontWeight: 700,
          color: '#ffffff', 
          letterSpacing: '-3px',
          lineHeight: '0.95',
          margin: '0 0 40px 0'
        }}>
          Ashmit Cajla.
        </h1>
        
        <div style={{
          fontSize: '1.25rem',
          color: '#ededed',
          fontFamily: '"Manrope", sans-serif',
          fontWeight: 300,
          marginBottom: '25px',
          lineHeight: '1.7',
          maxWidth: '550px'
        }}>
          I build AI-first systems and autonomous architectures that solve complex, real-world problems. Let's shape the future of technology together.
        </div>

        <div style={{
          fontSize: '1.1rem',
          color: '#888888',
          fontFamily: '"Manrope", sans-serif',
          fontWeight: 400,
          marginBottom: '60px',
          lineHeight: '1.7',
          maxWidth: '550px'
        }}>
          Architecting institutional platforms at TIET and leading SAIC. I build pipelines that turn bold ideas into measurable impact.
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <button style={{
            background: '#ffffff',
            color: '#050505',
            border: 'none',
            padding: '18px 40px',
            borderRadius: '8px',
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
            fontSize: '1rem',
            letterSpacing: '1px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          onClick={scrollToProjects}
          >
            VIEW WORK →
          </button>

          <button style={{
            background: 'transparent',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '18px 40px',
            borderRadius: '8px',
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 600,
            fontSize: '1rem',
            letterSpacing: '1px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.borderColor = '#ffffff';
            e.target.style.background = 'rgba(255,255,255,0.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            e.target.style.background = 'transparent';
          }}
          onClick={scrollToContact}
          >
            LET'S CONNECT
          </button>
        </div>
      </div>

      {/* Right Column: Aesthetic Framed Image */}
      <div style={{ pointerEvents: 'auto', display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
          
          {/* Decorative Wireframe Corner Brackets */}
          <div style={{ position: 'absolute', top: '-15px', left: '-15px', width: '40px', height: '40px', borderTop: '2px solid #00f3ff', borderLeft: '2px solid #00f3ff', zIndex: 2 }}></div>
          <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', width: '40px', height: '40px', borderBottom: '2px solid #00f3ff', borderRight: '2px solid #00f3ff', zIndex: 2 }}></div>

          {/* Main Photo Frame */}
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            padding: '10px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}>
            <img 
              src="src/assets/IMG_6885.jpg" 
              alt="Ashmit Cajla" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                borderRadius: '6px',
                display: 'block',
                filter: 'grayscale(10%) contrast(1.05)' /* Slight editorial polish */
              }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}