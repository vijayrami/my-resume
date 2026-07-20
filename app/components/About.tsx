export default function About() {
    return (
        <section
            id="about"
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
                    About Me
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
                    I help enterprises build scalable, secure and high-performing
                    Adobe Commerce solutions through modern architecture,
                    cloud-native development, GraphQL APIs and technical
                    leadership.
                </p>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr",
                    gap: "50px",
                    alignItems: "start",
                }}
            >
                {/* Left Side */}

                <div>
                    <h3
                        style={{
                            marginBottom: "20px",
                        }}
                    >
                        My Journey
                    </h3>

                    <p
                        style={{
                            lineHeight: 1.9,
                            color: "#4B5563",
                            marginBottom: "25px",
                        }}
                    >
                        I'm an Adobe Commerce Technical Lead with more than
                        twelve years of software engineering experience and
                        extensive expertise in Adobe Commerce, Magento 2,
                        Commerce Cloud, GraphQL, enterprise integrations and
                        solution architecture.
                    </p>

                    <p
                        style={{
                            lineHeight: 1.9,
                            color: "#4B5563",
                            marginBottom: "25px",
                        }}
                    >
                        Throughout my career, I have delivered enterprise
                        eCommerce platforms for international brands, designed
                        scalable backend services, modernized checkout
                        experiences, integrated ERP and search platforms, and
                        successfully led Adobe Commerce upgrades while ensuring
                        platform stability and performance.
                    </p>

                    <p
                        style={{
                            lineHeight: 1.9,
                            color: "#4B5563",
                        }}
                    >
                        Beyond development, I enjoy mentoring engineers,
                        conducting architecture reviews, establishing coding
                        standards, and collaborating with stakeholders to
                        transform business requirements into reliable technical
                        solutions.
                    </p>
                </div>

                {/* Right Side */}

                <div
                    style={{
                        background: "#F9FAFB",
                        padding: "30px",
                        borderRadius: "16px",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                    }}
                >
                    <h3
                        style={{
                            marginBottom: "25px",
                            textAlign: "center",
                        }}
                    >
                        Quick Facts
                    </h3>

                    <table
                        style={{
                            width: "100%",
                            borderCollapse: "collapse",
                        }}
                    >
                        <tbody>
                            <tr>
                                <td
                                    style={{
                                        padding: "12px 0",
                                        fontWeight: 600,
                                    }}
                                >
                                    Experience
                                </td>

                                <td>12+ Years</td>
                            </tr>

                            <tr>
                                <td
                                    style={{
                                        padding: "12px 0",
                                        fontWeight: 600,
                                    }}
                                >
                                    Current Role
                                </td>

                                <td>Technical Lead</td>
                            </tr>

                            <tr>
                                <td
                                    style={{
                                        padding: "12px 0",
                                        fontWeight: 600,
                                    }}
                                >
                                    Specialization
                                </td>

                                <td>Adobe Commerce</td>
                            </tr>

                            <tr>
                                <td
                                    style={{
                                        padding: "12px 0",
                                        fontWeight: 600,
                                    }}
                                >
                                    Certifications
                                </td>

                                <td>4 Adobe</td>
                            </tr>

                            <tr>
                                <td
                                    style={{
                                        padding: "12px 0",
                                        fontWeight: 600,
                                    }}
                                >
                                    Leadership
                                </td>

                                <td>6+ Years</td>
                            </tr>

                            <tr>
                                <td
                                    style={{
                                        padding: "12px 0",
                                        fontWeight: 600,
                                    }}
                                >
                                    Location
                                </td>

                                <td>Ahmedabad, India</td>
                            </tr>

                            <tr>
                                <td
                                    style={{
                                        padding: "12px 0",
                                        fontWeight: 600,
                                    }}
                                >
                                    Open To
                                </td>

                                <td>Remote • Hybrid • Relocation</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Bottom Cards */}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
                    gap: "25px",
                    marginTop: "70px",
                }}
            >
                <div
                    style={{
                        background: "#FFFFFF",
                        padding: "25px",
                        borderRadius: "14px",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                    }}
                >
                    <h3>🏗 Solution Architecture</h3>

                    <p style={{ color: "#6B7280", lineHeight: 1.7 }}>
                        Designing scalable Adobe Commerce platforms,
                        integrations and cloud-native solutions.
                    </p>
                </div>

                <div
                    style={{
                        background: "#FFFFFF",
                        padding: "25px",
                        borderRadius: "14px",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                    }}
                >
                    <h3>⚙ Backend Engineering</h3>

                    <p style={{ color: "#6B7280", lineHeight: 1.7 }}>
                        Magento modules, GraphQL APIs, performance optimization,
                        indexing, queues and enterprise integrations.
                    </p>
                </div>

                <div
                    style={{
                        background: "#FFFFFF",
                        padding: "25px",
                        borderRadius: "14px",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                    }}
                >
                    <h3>👨‍💼 Technical Leadership</h3>

                    <p style={{ color: "#6B7280", lineHeight: 1.7 }}>
                        Team mentoring, architecture governance, Agile delivery,
                        estimation, code reviews and stakeholder collaboration.
                    </p>
                </div>

                <div
                    style={{
                        background: "#FFFFFF",
                        padding: "25px",
                        borderRadius: "14px",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                    }}
                >
                    <h3>☁ Cloud & DevOps</h3>

                    <p style={{ color: "#6B7280", lineHeight: 1.7 }}>
                        Adobe Commerce Cloud, Docker, CI/CD, Fastly, Redis,
                        RabbitMQ and production deployments.
                    </p>
                </div>
            </div>
        </section>
    );
}