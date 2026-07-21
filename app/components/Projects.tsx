import { projectStatistics, projects } from "../data/projects";

export default function Projects() {
    return (
        <section
            id="projects"
            style={{
                maxWidth: "1200px",
                margin: "60px auto",
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
                        fontSize: "18px",
                    }}
                >
                    Enterprise Adobe Commerce implementations where I've led
                    architecture, development and technical delivery for global
                    brands.
                </p>
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "35px",
                }}
            >
                {projects.map((project) => (
                    <div
                        key={project.company}
                        style={{
                            background: "#fff",
                            borderRadius: "18px",
                            padding: "35px",
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
                                <h2
                                    style={{
                                        marginBottom: "10px",
                                    }}
                                >
                                    {project.icon} {project.company}
                                </h2>

                                <h4
                                    style={{
                                        color: project.color,
                                        marginTop: 0,
                                    }}
                                >
                                    {project.role}
                                </h4>
                            </div>

                            <span
                                style={{
                                    background: "#F3F4F6",
                                    padding: "8px 16px",
                                    borderRadius: "20px",
                                    height: "fit-content",
                                }}
                            >
                                {project.duration}
                            </span>
                        </div>

                        <p
                            style={{
                                color: "#4B5563",
                                lineHeight: 1.8,
                                marginTop: "20px",
                            }}
                        >
                            {project.description}
                        </p>

                        <h4>Key Contributions</h4>

                        <ul
                            style={{
                                lineHeight: 2,
                                color: "#374151",
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
                                marginTop: "25px",
                            }}
                        >
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    style={{
                                        background: "#EFF6FF",
                                        color: "#2563EB",
                                        padding: "8px 14px",
                                        borderRadius: "20px",
                                        fontSize: "14px",
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

            <div
                style={{
                    marginTop: "70px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                    gap: "25px",
                    textAlign: "center",
                }}
            >
                {projectStatistics.map((stat) => (
                    <div
                        key={stat.label}
                        style={{
                            background: stat.background,
                            color: "#fff",
                            padding: "30px",
                            borderRadius: "16px",
                        }}
                    >
                        <h2 style={{ margin: 0 }}>{stat.value}</h2>

                        <p>{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}