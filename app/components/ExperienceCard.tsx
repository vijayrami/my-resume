import "../styles/experience.css";

interface Experience {
    company: string;
    designation: string;
    period: string;
    location: string;
    technologies: string[];
    achievements: string[];
}

interface Props {
    experience: Experience;
    reverse?: boolean;
}

export default function ExperienceCard({
    experience,
}: Props) {
    return (
        <div className="experience-card">
            <h3>{experience.designation}</h3>

            <h2>{experience.company}</h2>

            <p>
                {experience.period} • {experience.location}
            </p>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    margin: "20px 0",
                }}
            >
                {experience.technologies.map((tech) => (
                    <span
                        key={tech}
                        style={{
                            padding: "6px 12px",
                            background: "#DBEAFE",
                            borderRadius: "20px",
                        }}
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <ul>
                {experience.achievements.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}