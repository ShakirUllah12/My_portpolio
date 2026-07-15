import React from "react";

function Hero() {
  const socialButtonStyle = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "10px 20px",
    borderRadius: 8,
    backgroundColor: "var(--bg-secondary)",
    color: "var(--text-primary)",
    border: "1px solid var(--bg-card-border)",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: 14,
    fontFamily: "'Fira Code', monospace",
    transition: "all 0.25s ease",
  };

  const socialHoverStyle = {
    backgroundColor: "var(--primary)",
    color: "var(--bg-primary)",
    borderColor: "var(--primary)",
    transform: "translateY(-2px)",
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 100,
        paddingBottom: 60,
      }}
    >
      <div className="container" style={{ width: "100%" }}>
        <p className="mono accent" style={{ fontSize: 16, marginBottom: 16, fontWeight: 500 }}>
          Hi, my name is
        </p>
        
        <h1 
          className="bright" 
          style={{ 
            fontSize: "clamp(36px, 8vw, 64px)", 
            fontWeight: 800, 
            lineHeight: 1.1,
            letterSpacing: "-1px",
            marginBottom: 16 
          }}
        >
          Shakir Ullah<span className="primary">.</span>
        </h1>

        {/* Static Professional Subtitle */}
        <h2 
          style={{ 
            fontSize: "clamp(18px, 3.5vw, 28px)", 
            fontWeight: 500, 
            lineHeight: 1.4,
            marginBottom: 24,
            color: "var(--text-secondary)"
          }}
        >
          Web and Mobile App Developer <span className="primary">|</span> MERN Stack Developer
        </h2>

        <p 
          className="dim" 
          style={{ 
            maxWidth: 600, 
            fontSize: "clamp(15px, 2.5vw, 17px)",
            lineHeight: 1.8, 
            marginBottom: 40,
            color: "var(--text-secondary)"
          }}
        >
          I'm a Computer Science graduate from Peshawar, Pakistan, specializing in building modern, scalable, and responsive web applications. I focus on creating fast, clean, and user-friendly digital experiences.
        </p>

        {/* Social Buttons */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
          <a
            href="https://github.com/ShakirUllah12"
            target="_blank"
            rel="noopener noreferrer"
            style={socialButtonStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, socialHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, socialButtonStyle)}
          >
            🐙 GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shakir-ullah-203ab4271"
            target="_blank"
            rel="noopener noreferrer"
            style={socialButtonStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, socialHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, socialButtonStyle)}
          >
            🔗 LinkedIn
          </a>
          <a
            href="mailto:shakirullahaup@gmail.com"
            style={socialButtonStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, socialHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, socialButtonStyle)}
          >
            ✉️ Mail
          </a>
        </div>

        {/* Primary Call to Action Buttons */}
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="#projects" className="btn">view_projects()</a>
          <a href="#contact" className="btn-filled">hire_me()</a>
          <button
            onClick={() => alert("Resume download simulation triggered! In a production deployment, this links to Shakir's PDF resume file.")}
            className="btn"
            style={{ 
              borderColor: "var(--accent)", 
              color: "var(--accent)",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "var(--accent-glow)";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.transform = "translateY(0)";
            }}
          >
            📄 download_resume()
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;