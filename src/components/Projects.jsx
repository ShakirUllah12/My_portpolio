
import React, { useState } from "react";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";

const projects = [
  {
    title: "FitZone Gym",
    desc: "A full-stack gym website built with the MERN stack (MongoDB, Express, React, Node.js), featuring dynamic trainer profiles and search-engine-optimized pages.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Vercel", "SEO"],
    category: "fullstack",
    link: "https://fitzone-gym-42vj.vercel.app/",
    github: "https://github.com/ShakirUllah12/fitzone-gym",
    image: "/fitzone_gym.jpg",
  },
  {
    title: "Rising Star Digital Website",
    desc: "A corporate agency website for Rising Star Digital Company built with React and Tailwind CSS, featuring a sleek project portfolio, interactive contact portals, and fully responsive layouts.",
    tech: ["React", "Tailwind CSS", "Vercel", "SEO"],
    category: "frontend",
    link: "#",
    github: "https://github.com/ShakirUllah12/rising-star-digital",
    image: "/rising_star_digital.jpg",
  },
  {
    title: "AI Learning Assistant (PDF-Based)",
    desc: "A PDF-based AI learning assistant built with React, Node.js, Express, MongoDB, and OpenAI, enabling users to upload documents and generate smart summaries or ask questions.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "OpenAI"],
    category: "fullstack",
    link: "https://ai-learning-frontend-navy.vercel.app/login",
    github: "https://github.com/ShakirUllah12",
    image: "/ai_learning_assistant.png",
  },
  {
    title: "E-Commerce Platform",
    desc: "A full-stack e-commerce web application featuring Stripe payment processing, secure JWT authentication, and an administrative dashboard, built using React, Node.js, and MongoDB.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "fullstack",
    link: "#",
    github: "https://github.com/ShakirUllah12",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "MERN E-Commerce API",
    desc: "A robust backend RESTful API developed with Node.js, Express, and MongoDB, providing secure JWT user authentication, product catalog management, and order checkout flows.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    category: "backend",
    link: "#",
    github: "https://github.com/ShakirUllah12/mern-ecommerce",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Blog API",
    desc: "A RESTful backend API built using Node.js, Express, and MongoDB, supporting user registration, category filtering, and full CRUD operations for dynamic blogging systems.",
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    category: "backend",
    link: "#",
    github: "https://github.com/ShakirUllah12/blog-api",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Task Management App",
    desc: "A collaborative project and task management application built using React, Node.js, and Socket.io, featuring interactive drag-and-drop boards and real-time synchronization.",
    tech: ["React", "Express", "MongoDB", "Socket.io"],
    category: "fullstack",
    link: "#",
    github: "https://github.com/ShakirUllah12",
    image:
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Social Media Dashboard",
    desc: "A responsive analytics dashboard built with React and Chart.js that features dynamic data visualizations and multi-platform social media integrations.",
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
    category: "frontend",
    link: "#",
    github: "https://github.com/ShakirUllah12",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Real-Time Chat App",
    desc: "A real-time messaging application built with React, Node.js, Express, and Socket.io, supporting group chat rooms, file sharing, and video call capabilities.",
    tech: ["React", "Express", "MongoDB", "WebRTC"],
    category: "fullstack",
    link: "#",
    github: "https://github.com/ShakirUllah12",
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80",
  },
];

function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="projects-heading"
      style={{ position: "relative" }}
    >
      <div className="container">
        <p className="section-label">{"// Projects"}</p>

        <h2 id="projects-heading" className="section-title">
          Things I've Built<span>.</span>
        </h2>

        {/* Category Filter Tabs */}
        <div
          role="group"
          aria-label="Filter projects by category"
          style={{
            display: "flex",
            gap: 12,
            marginBottom: 40,
            flexWrap: "wrap",
            borderBottom: "1px solid var(--bg-card-border)",
            paddingBottom: 16,
          }}
        >
          {["all", "fullstack", "backend", "frontend"].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className="mono"
              style={{
                padding: "8px 16px",
                fontSize: 13,
                borderRadius: 20,
                border: "none",
                cursor: "pointer",
                backgroundColor:
                  filter === category
                    ? "var(--primary)"
                    : "var(--bg-secondary)",
                color:
                  filter === category
                    ? "var(--bg-primary)"
                    : "var(--text-secondary)",
                fontWeight: filter === category ? "600" : "500",
                transition: "all 0.2s ease",
              }}
            >
              {category === "all" ? "show_all()" : category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid-2">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              {/* Project Preview */}
              <div
                style={{
                  height: 200,
                  overflow: "hidden",
                  borderRadius: 8,
                  marginBottom: 20,
                  border: "1px solid var(--bg-card-border)",
                  backgroundColor: "var(--bg-secondary)",
                }}
              >
                <img
                  src={project.image || FALLBACK_IMAGE}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  decoding="async"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = FALLBACK_IMAGE;
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              {/* Project Title */}
              <h3
                className="bright"
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  marginBottom: 12,
                  color: "var(--text-primary)",
                }}
              >
                {project.title}
              </h3>

              {/* Project Description */}
              <p
                className="dim"
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.7,
                  marginBottom: 20,
                  color: "var(--text-secondary)",
                  flex: 1,
                }}
              >
                {project.desc}
              </p>

              {/* Technology Stack */}
              <div
                aria-label={`${project.title} technologies`}
                style={{
                  display: "flex",
                  gap: 6,
                  flexWrap: "wrap",
                  marginBottom: 24,
                }}
              >
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="mono"
                    style={{
                      fontSize: 11,
                      padding: "4px 10px",
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--bg-card-border)",
                      borderRadius: 4,
                      color: "var(--accent)",
                    }}
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  borderTop: "1px solid var(--bg-card-border)",
                  paddingTop: 16,
                }}
              >
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono accent"
                    style={{
                      fontSize: 13,
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      fontWeight: "600",
                    }}
                    aria-label={`View live demo of ${project.title}`}
                  >
                    🚀 Live Demo
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono primary"
                    style={{
                      fontSize: 13,
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      fontWeight: "600",
                    }}
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    🐙 GitHub
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

