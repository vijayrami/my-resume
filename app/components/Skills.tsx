const skillCategories = [
    {
        title: "Adobe Commerce",
        icon: "🛒",
        skills: [
            "Adobe Commerce",
            "Magento 2",
            "Adobe Commerce Cloud",
            "Magento Open Source",
            "B2B Commerce",
            "Shared Catalog",
            "Purchase Order",
            "Security Patching",
            "Platform Upgrades",
        ],
    },
    {
        title: "Backend Development",
        icon: "⚙",
        skills: [
            "PHP 8.x",
            "GraphQL",
            "REST APIs",
            "MySQL",
            "Redis",
            "RabbitMQ",
            "OpenSearch",
            "Elasticsearch",
            "API Mesh",
            "Adobe App Builder",
        ],
    },
    {
        title: "Frontend",
        icon: "💻",
        skills: [
            "React.js",
            "PWA Studio",
            "JavaScript",
            "TypeScript",
            "Knockout.js",
            "HTML5",
            "CSS3",
            "AJAX",
            "jQuery",
        ],
    },
    {
        title: "Cloud & DevOps",
        icon: "☁",
        skills: [
            "AWS",
            "Docker",
            "Git",
            "CI/CD",
            "Fastly CDN",
            "Jenkins",
            "Linux",
        ],
    },
    {
        title: "Integrations",
        icon: "🔗",
        skills: [
            "SAP",
            "Constructor.io",
            "Algolia",
            "ERP Integration",
            "Payment Gateway",
            "Taxation",
            "OMS",
            "XML Feeds",
        ],
    },
    {
        title: "Leadership",
        icon: "👨‍💼",
        skills: [
            "Solution Architecture",
            "Technical Leadership",
            "Agile",
            "Code Reviews",
            "Mentoring",
            "Sprint Planning",
            "Estimation",
            "Stakeholder Management",
        ],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            style={{
                maxWidth: "1200px",
                margin: "100px auto",
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
                <div
                    style={{
                        background: "#2563EB",
                        color: "#fff",
                        padding: "30px",
                        borderRadius: "16px",
                    }}
                >
                    <h2 style={{ margin: 0 }}>12+</h2>
                    <p>Years Experience</p>
                </div>

                <div
                    style={{
                        background: "#059669",
                        color: "#fff",
                        padding: "30px",
                        borderRadius: "16px",
                    }}
                >
                    <h2 style={{ margin: 0 }}>4×</h2>
                    <p>Adobe Certified</p>
                </div>

                <div
                    style={{
                        background: "#7C3AED",
                        color: "#fff",
                        padding: "30px",
                        borderRadius: "16px",
                    }}
                >
                    <h2 style={{ margin: 0 }}>40+</h2>
                    <p>Enterprise Projects</p>
                </div>

                <div
                    style={{
                        background: "#EA580C",
                        color: "#fff",
                        padding: "30px",
                        borderRadius: "16px",
                    }}
                >
                    <h2 style={{ margin: 0 }}>6+</h2>
                    <p>Years Leadership</p>
                </div>
            </div>
        </section>
    );
}