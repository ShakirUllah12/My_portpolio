
import React, { useState, useEffect } from "react";

const links = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");

    if (saved) return saved;

    return "dark";
  });

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const closeMobileMenu = () => {
    setOpen(false);
  };

  return (
    <header>
      <nav
        aria-label="Main navigation"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--nav-border)"
            : "none",
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
            aria-label="Shakir Ullah - Home"
            style={{
              fontSize: 20,
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ color: "var(--primary)" }}>
              &lt;Shakir
            </span>

            <span style={{ color: "var(--accent)" }}>
              Dev /&gt;
            </span>
          </a>

          {/* Desktop Navigation */}
          <div
            className="nav-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
            }}
          >
            {links.map((link) => {
              const sectionId = link.toLowerCase();

              return (
                <a
                  key={link}
                  href={`#${sectionId}`}
                  className="mono text-link"
                  aria-label={`Go to ${link} section`}
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    transition: "color 0.2s ease",
                    padding: "8px 4px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      "var(--text-secondary)";
                  }}
                >
                  {link}
                </a>
              );
            })}

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
              title={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
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
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "rotate(30deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotate(0)";
              }}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            {/* Resume */}
            <a
              href="/resume.pdf"
              download="Shakir_Ullah_Resume.pdf"
              className="btn"
              aria-label="Download Shakir Ullah resume"
              style={{
                padding: "8px 16px",
                fontSize: 13,
              }}
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Controls */}
          <div
            style={{
              display: "none",
              gap: 12,
              alignItems: "center",
            }}
            className="mobile-menu-btn"
          >
            {/* Mobile Theme Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
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

            {/* Open Menu */}
            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={open}
              aria-controls="mobile-navigation"
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

        {/* Mobile Navigation Drawer */}
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
            onClick={closeMobileMenu}
          >
            <div
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
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
                type="button"
                aria-label="Close navigation menu"
                style={{
                  alignSelf: "flex-end",
                  background: "none",
                  border: "none",
                  color: "var(--text-primary)",
                  fontSize: 28,
                  cursor: "pointer",
                  marginBottom: 40,
                }}
                onClick={closeMobileMenu}
              >
                ✕
              </button>

              {/* Mobile Links */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                  marginBottom: 40,
                }}
              >
                {links.map((link) => {
                  const sectionId = link.toLowerCase();

                  return (
                    <a
                      key={link}
                      href={`#${sectionId}`}
                      className="mono"
                      aria-label={`Go to ${link} section`}
                      style={{
                        fontSize: 18,
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        padding: "8px 0",
                        borderBottom:
                          "1px solid var(--bg-card-border)",
                      }}
                      onClick={closeMobileMenu}
                    >
                      {link}
                    </a>
                  );
                })}
              </div>

              {/* Mobile Resume */}
              <a
                href="/resume.pdf"
                download="Shakir_Ullah_Resume.pdf"
                className="btn-filled"
                aria-label="Download Shakir Ullah resume"
                style={{
                  width: "100%",
                  textAlign: "center",
                }}
                onClick={closeMobileMenu}
              >
                📄 Download Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;

