import "../styles/experience.css";

interface Experience {
    company: string;
    designation: string;
    period: string;
    location: string;
    technologies: string[];
    achievements: string[];
    color?: string;
}

interface Props {
    experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
    return (
        <div
            className="experience-card"
            style={{ "--accent-color": experience.color || "#2563EB" } as React.CSSProperties}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "20px",
                    marginBottom: "10px",
                }}
            >
                <div>
                    <h3 style={{ fontSize: "22px", marginBottom: "6px" }}>
                        {experience.designation}
                    </h3>
                    <h4 style={{ color: experience.color || "#2563EB", margin: 0 }}>
                        {experience.company}
                    </h4>
                </div>

                <span
                    style={{
                        background: "#F3F4F6",
                        padding: "8px 16px",
                        borderRadius: "20px",
                        height: "fit-content",
                        fontSize: "14px",
                        color: "#4B5563",
                    }}
                >
                    {experience.period} • {experience.location}
                </span>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", margin: "20px 0" }}>
                {experience.technologies.map((tech) => (
                    <span
                        key={tech}
                        style={{
                            padding: "8px 14px",
                            background: "#EFF6FF",
                            color: "#2563EB",
                            borderRadius: "20px",
                            fontSize: "14px",
                            fontWeight: 500,
                        }}
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <ul style={{ lineHeight: 2, color: "#374151", paddingLeft: "20px" }}>
                {experience.achievements.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}