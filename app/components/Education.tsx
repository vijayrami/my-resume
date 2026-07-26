export default function Education() {
    return (
        <section
            id="education"
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
                        style={{
                            fontSize: "2.5rem",
                            fontWeight: 700,
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
                            fontSize: "17px",
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
                        gap: "26px",
                    }}
                >
                    {/* Degree Card */}
                    <div
                        style={{
                            background: "#FFFFFF",
                            border: "1px solid #F3F4F6",
                            borderRadius: "18px",
                            padding: "32px",
                            boxShadow: "0 6px 20px rgba(0,0,0,.06)",
                            borderLeft: "6px solid #2563EB",
                            transition: "all .25s ease",
                        }}
                    >
                        <div style={{ fontSize: "42px", marginBottom: "16px" }}>🎓</div>

                        <h3
                            style={{
                                fontSize: "21px",
                                fontWeight: 700,
                                marginBottom: "8px",
                            }}
                        >
                            Bachelor of Engineering
                        </h3>

                        <h4
                            style={{
                                margin: 0,
                                marginBottom: "14px",
                                color: "#2563EB",
                                fontWeight: 600,
                                fontSize: "15px",
                            }}
                        >
                            Electronics & Communication
                        </h4>

                        <p
                            style={{
                                color: "#6B7280",
                                marginBottom: "20px",
                                lineHeight: 1.7,
                                fontSize: "14.5px",
                            }}
                        >
                            Sardar Vallabhbhai Patel Institute of Technology
                            (SVIT), Vasad — Gujarat University
                        </p>

                        <span
                            style={{
                                display: "inline-block",
                                background: "#EFF6FF",
                                color: "#2563EB",
                                padding: "7px 16px",
                                borderRadius: "20px",
                                fontWeight: 600,
                                fontSize: "13.5px",
                            }}
                        >
                            Engineering Graduate
                        </span>
                    </div>

                    {/* Continuous Learning Card */}
                    <div
                        style={{
                            background: "#111827",
                            color: "#FFFFFF",
                            borderRadius: "18px",
                            padding: "32px",
                        }}
                    >
                        <div style={{ fontSize: "42px", marginBottom: "16px" }}>📚</div>

                        <h3
                            style={{
                                fontSize: "21px",
                                fontWeight: 700,
                                marginBottom: "20px",
                            }}
                        >
                            Continuous Learning
                        </h3>

                        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                            {[
                                "Adobe Commerce Architecture",
                                "Adobe Commerce Cloud",
                                "GraphQL & API Development",
                                "Adobe App Builder & API Mesh",
                                "Enterprise Solution Architecture",
                                "Leadership & Agile Delivery",
                            ].map((item) => (
                                <div key={item} style={{ fontSize: "14.5px", color: "#E5E7EB" }}>
                                    ✅ {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Learning Philosophy */}
                <div
                    style={{
                        marginTop: "60px",
                        background: "#F9FAFB",
                        borderRadius: "20px",
                        padding: "32px",
                        textAlign: "center",
                    }}
                >
                    <h3
                        style={{
                            color: "#2563EB",
                            fontWeight: 700,
                            fontSize: "22px",
                            marginBottom: "15px",
                        }}
                    >
                        Learning Philosophy
                    </h3>

                    <p
                        style={{
                            maxWidth: "850px",
                            margin: "0 auto",
                            lineHeight: 1.85,
                            color: "#4B5563",
                            fontSize: "15.5px",
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
            </div>
        </section>
    );
}