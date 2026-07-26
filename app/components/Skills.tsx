import { skillCategories } from "../data/skills";

export default function Skills() {
    return (
        <section
            id="skills"
            aria-labelledby="skills-heading"
            style={{
                background: "#FFFFFF",
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
                        id="skills-heading"
                        style={{
                            fontSize: "2.5rem",
                            fontWeight: 700,
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
                            fontSize: "17px",
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
                        gap: "26px",
                    }}
                >
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            style={{
                                background: "#FFFFFF",
                                border: "1px solid #F3F4F6",
                                borderRadius: "16px",
                                padding: "26px",
                                boxShadow: "0 6px 20px rgba(0,0,0,.06)",
                                transition: "all .25s ease",
                            }}
                        >
                            <h3
                                style={{
                                    marginBottom: "18px",
                                    fontSize: "19px",
                                    fontWeight: 700,
                                }}
                            >
                                {category.icon} {category.title}
                            </h3>

                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "10px",
                                }}
                            >
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        style={{
                                            padding: "7px 13px",
                                            background: "#EFF6FF",
                                            color: "#1D4ED8",
                                            borderRadius: "20px",
                                            fontSize: "13.5px",
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
            </div>
        </section>
    );
}