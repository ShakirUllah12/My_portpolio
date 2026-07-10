import React from "react";

function Footer() {
  return (
    <footer style={{ padding: "40px 0", borderTop: "1px solid var(--bg-card-border)", textAlign: "center", backgroundColor: "var(--bg-primary)" }}>
      <p className="mono dim" style={{ fontSize: 13, color: "var(--text-muted)" }}>
        Built by <span style={{ color: "var(--primary)", fontWeight: "600" }}>Shakir Ullah</span> © 2026
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 16 }}>
        <a 
          href="https://github.com/ShakirUllah12" 
          target="_blank" 
          rel="noreferrer" 
          style={{ fontSize: 13, color: "var(--text-secondary)", transition: "color 0.2s ease" }}
          onMouseEnter={e => e.target.style.color = "var(--primary)"} 
          onMouseLeave={e => e.target.style.color = "var(--text-secondary)"}
        >
          🐙 GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/shakir-ullah-203ab4271/" 
          target="_blank" 
          rel="noreferrer" 
          style={{ fontSize: 13, color: "var(--text-secondary)", transition: "color 0.2s ease" }}
          onMouseEnter={e => e.target.style.color = "var(--primary)"} 
          onMouseLeave={e => e.target.style.color = "var(--text-secondary)"}
        >
          🔗 LinkedIn
        </a>
        <a 
          href="mailto:shakirullahaup@gmail.com" 
          style={{ fontSize: 13, color: "var(--text-secondary)", transition: "color 0.2s ease" }}
          onMouseEnter={e => e.target.style.color = "var(--primary)"} 
          onMouseLeave={e => e.target.style.color = "var(--text-secondary)"}
        >
          ✉️ Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;
