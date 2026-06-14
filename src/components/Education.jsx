import React from "react";

function Backend() {
  return (
    <section id="backend" style={{ minHeight: "80vh", padding: "80px 0", background: "#0a0a0a", color: "#fff" }}>
      <div className="container">
        <h2 className="bright" style={{ fontSize: 48, marginBottom: 24 }}>Backend Projects</h2>
        <p className="dim" style={{ maxWidth: 600, marginBottom: 32 }}>
          I create scalable and efficient backend applications using Node.js, Express.js, and MongoDB.
        </p>

        {/* Projects */}
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {/* Project 1 */}
          <div className="backend-card" style={{ padding: 24, border: "1px solid #333", borderRadius: 12, minWidth: 280 }}>
            <h3 style={{ marginBottom: 16, color: "#00d1b2" }}>MERN E-Commerce API</h3>
            <p style={{ marginBottom: 16 }}>Node.js, Express.js, MongoDB, JWT Authentication</p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="https://github.com/ShakirUllah12/mern-ecommerce" target="_blank" className="btn">GitHub</a>
              <a href="#" target="_blank" className="btn">Live Demo</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="backend-card" style={{ padding: 24, border: "1px solid #333", borderRadius: 12, minWidth: 280 }}>
            <h3 style={{ marginBottom: 16, color: "#61dafb" }}>Blog API</h3>
            <p style={{ marginBottom: 16 }}>Node.js, Express.js, MongoDB, CRUD Operations</p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="https://github.com/ShakirUllah12/blog-api" target="_blank" className="btn">GitHub</a>
              <a href="#" target="_blank" className="btn">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Backend;