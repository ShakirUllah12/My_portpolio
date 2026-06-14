import React from "react";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">{"// About"}</p>
        <h2 className="section-title">About Me<span>.</span></h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="grid-2">
          <div>
            <p className="dim" style={{ lineHeight: 1.8, marginBottom: 16 }}>I am Shakir Ullah, a Computer Science graduate from Peshawar, Pakistan, and a passionate MERN Stack Developer.

I specialize in building full-stack web applications using MongoDB, Express, React, and Node.js. I also work with modern frontend tools like Tailwind CSS, JavaScript, and TypeScript to create responsive and user-friendly interfaces.

I have experience working on real-world projects, including frontend and backend development, REST APIs, and database management. I also use Git and GitHub for version control and collaboration.

My goal is to become a professional full-stack developer and contribute to impactful real-world software solutions while continuously improving my skills.
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
