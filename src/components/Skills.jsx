import React from "react";

const categories = [
  { 
    title: "Frontend", 
    skills: [
      { name: "React", level: 90 }, 
      { name: "JavaScript", level: 85 }, 
      { name: "Tailwind CSS", level: 85 }, 
      { name: "HTML/CSS", level: 95 }
    ] 
  },
  { 
    title: "Backend", 
    skills: [
      { name: "Node.js", level: 88 }, 
      { name: "Express.js", level: 85 }, 
      { name: "MongoDB", level: 82 }, 
      { name: "REST APIs", level: 90 }
    ] 
  },
  { 
    title: "Tools & Others", 
    skills: [
      { name: "Git & GitHub", level: 88 }, 
      { name: "VS Code", level: 90 }, 
      { name: "Figma", level: 70 }, 
      { name: "Linux", level: 65 }
    ] 
  },
];

function Skills() {
  return (
    <section id="skills" className="section" style={{ backgroundColor: "var(--bg-secondary)", transition: "background-color 0.3s ease" }}>
      <div className="container">
        <p className="section-label">{"// Skills"}</p>
        <h2 className="section-title">Tech Stack<span>.</span></h2>
        
        <div className="grid-3">
          {categories.map(cat => (
            <div key={cat.title} className="card">
              <h3 className="mono accent" style={{ fontSize: 16, fontWeight: "600", marginBottom: 20 }}>
                {"> " + cat.title}
              </h3>
              
              {cat.skills.map(s => (
                <div key={s.name} style={{ marginBottom: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span className="bright" style={{ fontSize: 14, fontWeight: "500", color: "var(--text-primary)" }}>
                      {s.name}
                    </span>
                    <span className="mono dim" style={{ fontSize: 12, color: "var(--text-muted)" }}>
                      {s.level}%
                    </span>
                  </div>
                  
                  {/* Outer track */}
                  <div 
                    style={{ 
                      height: 6, 
                      backgroundColor: "var(--bg-primary)", 
                      borderRadius: 3, 
                      overflow: "hidden",
                      border: "1px solid var(--bg-card-border)" 
                    }}
                  >
                    {/* Active fill */}
                    <div 
                      style={{ 
                        width: `${s.level}%`, 
                        height: "100%", 
                        background: "linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%)", 
                        borderRadius: 3, 
                        transition: "width 1s cubic-bezier(0.4, 0, 0.2, 1)" 
                      }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
