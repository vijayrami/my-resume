export default function About() {
    return (
        <section
            id="about"
            style={{
                background: "#EFF6FF",
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
                {/* Heading */}
                <div style={{ textAlign: "center", marginBottom: "60px" }}>
                    <h2
                        style={{
                            fontSize: "2.5rem",
                            fontWeight: 700,
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
                            fontSize: "17px",
                        }}
                    >
                        I help enterprises build scalable, secure and high-performing
                        Adobe Commerce solutions through modern architecture,
                        cloud-native development, GraphQL APIs and technical
                        leadership.
                    </p>
                </div>

                {/* Journey + Quick Facts */}
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
                                marginBottom: "18px",
                                fontSize: "22px",
                                fontWeight: 700,
                            }}
                        >
                            My Journey
                        </h3>

                        <p
                            style={{
                                lineHeight: 1.85,
                                color: "#4B5563",
                                fontSize: "15.5px",
                                marginBottom: "20px",
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
                                lineHeight: 1.85,
                                color: "#4B5563",
                                fontSize: "15.5px",
                                marginBottom: "20px",
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
                                lineHeight: 1.85,
                                color: "#4B5563",
                                fontSize: "15.5px",
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
                            padding: "28px",
                            borderRadius: "16px",
                            boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                        }}
                    >
                        <h3
                            style={{
                                marginBottom: "20px",
                                textAlign: "center",
                                fontSize: "18px",
                                fontWeight: 700,
                            }}
                        >
                            Quick Facts
                        </h3>

                        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14.5px" }}>
                            <tbody>
                                <tr>
                                    <td style={{ padding: "10px 0", fontWeight: 600 }}>Experience</td>
                                    <td style={{ padding: "10px 0" }}>14+ Years</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "10px 0", fontWeight: 600 }}>Current Role</td>
                                    <td style={{ padding: "10px 0" }}>Technical Lead</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "10px 0", fontWeight: 600 }}>Specialization</td>
                                    <td style={{ padding: "10px 0" }}>Adobe Commerce</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "10px 0", fontWeight: 600 }}>Certifications</td>
                                    <td style={{ padding: "10px 0" }}>4× Adobe Certifications</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "10px 0", fontWeight: 600 }}>Leadership</td>
                                    <td style={{ padding: "10px 0" }}>6+ Years</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "10px 0", fontWeight: 600 }}>Location</td>
                                    <td style={{ padding: "10px 0" }}>Ahmedabad, India</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "10px 0", fontWeight: 600 }}>Open To</td>
                                    <td style={{ padding: "10px 0" }}>Remote • Hybrid • Ready to Relocate</td>
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
                        gap: "22px",
                        marginTop: "60px",
                    }}
                >
                    {[
                        { icon: "🏗", title: "Solution Architecture", text: "Designing scalable Adobe Commerce platforms, integrations and cloud-native solutions." },
                        { icon: "⚙", title: "Backend Engineering", text: "Magento modules, GraphQL APIs, performance optimization, indexing, queues and enterprise integrations." },
                        { icon: "👨‍💼", title: "Technical Leadership", text: "Team mentoring, architecture governance, Agile delivery, estimation, code reviews and stakeholder collaboration." },
                        { icon: "☁", title: "Cloud & DevOps", text: "Adobe Commerce Cloud, Docker, CI/CD, Fastly, Redis, RabbitMQ and production deployments." },
                    ].map((card) => (
                        <div
                            key={card.title}
                            style={{
                                background: "#FFFFFF",
                                padding: "22px",
                                borderRadius: "14px",
                                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                            }}
                        >
                            <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "10px" }}>
                                {card.icon} {card.title}
                            </h3>
                            <p style={{ color: "#6B7280", lineHeight: 1.7, fontSize: "14px", margin: 0 }}>
                                {card.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}