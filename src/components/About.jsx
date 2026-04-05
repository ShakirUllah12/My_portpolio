import React from "react";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">{"// About"}</p>
        <h2 className="section-title">About Me<span>.</span></h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="grid-2">
          <div>
            <p className="dim" style={{ lineHeight: 1.8, marginBottom: 16 }}>
              Hello! I'm Shakir Ullah, a passionate MERN Stack Developer based in Peshawar, Pakistan. I enjoy creating things that live on the internet — from websites to full-stack web applications.
            </p>
            <p className="dim" style={{ lineHeight: 1.8 }}>
              My goal is to build products that are not only functional but also provide pixel-perfect, performant experiences. I'm always learning new technologies and best practices.
            </p>
          </div>
          <div className="card" style={{ fontFamily: "'Fira Code', monospace", fontSize: 13 }}>
            <p className="dim">{">"} const developer = {"{"}</p>
            <p style={{ paddingLeft: 20 }}><span className="dim">name:</span> <span className="primary">"Shakir Ullah"</span>,</p>
            <p style={{ paddingLeft: 20 }}><span className="dim">role:</span> <span className="primary">"MERN Stack Developer"</span>,</p>
            <p style={{ paddingLeft: 20 }}><span className="dim">location:</span> <span className="primary">"Peshawar, Pakistan"</span>,</p>
            <p style={{ paddingLeft: 20 }}><span className="dim">skills:</span> <span className="primary">["React", "Node.js", "MongoDB"]</span>,</p>
            <p style={{ paddingLeft: 20 }}><span className="dim">hireable:</span> <span style={{ color: "#64ffda" }}>true</span></p>
            <p className="dim">{"};"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
