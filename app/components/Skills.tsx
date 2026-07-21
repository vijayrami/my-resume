import {
    skillCategories,
    skillStatistics,
    SkillCategory,
} from "../data/skills";

export default function Skills() {
    return (
        <section
            id="skills"
            aria-labelledby="skills-heading"
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
                    id="skills-heading"
                    style={{
                        fontSize: "2.5rem",
                        marginBottom: "15px",
                    }}
                >
                    Technical Skills
                </h2>

                <p
                    style={{
                        color: "#6B7280",
                        maxWidth: "800px",
                        margin: "0 auto",
                        lineHeight: 1.8,
                        fontSize: "18px",
                    }}
                >
                    Technologies, platforms and tools I've used to design,
                    build and scale enterprise Adobe Commerce solutions.
                </p>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(340px,1fr))",
                    gap: "30px",
                }}
            >
                {skillCategories.map((category) => (
                    <div
                        key={category.title}
                        style={{
                            background: "#FFFFFF",
                            borderRadius: "16px",
                            padding: "28px",
                            boxShadow: "0 6px 20px rgba(0,0,0,.06)",
                            transition: "all .25s ease",
                        }}
                    >
                        <h3
                            style={{
                                marginBottom: "20px",
                                fontSize: "22px",
                            }}
                        >
                            {category.icon} {category.title}
                        </h3>

                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "12px",
                            }}
                        >
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    style={{
                                        padding: "8px 14px",
                                        background: "#EFF6FF",
                                        color: "#1D4ED8",
                                        borderRadius: "20px",
                                        fontSize: "14px",
                                        fontWeight: 500,
                                    }}
                                >
                                    {skill}
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
                    gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
                    gap: "25px",
                    textAlign: "center",
                }}
            >
                {skillStatistics.map((stat) => (
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