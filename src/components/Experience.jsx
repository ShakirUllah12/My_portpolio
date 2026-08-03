import React from "react";

function Experience() {
  const experiences = [
    {
      role: "MERN Stack Developer",
      company: "Sky Marketing",
      location: "Blue Area, Islamabad, Pakistan",
      type: "Full-time",
      duration: "August 2026 - Present",
      icon: "💼",
      bullets: [
        "Selected as a MERN Stack Developer at Sky Marketing, a real estate marketing company based in Blue Area, Islamabad.",
        "Building and maintaining scalable web applications using MongoDB, Express.js, React.js, and Node.js.",
        "Collaborating with cross-functional teams to deliver responsive, high-performance features.",
        "Contributing to both frontend UI development and backend API integration."
      ]
    }
  ];

  return (
    <section id="experience" className="section" style={{ position: "relative" }}>
      <div className="container">
        <p className="section-label">{"// Experience"}</p>
        <h2 className="section-title">Work History<span>.</span></h2>

        <div style={{
          position: "relative",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "10px 0"
        }}>
          {/* Vertical Timeline Line */}
          <div style={{
            position: "absolute",
            left: "17px",
            top: 0,
            bottom: 0,
            width: "2px",
            backgroundColor: "var(--bg-card-border)"
          }} />

          {experiences.map((exp, idx) => (
            <div key={idx} style={{
              position: "relative",
              marginBottom: "30px",
              paddingLeft: "50px"
            }}>
              {/* Timeline Icon/Dot */}
              <div style={{
                position: "absolute",
                left: "0",
                top: "4px",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "var(--bg-card)",
                border: "2px solid var(--primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
                fontSize: "16px",
                boxShadow: "0 0 10px var(--primary-glow)",
                transition: "all 0.3s ease"
              }}>
                {exp.icon}
              </div>

              {/* Card Container */}
              <div className="card" style={{
                padding: "24px 28px",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginBottom: "16px"
                }}>
                  <div>
                    <h3 className="bright" style={{ fontSize: "19px", fontWeight: 700, margin: 0, color: "var(--text-primary)" }}>
                      {exp.role}
                    </h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px", flexWrap: "wrap" }}>
                      <span style={{ color: "var(--primary)", fontWeight: "600", fontSize: "14.5px" }}>
                        {exp.company}
                      </span>
                      <span className="mono dim" style={{ fontSize: "12px" }}>•</span>
                      <span className="mono accent" style={{ fontSize: "11px", padding: "2px 8px", background: "var(--bg-secondary)", borderRadius: "4px", border: "1px solid var(--bg-card-border)" }}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <div style={{ minWidth: "150px" }}>
                    <span className="mono primary" style={{ fontSize: "13px", fontWeight: "600", display: "block" }}>
                      {exp.duration}
                    </span>
                    <p className="dim" style={{ fontSize: "12px", marginTop: "4px", color: "var(--text-muted)", margin: 0 }}>
                      📍 {exp.location}
                    </p>
                  </div>
                </div>

                <ul style={{
                  paddingLeft: "18px",
                  margin: 0,
                  color: "var(--text-secondary)",
                  fontSize: "14px",
                  lineHeight: "1.7"
                }}>
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} style={{ marginBottom: "8px" }}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
