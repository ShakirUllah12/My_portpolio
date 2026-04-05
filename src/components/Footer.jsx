import React from "react";

function Footer() {
  return (
    <footer style={{ padding: "32px 0", borderTop: "1px solid #1d3461", textAlign: "center" }}>
      <p className="mono dim" style={{ fontSize: 13 }}>
        Built by <span className="primary">Shakir Ullah</span> © 2026
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 12 }}>
        <a href="https://github.com/ShakirUllah12" target="_blank" rel="noreferrer" className="dim" style={{ fontSize: 13, transition: "color 0.3s" }}
          onMouseEnter={e => e.target.style.color = "#64ffda"} onMouseLeave={e => e.target.style.color = "#8892b0"}>GitHub</a>
        <a href="https://www.linkedin.com/in/shakir-ullah-203ab4271/" target="_blank" rel="noreferrer" className="dim" style={{ fontSize: 13, transition: "color 0.3s" }}
          onMouseEnter={e => e.target.style.color = "#64ffda"} onMouseLeave={e => e.target.style.color = "#8892b0"}>LinkedIn</a>
        <a href="mailto:shakirullahaup@gmail.com" className="dim" style={{ fontSize: 13, transition: "color 0.3s" }}
          onMouseEnter={e => e.target.style.color = "#64ffda"} onMouseLeave={e => e.target.style.color = "#8892b0"}>Email</a>
      </div>
    </footer>
  );
}
export default Footer;
