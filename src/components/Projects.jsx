import React from "react";

const projects = [
  { title: "E-Commerce Platform", desc: "Full-stack MERN e-commerce app with Stripe payments, JWT auth, and admin dashboard.", tech: ["React", "Node.js", "MongoDB", "Stripe"] },
  { title: "Task Management App", desc: "Collaborative project management tool with drag-and-drop and real-time updates.", tech: ["React", "Express", "MongoDB", "Socket.io"] },
  { title: "Social Media Dashboard", desc: "Analytics dashboard with data visualization and multi-platform integration.", tech: ["React", "Node.js", "MongoDB", "Chart.js"] },
  { title: "Real-Time Chat App", desc: "Messaging app with file sharing, group chats, and video calling.", tech: ["React", "Express", "MongoDB", "WebRTC"] },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">{"// Projects"}</p>
        <h2 className="section-title">Things I've Built<span>.</span></h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="grid-2">
          {projects.map(p => (
            <div key={p.title} className="card">
              <h3 className="bright" style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{p.title}</h3>
              <p className="dim" style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {p.tech.map(t => (
                  <span key={t} className="mono" style={{ fontSize: 12, padding: "4px 10px", background: "#1d3461", borderRadius: 4, color: "#8892b0" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
