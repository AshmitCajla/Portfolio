import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import NeuralCloud from './components/NeuralCloud';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

// The sleek, fading divider component
const Divider = () => (
  <div style={{ 
    width: '100%', 
    maxWidth: '1100px', 
    margin: '0 auto', 
    height: '1px', 
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)' 
  }} />
);

function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); 
        }
      });
    }, { rootMargin: "0px 0px -50px 0px" });

    reveals.forEach(reveal => revealObserver.observe(reveal));
    return () => revealObserver.disconnect();
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100%', overflowX: 'hidden' }}>
      
      <Navbar />

      {/* --- LAYER 1: The 3D Cloud (Absolute Bottom) --- */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <NeuralCloud />
      </div>

      {/* --- LAYER 2: The AC Watermark (In front of cloud, behind content) --- */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1, 
        pointerEvents: 'none', /* Crucial: Lets you click "through" the text */
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <div style={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: '45vw',
          fontWeight: 800,
          lineHeight: 0.8,
          margin: 0,
          color: 'transparent', 
          WebkitTextStroke: '2px rgba(255, 255, 255, 0.08)', /* Slightly thicker and brighter so it pops against the black */
          letterSpacing: '-4vw',
          userSelect: 'none'
        }}>
          AC
        </div>
      </div>

      {/* --- LAYER 3: Your Actual Website Content (Absolute Top) --- */}
      <main style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '00px' }}>
        
        <section id="hero" className="reveal active">
          <Hero />
        </section>

        <Divider />
        
        <section id="experience" className="reveal">
          <Experience />
        </section>

        <Divider />

        <section id="projects" className="reveal">
          <Projects />
        </section>

        <Divider />

        <section id="contact" className="reveal">
          <Footer />
        </section>

      </main>
    </div>
  );
}

export default App;