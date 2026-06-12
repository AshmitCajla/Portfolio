import React from 'react';
// 1. IMPORT THE IMAGE HERE
import profileImg from '../assets/IMG_6885.jpg';

export default function Hero() {
  const scrollToProjects = () => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .hero-grid { 
            grid-template-columns: 1fr !important; 
            padding: 120px 20px 40px 20px !important; 
            gap: 60px !important; 
            text-align: center;
          }
          .hero-btn-group { justify-content: center !important; }
          .hero-text { margin: 0 auto 25px auto !important; }
        }
      `}</style>

      <div className="hero-grid" style={{ 
        width: '100%', maxWidth: '1200px', margin: '0 auto', minHeight: '85vh',
        padding: '130px 40px 60px 40px', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', 
        gap: '100px', alignItems: 'center', pointerEvents: 'none' 
      }}>
        
        {/* Left Column: Copy & Buttons */}
        <div style={{ pointerEvents: 'auto' }}>
          <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.9rem', color: '#888', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '25px' }}>
            Researching & Architecting
          </div>

          <h1 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: 'clamp(3rem, 9vw, 6.5rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-2px', lineHeight: '1.05', margin: '0 0 40px 0' }}>
            Ashmit Cajla.
          </h1>
          
          <div className="hero-text" style={{ fontSize: '1.25rem', color: '#ededed', fontFamily: '"Manrope", sans-serif', fontWeight: 300, marginBottom: '25px', lineHeight: '1.7', maxWidth: '550px' }}>
            I build AI-first systems and autonomous architectures that solve complex, real-world problems. Let's shape the future of technology together.
          </div>

          <div className="hero-text" style={{ fontSize: '1.1rem', color: '#888888', fontFamily: '"Manrope", sans-serif', fontWeight: 400, marginBottom: '60px', lineHeight: '1.7', maxWidth: '550px' }}>
            Architecting institutional platforms at TIET and leading SAIC. I build pipelines that turn bold ideas into measurable impact.
          </div>

          <div className="hero-btn-group" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <button onClick={scrollToProjects} style={{ background: '#ffffff', color: '#050505', border: 'none', padding: '16px 36px', borderRadius: '8px', fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: '1rem', letterSpacing: '1px', cursor: 'pointer', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
              VIEW WORK →
            </button>
            <button onClick={scrollToContact} style={{ background: 'transparent', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.2)', padding: '16px 36px', borderRadius: '8px', fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, fontSize: '1rem', letterSpacing: '1px', cursor: 'pointer', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.target.style.borderColor = '#ffffff'; e.target.style.background = 'rgba(255,255,255,0.05)'; }} onMouseLeave={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'; e.target.style.background = 'transparent'; }}>
              LET'S CONNECT ↗
            </button>
          </div>
        </div>

        {/* Right Column: Aesthetic Framed Image */}
        <div style={{ pointerEvents: 'auto', display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
            <div style={{ position: 'absolute', top: '-15px', left: '-15px', width: '40px', height: '40px', borderTop: '2px solid #00f3ff', borderLeft: '2px solid #00f3ff', zIndex: 2 }}></div>
            <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', width: '40px', height: '40px', borderBottom: '2px solid #00f3ff', borderRight: '2px solid #00f3ff', zIndex: 2 }}></div>
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '10px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
              {/* 2. USE THE IMPORTED VARIABLE HERE INSTEAD OF THE STRING */}
              <img src={profileImg} alt="Ashmit Cajla" style={{ width: '100%', height: 'auto', borderRadius: '6px', display: 'block', filter: 'grayscale(10%) contrast(1.05)' }} />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}