import React from "react";

function Hero() {
  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 80 }}>
      <div className="container">
        <p className="mono primary" style={{ fontSize: 16, marginBottom: 16 }}>Hi, my name is</p>
        <h1 className="bright" style={{ fontSize: 56, fontWeight: 700, marginBottom: 8 }}>Shakir Ullah<span className="primary">.</span></h1>
        <h2 className="dim" style={{ fontSize: 40, fontWeight: 600, marginBottom: 24 }}>I build things for the web.</h2>
        <p className="dim" style={{ maxWidth: 540, lineHeight: 1.8, marginBottom: 32 }}>
          I'm a MERN Stack Developer from Peshawar, Pakistan, specializing in building exceptional digital experiences with React, Node.js, Express, and MongoDB.
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="#projects" className="btn">view_projects()</a>
          <a href="#contact" className="btn-filled">hire_me()</a>
        </div>
      </div>
    </section>
  );
}
export default Hero;
