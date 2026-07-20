export default function Hero() {
    const highlights = [
        "12+ Years Experience",
        "4× Adobe Certified",
        "Adobe Commerce Architect",
        "Commerce Cloud Expert",
        "GraphQL Specialist",
        "Team Lead",
    ];

    return (
        <section
            style={{
                maxWidth: "1200px",
                margin: "60px auto",
                padding: "0 20px",
            }}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr",
                    gap: "50px",
                    alignItems: "center",
                }}
            >
                {/* Left Side */}
                <div>
                    <span
                        style={{
                            display: "inline-block",
                            background: "#DBEAFE",
                            color: "#1D4ED8",
                            padding: "8px 18px",
                            borderRadius: "20px",
                            fontWeight: 600,
                            marginBottom: "20px",
                        }}
                    >
                        Available for Technical Lead & Solution Architect Roles
                    </span>

                    <h2
                        style={{
                            fontSize: "3rem",
                            marginBottom: "20px",
                            lineHeight: 1.2,
                        }}
                    >
                        Building Enterprise
                        <br />
                        Adobe Commerce Solutions
                    </h2>

                    <p
                        style={{
                            fontSize: "18px",
                            color: "#4B5563",
                            lineHeight: 1.8,
                            marginBottom: "35px",
                        }}
                    >
                        I specialize in designing scalable Adobe Commerce
                        solutions, modern GraphQL APIs, Commerce Cloud
                        deployments, enterprise integrations, and
                        high-performance Magento architectures for global
                        retailers. My focus is delivering business value through
                        clean architecture, technical leadership, and
                        engineering excellence.
                    </p>

                    <div
                        style={{
                            display: "flex",
                            gap: "15px",
                            flexWrap: "wrap",
                        }}
                    >
                        <a
                            href="#experience"
                            style={{
                                background: "#2563EB",
                                color: "#fff",
                                textDecoration: "none",
                                padding: "14px 28px",
                                borderRadius: "8px",
                                fontWeight: 600,
                            }}
                        >
                            View Experience
                        </a>

                        <a
                            href="/Vijay_Rami_Resume.pdf"
                            target="_blank"
                            style={{
                                border: "2px solid #2563EB",
                                color: "#2563EB",
                                textDecoration: "none",
                                padding: "14px 28px",
                                borderRadius: "8px",
                                fontWeight: 600,
                            }}
                        >
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* Right Side */}
                <div
                    style={{
                        background: "#F9FAFB",
                        padding: "30px",
                        borderRadius: "16px",
                        boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
                    }}
                >
                    <h3
                        style={{
                            marginBottom: "25px",
                            textAlign: "center",
                        }}
                    >
                        Professional Highlights
                    </h3>

                    {highlights.map((item) => (
                        <div
                            key={item}
                            style={{
                                padding: "12px 16px",
                                marginBottom: "12px",
                                background: "#fff",
                                borderRadius: "8px",
                                borderLeft: "5px solid #2563EB",
                                fontWeight: 500,
                            }}
                        >
                            ✔ {item}
                        </div>
                    ))}

                    <hr
                        style={{
                            margin: "25px 0",
                            border: "none",
                            borderTop: "1px solid #E5E7EB",
                        }}
                    />

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2,1fr)",
                            gap: "20px",
                            textAlign: "center",
                        }}
                    >
                        <div>
                            <h2
                                style={{
                                    color: "#2563EB",
                                    margin: 0,
                                }}
                            >
                                12+
                            </h2>
                            <small>Years Experience</small>
                        </div>

                        <div>
                            <h2
                                style={{
                                    color: "#2563EB",
                                    margin: 0,
                                }}
                            >
                                40+
                            </h2>
                            <small>Enterprise Projects</small>
                        </div>

                        <div>
                            <h2
                                style={{
                                    color: "#2563EB",
                                    margin: 0,
                                }}
                            >
                                4
                            </h2>
                            <small>Adobe Certifications</small>
                        </div>

                        <div>
                            <h2
                                style={{
                                    color: "#2563EB",
                                    margin: 0,
                                }}
                            >
                                6+
                            </h2>
                            <small>Years Magento Leadership</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}