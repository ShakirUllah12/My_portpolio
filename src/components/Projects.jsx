
import React, { useState } from "react";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";

const projects = [
  {
    title: "FitZone Gym",
    desc: "A full-stack gym website built with the MERN stack (MongoDB, Express, React, Node.js). Features dynamic services and trainers pages powered by a REST API, SEO optimization (meta tags, structured data, sitemap, Google Search Console integration), and a fully responsive design.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Vercel", "SEO"],
    category: "fullstack",
    link: "https://fitzone-gym-42vj.vercel.app/",
    github: "https://github.com/ShakirUllah12/fitzone-gym",
    image: "/fitzone_gym.jpg",
  },
  {
    title: "Rising Star Digital Website",
    desc: "The corporate agency website for Rising Star Digital Company, optimized for speed, performance, and SEO. Features a sleek, modern portfolio showcase, contact portals, services descriptions, and full mobile responsiveness.",
    tech: ["React", "Tailwind CSS", "Vercel", "SEO"],
    category: "frontend",
    link: "#",
    github: "https://github.com/ShakirUllah12/rising-star-digital",
    image: "/rising_star_digital.jpg",
  },
  {
    title: "AI Learning Assistant (PDF-Based)",
    desc: "A Final Year Project that lets users upload PDFs and interact with an AI to learn from their content, generate summaries, and ask questions.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "OpenAI"],
    category: "fullstack",
    link: "https://ai-learning-frontend-navy.vercel.app/login",
    github: "https://github.com/ShakirUllah12",
    image: "/ai_learning_assistant.png",
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-stack MERN e-commerce app with Stripe payments, JWT auth, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "fullstack",
    link: "#",
    github: "https://github.com/ShakirUllah12",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "MERN E-Commerce API",
    desc: "A robust backend RESTful API containing secure JWT user authentication, product management, and order checkout flows.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    category: "backend",
    link: "#",
    github: "https://github.com/ShakirUllah12/mern-ecommerce",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Blog API",
    desc: "RESTful API built with Express supporting complete CRUD operations, category filters, and user registration for dynamic blogs.",
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    category: "backend",
    link: "#",
    github: "https://github.com/ShakirUllah12/blog-api",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Task Management App",
    desc: "Collaborative project management tool with drag-and-drop and real-time updates.",
    tech: ["React", "Express", "MongoDB", "Socket.io"],
    category: "fullstack",
    link: "#",
    github: "https://github.com/ShakirUllah12",
    image:
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Social Media Dashboard",
    desc: "Analytics dashboard with data visualization and multi-platform integration.",
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
    category: "frontend",
    link: "#",
    github: "https://github.com/ShakirUllah12",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Real-Time Chat App",
    desc: "Messaging app with file sharing, group chats, and video calling.",
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

