import React, { useState } from 'react';

const tagColors = {
  "Deep Learning": { bg: "rgba(0, 243, 255, 0.1)", text: "#00f3ff", border: "rgba(0, 243, 255, 0.2)" },
  "DRL": { bg: "rgba(255, 0, 128, 0.1)", text: "#ff0080", border: "rgba(255, 0, 128, 0.2)" },
  "Network Security": { bg: "rgba(0, 255, 136, 0.1)", text: "#00ff88", border: "rgba(0, 255, 136, 0.2)" },
  "CNN": { bg: "rgba(255, 166, 0, 0.1)", text: "#ffa600", border: "rgba(255, 166, 0, 0.2)" },
  "PyTorch": { bg: "rgba(255, 68, 0, 0.1)", text: "#ff4400", border: "rgba(255, 68, 0, 0.2)" },
  "YOLOv9": { bg: "rgba(183, 0, 255, 0.1)", text: "#b700ff", border: "rgba(183, 0, 255, 0.2)" },
  "Hardware": { bg: "rgba(0, 136, 255, 0.1)", text: "#0088ff", border: "rgba(0, 136, 255, 0.2)" },
  "3D Tracking": { bg: "rgba(255, 213, 0, 0.1)", text: "#ffd500", border: "rgba(255, 213, 0, 0.2)" },
  "Edge Computing": { bg: "rgba(0, 255, 213, 0.1)", text: "#00ffd5", border: "rgba(0, 255, 213, 0.2)" }
};

const projectsData = [
  { id: "sih25", title: "Next-Gen AI Firewall", subtitle: "SIH'25 Winner", description: "Architected an AI-driven Next-Gen Firewall with multi-model deep learning, encrypted traffic analysis, and DRL-based policy optimization.", tags: ["Deep Learning", "DRL", "Network Security"], span: "span 2" },
  { id: "medseg", title: "Medical Image Segmentation", subtitle: "Lung Tumor Detection", description: "Deep learning pipeline combining CNN-based ensemble models with a novel spatial transformer architecture.", tags: ["CNN", "PyTorch"], span: "span 1" },
  { id: "uav", title: "UAV Neutralisation", subtitle: "Patent No. 486614-001", description: "AI-based anti-drone system with 180° real-time scanning, trajectory prediction, and autonomous signal-jamming.", tags: ["YOLOv9", "Hardware"], span: "span 1" },
  { id: "sih24", title: "3D Commando Tracker", subtitle: "SIH'24 Winner", description: "Real-time 3D location tracker identifying movement and surroundings with sub-50 cm accuracy independent of networks.", tags: ["3D Tracking", "Edge Computing"], span: "span 2" }
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="bento-card" style={{
      gridColumn: window.innerWidth > 768 ? project.span : 'span 3',
      background: isHovered ? 'rgba(255, 255, 255, 0.04)' : 'rgba(10, 10, 12, 0.6)',
      backdropFilter: 'blur(10px)', border: '1px solid', borderColor: isHovered ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.08)',
      borderRadius: '24px', padding: '40px', display: 'flex', flexDirection: 'column',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)', transform: isHovered ? 'translateY(-4px)' : 'translateY(0)'
    }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1.8rem', color: '#fff', marginBottom: '10px', letterSpacing: '-0.5px' }}>{project.title}</h3>
      <h4 style={{ fontFamily: '"Manrope", sans-serif', fontSize: '1rem', color: '#00f3ff', marginBottom: '25px', fontWeight: 600, letterSpacing: '0.5px' }}>{project.subtitle}</h4>
      <p style={{ fontFamily: '"Manrope", sans-serif', color: '#a0a0a0', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '40px', flexGrow: 1 }}>{project.description}</p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {project.tags.map((tag, index) => {
          const style = tagColors[tag] || { bg: "rgba(255,255,255,0.03)", text: "#ccc", border: "rgba(255,255,255,0.1)" };
          return ( <span key={index} style={{ background: style.bg, border: `1px solid ${style.border}`, color: style.text, padding: '6px 14px', borderRadius: '50px', fontSize: '0.85rem', fontFamily: '"Manrope", sans-serif', fontWeight: 600 }}>{tag}</span> );
        })}
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .proj-wrapper { padding: 60px 20px !important; }
          .bento-grid { grid-template-columns: 1fr !important; }
          .bento-card { grid-column: span 1 !important; }
        }
      `}</style>
      <div className="proj-wrapper" style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        <h2 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '2.5rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-1.5px', marginBottom: '50px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '20px' }}>
          Archives.
        </h2>
        <div className="bento-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {projectsData.map((project) => ( <ProjectCard key={project.id} project={project} /> ))}
        </div>
      </div>
    </>
  );
}