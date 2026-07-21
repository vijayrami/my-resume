import { profile } from "../data/profile";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            style={{
                marginTop: "60px",
                background: "#111827",
                color: "#FFFFFF",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "70px 20px 35px",
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(280px,1fr))",
                        gap: "50px",
                        marginBottom: "50px",
                    }}
                >
                    {/* Brand */}

                    <div>
                        <h2
                            style={{
                                marginTop: 0,
                                marginBottom: "18px",
                            }}
                        >
                            {profile.name}
                        </h2>

                        <p
                            style={{
                                color: "#D1D5DB",
                                lineHeight: 1.8,
                            }}
                        >
                            {profile.summary}
                        </p>
                    </div>

                    {/* Navigation */}

                    <div>
                        <h3
                            style={{
                                marginTop: 0,
                                marginBottom: "18px",
                            }}
                        >
                            Quick Links
                        </h3>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px",
                            }}
                        >
                            <a
                                href="#about"
                                style={{
                                    color: "#D1D5DB",
                                    textDecoration: "none",
                                }}
                            >
                                About
                            </a>

                            <a
                                href="#skills"
                                style={{
                                    color: "#D1D5DB",
                                    textDecoration: "none",
                                }}
                            >
                                Skills
                            </a>

                            <a
                                href="#experience"
                                style={{
                                    color: "#D1D5DB",
                                    textDecoration: "none",
                                }}
                            >
                                Experience
                            </a>

                            <a
                                href="#projects"
                                style={{
                                    color: "#D1D5DB",
                                    textDecoration: "none",
                                }}
                            >
                                Projects
                            </a>

                            <a
                                href="#certifications"
                                style={{
                                    color: "#D1D5DB",
                                    textDecoration: "none",
                                }}
                            >
                                Certifications
                            </a>

                            <a
                                href="#contact"
                                style={{
                                    color: "#D1D5DB",
                                    textDecoration: "none",
                                }}
                            >
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Contact */}

                    <div>
                        <h3
                            style={{
                                marginTop: 0,
                                marginBottom: "18px",
                            }}
                        >
                            Connect
                        </h3>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "14px",
                                color: "#D1D5DB",
                            }}
                        >
                            <a
                                href={`mailto:${profile.email}`}
                                style={{
                                    color: "#D1D5DB",
                                    textDecoration: "none",
                                }}
                            >
                                📧 {profile.email}
                            </a>

                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: "#D1D5DB",
                                    textDecoration: "none",
                                }}
                            >
                                💻 GitHub
                            </a>

                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: "#D1D5DB",
                                    textDecoration: "none",
                                }}
                            >
                                💼 LinkedIn
                            </a>

                            <span>📍 {profile.location}</span>
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        borderTop: "1px solid #374151",
                        paddingTop: "30px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "15px",
                    }}
                >
                    <div
                        style={{
                            color: "#9CA3AF",
                        }}
                    >
                        © {currentYear} Vijay M. Rami. All Rights Reserved.
                    </div>

                    <div
                        style={{
                            color: "#9CA3AF",
                        }}
                    >
                        Built with Next.js • TypeScript • React
                    </div>
                </div>
            </div>
        </footer>
    );
}