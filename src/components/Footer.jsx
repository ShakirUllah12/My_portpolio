
import React from "react";

function Footer() {
  const linkStyle = {
    fontSize: 13,
    color: "var(--text-secondary)",
    transition: "color 0.2s ease",
  };

  return (
    <footer
      aria-label="Site footer"
      style={{
        padding: "40px 0",
        borderTop: "1px solid var(--bg-card-border)",
        textAlign: "center",
        backgroundColor: "var(--bg-primary)",
      }}
    >
      <p
        className="mono dim"
        style={{
          fontSize: 13,
          color: "var(--text-muted)",
        }}
      >
        Built by{" "}
        <span
          style={{
            color: "var(--primary)",
            fontWeight: "600",
          }}
        >
          Shakir Ullah
        </span>{" "}
        © 2026
      </p>

      <nav
        aria-label="Social links"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 24,
          marginTop: 16,
          flexWrap: "wrap",
        }}
      >
        {/* GitHub */}
        <a
          href="https://github.com/ShakirUllah12"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Shakir Ullah on GitHub"
          style={linkStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--primary)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color =
              "var(--text-secondary)";
          }}
        >
          🐙 GitHub
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/shakir-ullah-203ab4271/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Shakir Ullah on LinkedIn"
          style={linkStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--primary)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color =
              "var(--text-secondary)";
          }}
        >
          🔗 LinkedIn
        </a>

        {/* Email */}
        <a
          href="mailto:shakirullahaup@gmail.com"
          aria-label="Email Shakir Ullah"
          style={linkStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--primary)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color =
              "var(--text-secondary)";
          }}
        >
          ✉️ Email
        </a>
      </nav>
    </footer>
  );
}

export default Footer;

