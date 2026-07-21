import { profile } from "../data/profile";

export default function Contact() {
    return (
        <section
            id="contact"
            style={{
                maxWidth: "1100px",
                margin: "60px auto",
                padding: "0 20px",
            }}
        >
            <div
                style={{
                    background: "linear-gradient(135deg,#2563EB,#1E40AF)",
                    borderRadius: "24px",
                    padding: "60px 40px",
                    color: "#FFFFFF",
                    textAlign: "center",
                }}
            >
                <h2
                    style={{
                        fontSize: "2.5rem",
                        marginBottom: "20px",
                    }}
                >
                    Let's Build Something Amazing
                </h2>

                <p
                    style={{
                        maxWidth: "700px",
                        margin: "0 auto 40px",
                        fontSize: "18px",
                        lineHeight: 1.8,
                        opacity: 0.95,
                    }}
                >
                    {profile.contactMessage}
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(240px,1fr))",
                        gap: "20px",
                        marginBottom: "40px",
                    }}
                >
                    <div
                        style={{
                            background: "rgba(255,255,255,.12)",
                            padding: "24px",
                            borderRadius: "16px",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "30px",
                                marginBottom: "10px",
                            }}
                        >
                            📧
                        </div>

                        <h3>Email</h3>

                        <a
                            href={`mailto:${profile.email}`}
                            style={{
                                color: "#FFFFFF",
                                textDecoration: "none",
                            }}
                        >
                            {profile.email}
                        </a>
                    </div>

                    <div
                        style={{
                            background: "rgba(255,255,255,.12)",
                            padding: "24px",
                            borderRadius: "16px",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "30px",
                                marginBottom: "10px",
                            }}
                        >
                            📱
                        </div>

                        <h3>Phone</h3>

                        <a
                            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                            style={{
                                color: "#FFFFFF",
                                textDecoration: "none",
                            }}
                        >
                            {profile.phone}
                        </a>
                    </div>

                    <div
                        style={{
                            background: "rgba(255,255,255,.12)",
                            padding: "24px",
                            borderRadius: "16px",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "30px",
                                marginBottom: "10px",
                            }}
                        >
                            📍
                        </div>

                        <h3>Location</h3>

                        <p>{profile.location}</p>
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "20px",
                    }}
                >
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: "14px 26px",
                            background: "#111827",
                            color: "#FFFFFF",
                            textDecoration: "none",
                            borderRadius: "10px",
                            fontWeight: 600,
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
                            padding: "14px 26px",
                            background: "#FFFFFF",
                            color: "#2563EB",
                            textDecoration: "none",
                            borderRadius: "10px",
                            fontWeight: 600,
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
                            padding: "14px 26px",
                            background: "#059669",
                            color: "#FFFFFF",
                            textDecoration: "none",
                            borderRadius: "10px",
                            fontWeight: 600,
                            transition: "all .25s ease",
                        }}
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}