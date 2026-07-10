import React, { useState, useEffect } from "react";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    // Check local storage or system preference
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return "dark"; // Default to dark mode
  });

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    // Apply theme
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--nav-border)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: scrolled ? "12px 24px" : "20px 24px",
          transition: "padding 0.3s ease",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          className="mono"
          style={{ fontSize: 20, fontWeight: 800, display: "flex", alignItems: "center" }}
        >
          <span style={{ color: "var(--primary)" }}>&lt;Shakir</span>
          <span style={{ color: "var(--accent)" }}>Dev /&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="mono text-link"
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "var(--text-secondary)",
                transition: "color 0.2s ease",
                padding: "8px 4px",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--primary)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--text-secondary)")}
            >
              {l}
            </a>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              borderRadius: "50%",
              width: 38,
              height: 38,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-primary)",
              backgroundColor: "var(--bg-secondary)",
              transition: "transform 0.3s ease",
            }}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            onMouseEnter={(e) => (e.target.style.transform = "rotate(30deg)")}
            onMouseLeave={(e) => (e.target.style.transform = "rotate(0)")}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Resume Download Action */}
          <a
            href="#contact"
            className="btn"
            style={{ padding: "8px 16px", fontSize: 13 }}
            onClick={(e) => {
              // Direct download simulation or focus contact
              alert("Resume download simulation triggered! In a production deployment, this links to Shakir's PDF resume file.");
            }}
          >
            Resume
          </a>
        </div>

        {/* Mobile menu toggle & Theme Button */}
        <div style={{ display: "none", gap: 12, alignItems: "center" }} className="mobile-menu-btn">
          <button
            onClick={toggleTheme}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 6,
              borderRadius: "50%",
              width: 34,
              height: 34,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-primary)",
              backgroundColor: "var(--bg-secondary)",
            }}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          
          <button
            style={{
              background: "none",
              border: "none",
              color: "var(--text-primary)",
              fontSize: 24,
              cursor: "pointer",
              padding: 4,
            }}
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Sliding Mobile Drawer Overlay */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(8px)",
            zIndex: 150,
            display: "flex",
            justifyContent: "flex-end",
          }}
          onClick={() => setOpen(false)}
        >
          <div
            style={{
              width: "280px",
              height: "100%",
              background: "var(--bg-card)",
              borderLeft: "1px solid var(--bg-card-border)",
              padding: "40px 24px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "var(--card-shadow)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              style={{
                alignSelf: "flex-end",
                background: "none",
                border: "none",
                color: "var(--text-primary)",
                fontSize: 28,
                cursor: "pointer",
                marginBottom: 40,
              }}
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            {/* Links */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 40 }}>
              {links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="mono"
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    padding: "8px 0",
                    borderBottom: "1px solid var(--bg-card-border)",
                  }}
                  onClick={() => setOpen(false)}
                >
                  {l}
                </a>
              ))}
            </div>

            {/* Resume button in Mobile menu */}
            <a
              href="#contact"
              className="btn-filled"
              style={{ width: "100%", textAlign: "center" }}
              onClick={() => {
                setOpen(false);
                alert("Resume download simulation triggered! In a production deployment, this links to Shakir's PDF resume file.");
              }}
            >
              📄 Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;