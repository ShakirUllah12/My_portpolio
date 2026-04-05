import React, { useState, useEffect } from "react";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? "rgba(10,25,47,0.9)" : "transparent",
      backdropFilter: scrolled ? "blur(10px)" : "none",
      borderBottom: scrolled ? "1px solid #1d3461" : "none",
      transition: "all 0.3s"
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px" }}>
        <a href="#home" className="mono primary" style={{ fontSize: 18, fontWeight: 700 }}>{"<Dev />"}</a>
        <div className="nav-links" style={{ display: "flex", gap: 32 }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="mono dim" style={{ fontSize: 14, transition: "color 0.3s" }}
              onMouseEnter={e => e.target.style.color = "#64ffda"}
              onMouseLeave={e => e.target.style.color = "#8892b0"}>{l}</a>
          ))}
        </div>
        <button className="mobile-menu-btn" style={{ display: "none", background: "none", border: "none", color: "#ccd6f6", fontSize: 24, cursor: "pointer" }}
          onClick={() => setOpen(!open)}>☰</button>
      </div>
      {open && (
        <div style={{ background: "#112240", padding: "16px 24px", borderBottom: "1px solid #1d3461" }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="mono dim" style={{ display: "block", padding: "8px 0", fontSize: 14 }}
              onClick={() => setOpen(false)}>{l}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
export default Navbar;
