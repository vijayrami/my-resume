export default function Education() {
    return (
        <section
            id="education"
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
                    Education & Continuous Learning
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
                    A strong academic foundation combined with continuous
                    professional learning has helped me stay current with modern
                    Adobe Commerce technologies, enterprise architecture and
                    cloud solutions.
                </p>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(380px,1fr))",
                    gap: "35px",
                }}
            >
                <div
                    style={{
                        background: "#FFFFFF",
                        borderRadius: "18px",
                        padding: "35px",
                        boxShadow: "0 6px 20px rgba(0,0,0,.06)",
                        borderLeft: "6px solid #2563EB",
                        transition: "all .25s ease",
                    }}
                >
                    <div
                        style={{
                            fontSize: "48px",
                            marginBottom: "20px",
                        }}
                    >
                        🎓
                    </div>

                    <h2
                        style={{
                            marginBottom: "10px",
                        }}
                    >
                        Bachelor of Engineering
                    </h2>

                    <h3
                        style={{
                            marginTop: 0,
                            color: "#2563EB",
                            fontWeight: 600,
                        }}
                    >
                        Information Technology
                    </h3>

                    <p
                        style={{
                            color: "#6B7280",
                            marginBottom: "25px",
                            lineHeight: 1.8,
                        }}
                    >
                        Gujarat Technological University (GTU)
                    </p>

                    <span
                        style={{
                            display: "inline-block",
                            background: "#EFF6FF",
                            color: "#2563EB",
                            padding: "8px 18px",
                            borderRadius: "20px",
                            fontWeight: 600,
                        }}
                    >
                        Engineering Graduate
                    </span>
                </div>

                <div
                    style={{
                        background: "#111827",
                        color: "#FFFFFF",
                        borderRadius: "18px",
                        padding: "35px",
                    }}
                >
                    <div
                        style={{
                            fontSize: "48px",
                            marginBottom: "20px",
                        }}
                    >
                        📚
                    </div>

                    <h2
                        style={{
                            marginBottom: "25px",
                        }}
                    >
                        Continuous Learning
                    </h2>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "18px",
                        }}
                    >
                        <div>
                            ✅ Adobe Commerce Architecture
                        </div>

                        <div>
                            ✅ Adobe Commerce Cloud
                        </div>

                        <div>
                            ✅ GraphQL & API Development
                        </div>

                        <div>
                            ✅ Adobe App Builder & API Mesh
                        </div>

                        <div>
                            ✅ Enterprise Solution Architecture
                        </div>

                        <div>
                            ✅ Leadership & Agile Delivery
                        </div>
                    </div>
                </div>
            </div>

            <div
                style={{
                    marginTop: "70px",
                    background: "#F9FAFB",
                    borderRadius: "20px",
                    padding: "35px",
                    textAlign: "center",
                }}
            >
                <h2
                    style={{
                        color: "#2563EB",
                        marginBottom: "15px",
                    }}
                >
                    Learning Philosophy
                </h2>

                <p
                    style={{
                        maxWidth: "850px",
                        margin: "0 auto",
                        lineHeight: 1.9,
                        color: "#4B5563",
                        fontSize: "17px",
                    }}
                >
                    Technology evolves rapidly, especially in enterprise
                    eCommerce. I continuously invest in learning new Adobe
                    Commerce features, cloud technologies, architecture
                    patterns, performance optimization techniques and emerging
                    development practices to deliver scalable, secure and
                    future-ready solutions.
                </p>
            </div>
        </section>
    );
}