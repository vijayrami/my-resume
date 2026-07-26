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

                <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                    {projects.map((project) => (
                        <div
                            key={project.company}
                            style={{
                                background: "#FFFFFF",
                                borderRadius: "18px",
                                padding: "32px",
                                boxShadow: "0 6px 20px rgba(0,0,0,.06)",
                                borderLeft: `6px solid ${project.color}`,
                                transition: "all .25s ease",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    flexWrap: "wrap",
                                    gap: "20px",
                                }}
                            >
                                <div>
                                    <h3
                                        style={{
                                            fontSize: "22px",
                                            fontWeight: 700,
                                            marginBottom: "8px",
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
                                        }}
                                    >
                                        {project.role}
                                    </h4>
                                </div>

                                <span
                                    style={{
                                        background: "#F3F4F6",
                                        padding: "7px 15px",
                                        borderRadius: "20px",
                                        height: "fit-content",
                                        fontSize: "13.5px",
                                        color: "#4B5563",
                                        fontWeight: 500,
                                    }}
                                >
                                    {project.duration}
                                </span>
                            </div>

                            <p
                                style={{
                                    color: "#4B5563",
                                    lineHeight: 1.8,
                                    fontSize: "15px",
                                    marginTop: "18px",
                                }}
                            >
                                {project.description}
                            </p>

                            <h4
                                style={{
                                    fontSize: "15px",
                                    fontWeight: 700,
                                    marginBottom: "8px",
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
                                    gap: "10px",
                                    marginTop: "20px",
                                }}
                            >
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        style={{
                                            background: "#EFF6FF",
                                            color: "#2563EB",
                                            padding: "7px 13px",
                                            borderRadius: "20px",
                                            fontSize: "13.5px",
                                            fontWeight: 500,
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