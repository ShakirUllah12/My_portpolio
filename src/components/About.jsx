import React from "react";

function About() {
  return (
    <section id="about" className="section" style={{ position: "relative" }}>
      <div className="container">
        <p className="section-label">{"// About"}</p>
        <h2 className="section-title">About Me<span>.</span></h2>
        
        <div className="grid-2">
          {/* Narrative description */}
          <div>
            <p className="dim" style={{ lineHeight: 1.8, marginBottom: 20, fontSize: 16, color: "var(--text-secondary)" }}>
              I am Shakir Ullah, a Computer Science graduate from Peshawar, Pakistan, and a passionate MERN Stack Developer.
            </p>
            <p className="dim" style={{ lineHeight: 1.8, marginBottom: 20, fontSize: 16, color: "var(--text-secondary)" }}>
              I specialize in building full-stack web applications using MongoDB, Express, React, and Node.js. I also work with modern frontend tools like Tailwind CSS, JavaScript, and TypeScript to create responsive and user-friendly interfaces.
            </p>
            <p className="dim" style={{ lineHeight: 1.8, marginBottom: 20, fontSize: 16, color: "var(--text-secondary)" }}>
              I have experience working on real-world projects, including frontend and backend development, REST APIs, and database management. I use Git and GitHub for version control, collaboration, and deployment pipelines.
            </p>
            <p className="dim" style={{ lineHeight: 1.8, fontSize: 16, color: "var(--text-secondary)" }}>
              My goal is to build products that are not only functional but also provide pixel-perfect, performant experiences. I'm always learning new technologies and best practices.
            </p>
          </div>

          {/* Interactive Profile Code Box */}
          <div 
            className="card" 
            style={{ 
              fontFamily: "'Fira Code', monospace", 
              fontSize: "clamp(12px, 2.8vw, 14px)",
              alignSelf: "start",
              overflowX: "auto",
              whiteSpace: "pre",
              padding: "24px",
              backgroundColor: "var(--bg-secondary)",
            }}
          >
            <p className="dim" style={{ color: "var(--text-muted)" }}>{">"} const developer = {"{"}</p>
            <p style={{ paddingLeft: 20 }}><span className="dim" style={{ color: "var(--text-muted)" }}>name:</span> <span style={{ color: "var(--accent)" }}>"Shakir Ullah"</span>,</p>
            <p style={{ paddingLeft: 20 }}><span className="dim" style={{ color: "var(--text-muted)" }}>role:</span> <span style={{ color: "var(--accent)" }}>"MERN Stack Developer"</span>,</p>
            <p style={{ paddingLeft: 20 }}><span className="dim" style={{ color: "var(--text-muted)" }}>location:</span> <span style={{ color: "var(--accent)" }}>"Peshawar, Pakistan"</span>,</p>
            <p style={{ paddingLeft: 20 }}><span className="dim" style={{ color: "var(--text-muted)" }}>skills:</span> <span style={{ color: "var(--primary)" }}>["React", "Node.js", "MongoDB", "Express"]</span>,</p>
            <p style={{ paddingLeft: 20 }}><span className="dim" style={{ color: "var(--text-muted)" }}>hireable:</span> <span style={{ color: "var(--accent)" }}>true</span></p>
            <p className="dim" style={{ color: "var(--text-muted)" }}>{"};"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
