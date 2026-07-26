import { profile } from "../data/profile";

export default function Contact() {
    return (
        <section
            id="contact"
            style={{
                background: "#1E293B",
                padding: "80px 0",
            }}
        >
            <div
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    padding: "0 20px",
                }}
            >
                <div
                    style={{
                        background: "linear-gradient(135deg,#2563EB,#1E40AF)",
                        borderRadius: "24px",
                        padding: "55px 40px",
                        color: "#FFFFFF",
                        textAlign: "center",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "2.5rem",
                            fontWeight: 700,
                            marginBottom: "18px",
                        }}
                    >
                        Let's Build Something Amazing
                    </h2>

                    <p
                        style={{
                            maxWidth: "700px",
                            margin: "0 auto 36px",
                            fontSize: "16.5px",
                            lineHeight: 1.8,
                            opacity: 0.95,
                        }}
                    >
                        {profile.contactMessage}
                    </p>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
                            gap: "18px",
                            marginBottom: "36px",
                        }}
                    >
                        <div
                            style={{
                                background: "rgba(255,255,255,.12)",
                                padding: "22px",
                                borderRadius: "16px",
                            }}
                        >
                            <div style={{ fontSize: "28px", marginBottom: "8px" }}>📧</div>
                            <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "6px" }}>
                                Email
                            </h3>
                            <a
                                href={`mailto:${profile.email}`}
                                style={{ color: "#FFFFFF", textDecoration: "none", fontSize: "14.5px" }}
                            >
                                {profile.email}
                            </a>
                        </div>

                        <div
                            style={{
                                background: "rgba(255,255,255,.12)",
                                padding: "22px",
                                borderRadius: "16px",
                            }}
                        >
                            <div style={{ fontSize: "28px", marginBottom: "8px" }}>📱</div>
                            <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "6px" }}>
                                Phone
                            </h3>
                            <a
                                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                                style={{ color: "#FFFFFF", textDecoration: "none", fontSize: "14.5px" }}
                            >
                                {profile.phone}
                            </a>
                        </div>

                        <div
                            style={{
                                background: "rgba(255,255,255,.12)",
                                padding: "22px",
                                borderRadius: "16px",
                            }}
                        >
                            <div style={{ fontSize: "28px", marginBottom: "8px" }}>📍</div>
                            <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "6px" }}>
                                Location
                            </h3>
                            <p style={{ fontSize: "14.5px", margin: 0 }}>{profile.location}</p>
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            gap: "18px",
                        }}
                    >
                        <a   
                            href={profile.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: "13px 24px",
                                background: "#111827",
                                color: "#FFFFFF",
                                textDecoration: "none",
                                borderRadius: "10px",
                                fontWeight: 600,
                                fontSize: "14.5px",
                                transition: "all .25s ease",
                            }}
                        >
                            GitHub
                        </a>
                        <a
                        
                            href={profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: "13px 24px",
                                background: "#FFFFFF",
                                color: "#2563EB",
                                textDecoration: "none",
                                borderRadius: "10px",
                                fontWeight: 600,
                                fontSize: "14.5px",
                                transition: "all .25s ease",
                            }}
                        >
                            LinkedIn
                        </a>
                        <a
                        
                            href={profile.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: "13px 24px",
                                background: "#059669",
                                color: "#FFFFFF",
                                textDecoration: "none",
                                borderRadius: "10px",
                                fontWeight: 600,
                                fontSize: "14.5px",
                                transition: "all .25s ease",
                            }}
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}