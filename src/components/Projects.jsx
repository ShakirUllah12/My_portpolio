import React, { useState } from "react";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";

const projects = [
  { 
    title: "AI Learning Assistant (PDF-Based)", 
    desc: "A Final Year Project that lets users upload PDFs and interact with an AI to learn from their content, generate summaries, and ask questions.", 
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "OpenAI"],
    category: "fullstack",
    link: "https://ai-learning-frontend-navy.vercel.app/login",
    github: "https://github.com/ShakirUllah12",
    image: "/ai_learning_assistant.png"
  },
  { 
    title: "E-Commerce Platform", 
    desc: "Full-stack MERN e-commerce app with Stripe payments, JWT auth, and admin dashboard.", 
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "fullstack",
    link: "#",
    github: "https://github.com/ShakirUllah12",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    title: "MERN E-Commerce API", 
    desc: "A robust backend RESTful API containing secure JWT user authentication, product management, and order checkout flows.", 
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    category: "backend",
    link: "#",
    github: "https://github.com/ShakirUllah12/mern-ecommerce",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
  },
  { 
    title: "Blog API", 
    desc: "RESTful API built with Express supporting complete CRUD operations, category filters, and user registration for dynamic blogs.", 
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    category: "backend",
    link: "#",
    github: "https://github.com/ShakirUllah12/blog-api",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80"
  },
  { 
    title: "Task Management App", 
    desc: "Collaborative project management tool with drag-and-drop and real-time updates.", 
    tech: ["React", "Express", "MongoDB", "Socket.io"],
    category: "fullstack",
    link: "#",
    github: "https://github.com/ShakirUllah12",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=800&q=80"
  },
  { 
    title: "Social Media Dashboard", 
    desc: "Analytics dashboard with data visualization and multi-platform integration.", 
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
    category: "frontend",
    link: "#",
    github: "https://github.com/ShakirUllah12",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  { 
    title: "Real-Time Chat App", 
    desc: "Messaging app with file sharing, group chats, and video calling.", 
    tech: ["React", "Express", "MongoDB", "WebRTC"],
    category: "fullstack",
    link: "#",
    github: "https://github.com/ShakirUllah12",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80"
  }
];

function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section" style={{ position: "relative" }}>
      <div className="container">
        <p className="section-label">{"// Projects"}</p>
        <h2 className="section-title">Things I've Built<span>.</span></h2>

        {/* Category Filter Tabs */}
        <div 
          style={{ 
            display: "flex", 
            gap: 12, 
            marginBottom: 40, 
            flexWrap: "wrap",
            borderBottom: "1px solid var(--bg-card-border)",
            paddingBottom: 16
          }}
        >
          {["all", "fullstack", "backend", "frontend"].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="mono"
              style={{
                padding: "8px 16px",
                fontSize: 13,
                borderRadius: 20,
                border: "none",
                cursor: "pointer",
                backgroundColor: filter === cat ? "var(--primary)" : "var(--bg-secondary)",
                color: filter === cat ? "var(--bg-primary)" : "var(--text-secondary)",
                fontWeight: filter === cat ? "600" : "500",
                transition: "all 0.2s ease"
              }}
            >
              {cat === "all" ? "show_all()" : `${cat}`}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid-2">
          {filteredProjects.map(p => (
            <div key={p.title} className="card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              {/* Project Preview */}
              <div 
                style={{ 
                  height: 200, 
                  overflow: "hidden", 
                  borderRadius: 8, 
                  marginBottom: 20, 
                  border: "1px solid var(--bg-card-border)",
                  backgroundColor: "var(--bg-secondary)"
                }}
              >
                <img 
                  src={p.image || FALLBACK_IMAGE} 
                  alt={p.title} 
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop if fallback image also fails
                    e.target.src = FALLBACK_IMAGE;
                  }}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} 
                />
              </div>

              {/* Title & Description */}
              <h3 className="bright" style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: "var(--text-primary)" }}>
                {p.title}
              </h3>
              <p className="dim" style={{ fontSize: 14.5, lineHeight: 1.7, marginBottom: 20, color: "var(--text-secondary)", flex: 1 }}>
                {p.desc}
              </p>

              {/* Tech Stack tags */}
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 24 }}>
                {p.tech.map(t => (
                  <span 
                    key={t} 
                    className="mono" 
                    style={{ 
                      fontSize: 11, 
                      padding: "4px 10px", 
                      background: "var(--bg-secondary)", 
                      border: "1px solid var(--bg-card-border)",
                      borderRadius: 4, 
                      color: "var(--accent)" 
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: 16, borderTop: "1px solid var(--bg-card-border)", paddingTop: 16 }}>
                {p.link && p.link !== "#" && (
                  <a 
                    href={p.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mono accent" 
                    style={{ fontSize: 13, display: "flex", alignItems: "center", gap: 4, fontWeight: "600" }}
                  >
                    🚀 Live Demo
                  </a>
                )}
                {p.github && (
                  <a 
                    href={p.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mono primary" 
                    style={{ fontSize: 13, display: "flex", alignItems: "center", gap: 4, fontWeight: "600" }}
                  >
                    🐙 GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
