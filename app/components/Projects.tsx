"use client";

import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section
            id="projects"
            style={{
                background: "#F3FDF9",
                padding: "80px 0",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "0 20px",
                }}
            >
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "60px",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "2.5rem",
                            fontWeight: 700,
                            marginBottom: "15px",
                        }}
                    >
                        Featured Enterprise Projects
                    </h2>

                    <p
                        style={{
                            maxWidth: "800px",
                            margin: "0 auto",
                            color: "#6B7280",
                            lineHeight: 1.8,
                            fontSize: "17px",
                        }}
                    >
                        Enterprise Adobe Commerce implementations where I've led
                        architecture, development and technical delivery for global
                        brands.
                    </p>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                        gap: "28px",
                    }}
                >
                    {projects.map((project) => (
                        <div
                            key={project.company}
                            style={{
                                background: "#FFFFFF",
                                borderRadius: "22px",
                                padding: "28px 28px 24px",
                                boxShadow: "0 14px 35px rgba(15, 23, 42, 0.08)",
                                border: "1px solid rgba(148, 163, 184, 0.16)",
                                borderLeft: `6px solid ${project.color}`,
                                transition: "all .25s ease",
                                transform: "translateY(0)",
                            }}
                            onMouseEnter={(event) => {
                                event.currentTarget.style.transform = "translateY(-4px)";
                                event.currentTarget.style.boxShadow = "0 18px 40px rgba(15, 23, 42, 0.12)";
                            }}
                            onMouseLeave={(event) => {
                                event.currentTarget.style.transform = "translateY(0)";
                                event.currentTarget.style.boxShadow = "0 14px 35px rgba(15, 23, 42, 0.08)";
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    flexWrap: "wrap",
                                    gap: "16px",
                                }}
                            >
                                <div>
                                    <h3
                                        style={{
                                            fontSize: "22px",
                                            fontWeight: 700,
                                            marginBottom: "8px",
                                            color: "#0F172A",
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        {project.icon} {project.company}
                                    </h3>

                                    <h4
                                        style={{
                                            color: project.color,
                                            fontSize: "15px",
                                            fontWeight: 600,
                                            margin: 0,
                                            letterSpacing: "0.01em",
                                        }}
                                    >
                                        {project.role}
                                    </h4>
                                </div>

                                <span
                                    style={{
                                        background: "#F8FAFC",
                                        padding: "7px 12px",
                                        borderRadius: "999px",
                                        height: "fit-content",
                                        fontSize: "12.5px",
                                        color: "#475569",
                                        fontWeight: 600,
                                        border: "1px solid rgba(148, 163, 184, 0.18)",
                                        letterSpacing: "0.02em",
                                    }}
                                >
                                    {project.duration}
                                </span>
                            </div>

                            <p
                                style={{
                                    color: "#475569",
                                    lineHeight: 1.8,
                                    fontSize: "15px",
                                    marginTop: "18px",
                                    marginBottom: "18px",
                                }}
                            >
                                {project.description}
                            </p>

                            <h4
                                style={{
                                    fontSize: "14px",
                                    fontWeight: 700,
                                    marginBottom: "10px",
                                    color: "#0F172A",
                                    letterSpacing: "0.02em",
                                    textTransform: "uppercase",
                                }}
                            >
                                Key Contributions
                            </h4>

                            <ul
                                style={{
                                    lineHeight: 1.9,
                                    color: "#374151",
                                    fontSize: "14.5px",
                                    paddingLeft: "20px",
                                    margin: "0 0 20px",
                                }}
                            >
                                {project.highlights.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>

                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "8px",
                                }}
                            >
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        style={{
                                            background: "#EFF6FF",
                                            color: "#2563EB",
                                            padding: "6px 10px",
                                            borderRadius: "999px",
                                            fontSize: "12.5px",
                                            fontWeight: 600,
                                            border: "1px solid rgba(37, 99, 235, 0.08)",
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}