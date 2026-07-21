import { profile } from "../data/profile";

export default function Header() {
    return (
        <header
            style={{
                background: "#111827",
                color: "#FFFFFF",
                padding: "60px 20px",
                textAlign: "center",
            }}
        >
            <div
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                }}
            >
                <h1
                    style={{
                        fontSize: "3rem",
                        marginBottom: "10px",
                        fontWeight: "bold",
                    }}
                >
                    {profile.name}
                </h1>

                <h2
                    style={{
                        fontWeight: 400,
                        color: "#93C5FD",
                        marginBottom: "25px",
                    }}
                >
                    {profile.title}
                    {profile.specialties.length > 0 &&
                        ` • ${profile.specialties.join(" • ")}`}
                </h2>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "12px",
                        marginBottom: "30px",
                    }}
                >
                    <span
                        style={{
                            background: "#2563EB",
                            padding: "8px 14px",
                            borderRadius: "20px",
                        }}
                    >
                        {profile.experience} Years Experience
                    </span>

                    <span
                        style={{
                            background: "#059669",
                            padding: "8px 14px",
                            borderRadius: "20px",
                        }}
                    >
                        {profile.certifications} Adobe Certified
                    </span>

                    {profile.badges.map((badge) => (
                        <span
                            key={badge.label}
                            style={{
                                background: badge.color,
                                padding: "8px 14px",
                                borderRadius: "20px",
                            }}
                        >
                            {badge.label}
                        </span>
                    ))}
                </div>

                <p
                    style={{
                        maxWidth: "900px",
                        margin: "0 auto 30px",
                        lineHeight: 1.8,
                        color: "#D1D5DB",
                    }}
                >
                    {profile.summary}
                </p>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "20px",
                        fontSize: "15px",
                    }}
                >
                    <span>📍 {profile.location}</span>

                    <a
                        href={`mailto:${profile.email}`}
                        style={{
                            color: "#93C5FD",
                            textDecoration: "none",
                        }}
                    >
                        📧 {profile.email}
                    </a>

                    <a
                        href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                        style={{
                            color: "#93C5FD",
                            textDecoration: "none",
                        }}
                    >
                        📞 {profile.phone}
                    </a>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "18px",
                        marginTop: "30px",
                    }}
                >
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            background: "#2563EB",
                            color: "#FFFFFF",
                            padding: "12px 22px",
                            borderRadius: "8px",
                            textDecoration: "none",
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
                            background: "#0A66C2",
                            color: "#FFFFFF",
                            padding: "12px 22px",
                            borderRadius: "8px",
                            textDecoration: "none",
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
                            background: "#16A34A",
                            color: "#FFFFFF",
                            padding: "12px 22px",
                            borderRadius: "8px",
                            textDecoration: "none",
                            fontWeight: 600,
                            transition: "all .25s ease",
                        }}
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </header>
    );
}