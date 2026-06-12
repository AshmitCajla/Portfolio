import React from 'react';

const experienceData = [
  {
    id: 1, role: "Data Scientist & Portal Developer", company: "Tel Aviv University", date: "Apr 2025 - Jan 2026",
    description: "Designed a scalable data ingestion and processing pipeline handling 2M+ IoT telemetry events/day from 1500+ sensors across 300 farms using a multi-cloud platform."
  },
  {
    id: 2, role: "UAV Engineer Autonomous Systems", company: "Indian Army (10CZW Suratgarh)", date: "Jun 2025 - Jul 2025",
    description: "Designed autonomous systems with <5 sec response times, showcasing precision decision-making under high-stakes conditions."
  },
  {
    id: 3, role: "Research Project", company: "Samsung PRISM'24", date: "Jun 2024 - Mar 2025",
    description: "Developing a Generative AI-powered algorithm for detecting both visible and invisible watermarks, targeting a precision rate exceeding 95%."
  }
];

export default function Experience() {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .exp-wrapper { padding: 60px 20px !important; }
          .timeline-line { left: 0 !important; transform: none !important; }
          .timeline-node { left: 0 !important; transform: translate(-50%, -50%) !important; }
          .timeline-item { justify-content: flex-end !important; padding-left: 20px !important; }
          .timeline-card { width: 100% !important; }
        }
      `}</style>

      <div className="exp-wrapper" style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2, fontFamily: '"Inter", sans-serif' }}>
        
        <h2 style={{ fontFamily: '"Inter", sans-serif', fontSize: '2.5rem', fontWeight: 600, color: '#ffffff', letterSpacing: '-1px', marginBottom: '50px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '20px' }}>
          Experience.
        </h2>

        <div style={{ position: 'relative' }}>
          
          <div className="timeline-line" style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: '#00f3ff', transform: 'translateX(-50%)', boxShadow: '0 0 15px #00f3ff' }}></div>

          {experienceData.map((item, index) => (
            <div key={item.id} className="timeline-item" style={{ display: 'flex', justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end', paddingTop: '30px', paddingBottom: '30px', position: 'relative', width: '100%' }}>
              
              <div className="timeline-node" style={{ position: 'absolute', left: '50%', top: '50%', width: '16px', height: '16px', backgroundColor: '#050505', border: '3px solid #00f3ff', borderRadius: '50%', transform: 'translate(-50%, -50%)', boxShadow: '0 0 15px #00f3ff', zIndex: 3 }}></div>

              <div className="timeline-card" style={{ width: '45%', background: 'rgba(10, 10, 10, 0.8)', border: '1px solid #333', borderRadius: '8px', padding: '25px', transition: 'all 0.3s ease', backdropFilter: 'blur(5px)' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#00f3ff'; e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 243, 255, 0.15)'; e.currentTarget.style.transform = 'translateY(-5px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ fontFamily: '"Fira Code", monospace', color: '#00f3ff', fontSize: '0.9rem', marginBottom: '10px' }}>{item.date}</div>
                <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '5px' }}>{item.role}</h3>
                <h4 style={{ fontSize: '1rem', color: '#888', marginBottom: '15px', fontWeight: 400 }}>{item.company}</h4>
                <p style={{ color: '#ccc', lineHeight: '1.6', fontSize: '0.95rem' }}>{item.description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}