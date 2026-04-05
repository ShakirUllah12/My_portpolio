import React from "react";

const categories = [
  { title: "Frontend", skills: [{ name: "React", level: 90 }, { name: "JavaScript", level: 85 }, { name: "Tailwind CSS", level: 85 }, { name: "HTML/CSS", level: 95 }] },
  { title: "Backend", skills: [{ name: "Node.js", level: 88 }, { name: "Express.js", level: 85 }, { name: "MongoDB", level: 82 }, { name: "REST APIs", level: 90 }] },
  { title: "Tools", skills: [{ name: "Git & GitHub", level: 88 }, { name: "VS Code", level: 90 }, { name: "Figma", level: 70 }, { name: "Linux", level: 65 }] },
];

function Skills() {
  return (
    <section id="skills" className="section" style={{ background: "rgba(17,34,64,0.3)" }}>
      <div className="container">
        <p className="section-label">{"// Skills"}</p>
        <h2 className="section-title">Tech Stack<span>.</span></h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="grid-3">
          {categories.map(cat => (
            <div key={cat.title} className="card">
              <h3 className="mono primary" style={{ fontSize: 14, marginBottom: 20 }}>{"> " + cat.title}</h3>
              {cat.skills.map(s => (
                <div key={s.name} style={{ marginBottom: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <span className="bright" style={{ fontSize: 14 }}>{s.name}</span>
                    <span className="mono dim" style={{ fontSize: 12 }}>{s.level}%</span>
                  </div>
                  <div style={{ height: 6, background: "#1d3461", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{ width: `${s.level}%`, height: "100%", background: "#64ffda", borderRadius: 3, transition: "width 1s" }} />
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
