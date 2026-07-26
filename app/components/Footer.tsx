import { profile } from "../data/profile";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            style={{
                background: "#111827",
                color: "#FFFFFF",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "60px 20px 30px",
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
                        gap: "45px",
                        marginBottom: "45px",
                    }}
                >
                    {/* Brand */}
                    <div>
                        <h3
                            style={{
                                marginTop: 0,
                                marginBottom: "16px",
                                fontSize: "20px",
                                fontWeight: 700,
                            }}
                        >
                            {profile.name}
                        </h3>

                        <p
                            style={{
                                color: "#D1D5DB",
                                lineHeight: 1.8,
                                fontSize: "14.5px",
                            }}
                        >
                            {profile.summary}
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4
                            style={{
                                marginTop: 0,
                                marginBottom: "16px",
                                fontSize: "16px",
                                fontWeight: 700,
                            }}
                        >
                            Quick Links
                        </h4>

                        <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                            {[
                                { label: "About", href: "#about" },
                                { label: "Skills", href: "#skills" },
                                { label: "Experience", href: "#experience" },
                                { label: "Projects", href: "#projects" },
                                { label: "Certifications", href: "#certifications" },
                                { label: "Contact", href: "#contact" },
                            ].map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    style={{
                                        color: "#D1D5DB",
                                        textDecoration: "none",
                                        fontSize: "14.5px",
                                    }}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4
                            style={{
                                marginTop: 0,
                                marginBottom: "16px",
                                fontSize: "16px",
                                fontWeight: 700,
                            }}
                        >
                            Connect
                        </h4>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "13px",
                                color: "#D1D5DB",
                                fontSize: "14.5px",
                            }}
                        >
                            <a href={`mailto:${profile.email}`} style={{ color: "#D1D5DB", textDecoration: "none" }}>
                                📧 {profile.email}
                            </a>
                            <a href={profile.github} target="_blank" rel="noopener noreferrer" style={{ color: "#D1D5DB", textDecoration: "none" }}>
                                💻 GitHub
                            </a>
                            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "#D1D5DB", textDecoration: "none" }}>
                                💼 LinkedIn
                            </a>
                            <span>📍 {profile.location}</span>
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        borderTop: "1px solid #374151",
                        paddingTop: "26px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "12px",
                    }}
                >
                    <div style={{ color: "#9CA3AF", fontSize: "13.5px" }}>
                        © {currentYear} Vijay M. Rami. All Rights Reserved.
                    </div>
                    <div style={{ color: "#9CA3AF", fontSize: "13.5px" }}>
                        Built with Next.js • TypeScript • React
                    </div>
                </div>
            </div>
        </footer>
    );
}