import React, { useState } from 'react';

// Command rows
const TerminalLink = ({
  platform,
  handle,
  link,
  target,
  rel,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      target={target}
      rel={rel}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        background: isHovered
          ? 'rgba(255, 255, 255, 0.05)'
          : 'transparent',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        color: '#fff',
        fontFamily: '"Space Grotesk", sans-serif',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        borderRadius: isHovered ? '8px' : '0px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
        }}
      >
        <span
          style={{
            color: isHovered ? '#fff' : '#666',
            transition: 'color 0.3s ease',
          }}
        >
          ↳
        </span>
        <span
          style={{
            fontSize: '1.2rem',
            fontWeight: 500,
          }}
        >
          {platform}
        </span>
      </div>

      <span
        style={{
          fontFamily: '"Manrope", sans-serif',
          fontSize: '0.9rem',
          color: '#888',
        }}
      >
        {handle}
      </span>
    </a>
  );
};

// Fixed Chat Box with Active Formspree Integration
const TerminalChat = () => {
  const [status, setStatus] = useState('idle');

  const handleTransmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const form = e.target;
    const data = new FormData(form);

    try {
      // Sends data to Formspree silently in the background
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('sent');
        form.reset(); // Clears the inputs upon success
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('idle');
        alert("Transmission failed. Please verify your connection.");
      }
    } catch (error) {
      setStatus('idle');
      alert("Network error. Transmission failed.");
    }
  };

  return (
    <form 
      onSubmit={handleTransmit} 
      action="https://formspree.io/f/xwvjrwgn" 
      method="POST"
      style={{
        background: 'rgba(10, 10, 12, 0.6)', backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '24px',
        padding: '30px', display: 'flex', flexDirection: 'column', gap: '15px',
      }}
    >
      {/* Added name="email" so Formspree registers the sender */}
      <input 
        name="email"
        className="bright-placeholder"
        type="email" 
        placeholder="Your email address..." 
        required 
        style={{ 
          width: '100%', background: 'rgba(255, 255, 255, 0.06)', 
          border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px',
          color: '#fff', padding: '10px', fontFamily: '"Manrope", sans-serif', 
          fontSize: '0.95rem', outline: 'none', transition: 'border-color 0.3s ease'
        }} 
        onFocus={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
        onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
      />
      
      {/* Added name="message" so Formspree registers the body content */}
      <textarea 
        name="message"
        className="bright-placeholder"
        placeholder="How can we collaborate?" 
        required rows="4" 
        style={{ 
          width: '100%', background: 'rgba(255, 255, 255, 0.06)', 
          border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px',
          color: '#fff', padding: '10px', fontFamily: '"Manrope", sans-serif', 
          fontSize: '0.95rem', outline: 'none', resize: 'none', transition: 'border-color 0.3s ease'
        }}
        onFocus={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
        onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
      ></textarea>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
        <span style={{ fontFamily: '"Manrope", sans-serif', fontSize: '0.8rem', color: '#666' }}>End-to-End Encrypted</span>
        <button 
          type="submit" disabled={status !== 'idle'}
          style={{ 
            background: '#fff', color: '#050505', border: 'none', 
            padding: '12px 28px', borderRadius: '50px', fontFamily: '"Space Grotesk", sans-serif', 
            fontWeight: 600, fontSize: '0.95rem', cursor: status === 'idle' ? 'pointer' : 'default', 
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => { if(status === 'idle') e.target.style.transform = 'translateY(-2px)' }}
          onMouseLeave={(e) => { if(status === 'idle') e.target.style.transform = 'translateY(0)' }}
        >
          {status === 'idle' ? 'Send Message ↗' : status === 'sending' ? 'Sending...' : 'Sent ✓'}
        </button>
      </div>
    </form>
  );
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ padding: '120px 20px 40px 20px', position: 'relative', zIndex: 2 }}>
      
      <style>{`
        .bright-placeholder::placeholder { 
          color: rgba(255, 255, 255, 0.6) !important; 
          opacity: 1 !important;
        }
        @keyframes blink {
          0% { opacity: 0.4; box-shadow: 0 0 5px rgba(0,255,136,0.2); }
          100% { opacity: 1; box-shadow: 0 0 15px rgba(0,255,136,0.8); }
        }
      `}</style>

      <div style={{
        maxWidth: '1100px', margin: '0 auto', display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', marginBottom: '100px'
      }}>
        
        {/* Left Column */}
        <div>
          <h2 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, color: '#ffffff', marginBottom: '20px', letterSpacing: '-1.5px' }}>
            Initiate Comm Link.
          </h2>
          <p style={{ fontFamily: '"Manrope", sans-serif', color: '#888', marginBottom: '40px', fontSize: '1.1rem', lineHeight: '1.6' }}>
            System ready. Open for opportunities in Autonomous Systems, AI architecture, and full-stack development.
          </p>
          <TerminalChat />
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          
          {/* Catchy Network Status Pill */}
          <div style={{ 
            display: 'inline-flex', alignItems: 'center', gap: '12px',
            fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.95rem',
            color: '#00ff88', background: 'rgba(0, 255, 136, 0.05)',
            border: '1px solid rgba(0, 255, 136, 0.2)', padding: '12px 24px',
            borderRadius: '50px', marginBottom: '40px', alignSelf: 'flex-start',
            textTransform: 'uppercase', letterSpacing: '1px'
          }}>
            <span style={{
              width: '10px', height: '10px', backgroundColor: '#00ff88',
              borderRadius: '50%', boxShadow: '0 0 10px rgba(0,255,136,0.6)',
              animation: 'blink 1.5s ease-in-out infinite alternate'
            }}></span>
            Network Status: Online
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TerminalLink
              platform="LinkedIn"
              handle="@ashmitcajla"
              link="https://www.linkedin.com/in/ashmitcajla/"
              target="_blank"
              rel="noopener noreferrer"
            />

            <TerminalLink
              platform="GitHub"
              handle="@ashmitcajla"
              link="https://github.com/AshmitCajla"
              target="_blank"
              rel="noopener noreferrer"
            />

            <TerminalLink
              platform="Kaggle"
              handle="@ashmitcajla"
              link="https://www.kaggle.com/ashmitcajla"
              target="_blank"
              rel="noopener noreferrer"
            />

            <TerminalLink
              platform="Resume"
              handle="Download PDF"
              link="https://drive.google.com/file/d/1NM9maQnZMelt6aaq0cJ3o_omglegQnKM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>

      </div>

      {/* Bottom Data Bar */}
      <div style={{ 
        maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', 
        alignItems: 'center', paddingTop: '30px', fontFamily: '"Manrope", sans-serif', flexWrap: 'wrap', gap: '20px'
      }}>
        <div style={{ color: '#555', fontSize: '0.9rem' }}>© {currentYear} Ashmit Cajla. All rights reserved.</div>
        <div style={{ color: '#555', fontSize: '0.9rem' }}>Patiala, Punjab, India</div>
      </div>
    </footer>
  );
}