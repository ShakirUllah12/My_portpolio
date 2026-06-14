import React, { useState, useEffect } from "react";

function Hero() {
  const words = ["React", "MongoDB", "Node.js", "Express", "Frontend", "JavaScript"];
  const [currentWord, setCurrentWord] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const pauseTime = 1000;
    let timeout;

    if (!isDeleting && currentWord === words[index]) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && currentWord === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      timeout = setTimeout(() => {}, 500);
    } else {
      timeout = setTimeout(() => {
        const fullWord = words[index];
        setCurrentWord(
          isDeleting
            ? fullWord.substring(0, currentWord.length - 1)
            : fullWord.substring(0, currentWord.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [currentWord, isDeleting, index, words]);

  const socialButtonStyle = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 16px",
    borderRadius: 8,
    backgroundColor: "#0f172a",
    color: "#f1f5f9",
    textDecoration: "none",
    fontWeight: 500,
    transition: "all 0.3s ease",
  };

  const socialHoverStyle = {
    backgroundColor: "#3b82f6",
    color: "#fff",
    transform: "scale(1.05)",
  };

  return (
    <section
      id="home"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 80 }}
    >
      <div className="container">
        <p className="mono primary" style={{ fontSize: 16, marginBottom: 16 }}>
          Hi, my name is
        </p>
        <h1 className="bright" style={{ fontSize: 56, fontWeight: 700, marginBottom: 8 }}>
          Shakir Ullah<span className="primary">.</span>
        </h1>

        {/* Scrolling tech word + static Developer */}
        <h2 style={{ fontSize: 40, fontWeight: 600, marginBottom: 24 }}>
          <span style={{ color: "#ffff" }}>{currentWord}</span>{" "}
          <span style={{ color: "#10b981" }}>Developer</span>
          <span className="primary">|</span>
        </h2>

        <p className="dim" style={{ maxWidth: 540, lineHeight: 1.8, marginBottom: 32 }}>
        Hi, my name is Shakir Ullah.
MERN Stack Developer

I'm a Computer Science graduate from Peshawar, Pakistan, specializing in building modern, scalable, and responsive web applications.

I work with:
React, Node.js, Express, MongoDB, Tailwind CSS, JavaScript, TypeScript, Git & GitHub.

I focus on creating fast, clean, and user-friendly digital experiences.
        </p>

        {/* Social Buttons */}
        <div style={{ display: "flex", gap: 16, marginBottom: 32 }}>
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
            href="mailto:your.email@example.com"
            style={socialButtonStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, socialHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, socialButtonStyle)}
          >
            ✉️ Mail
          </a>
        </div>

        {/* Existing buttons */}
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="#projects" className="btn">view_projects()</a>
          <a href="#contact" className="btn-filled">hire_me()</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;