import {
    certifications,
    certificationSummary,
} from "../data/certifications";

export default function Certifications() {
    return (
        <section
            id="certifications"
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
                    Adobe Certifications
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
                    Continuous learning and professional certifications that
                    validate my expertise in Adobe Commerce architecture,
                    enterprise development and technical leadership.
                </p>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
                    gap: "30px",
                }}
            >
                {certifications.map((certification) => (
                    <div
                        key={certification.level}
                        style={{
                            background: "#FFFFFF",
                            borderRadius: "16px",
                            padding: "30px",
                            boxShadow: "0 6px 20px rgba(0,0,0,.06)",
                            transition: "all .25s ease",
                            borderTop: `6px solid ${certification.color}`,
                        }}
                    >
                        <div
                            style={{
                                fontSize: "42px",
                                marginBottom: "20px",
                            }}
                        >
                            {certification.badge}
                        </div>

                        <h3
                            style={{
                                marginBottom: "10px",
                                fontSize: "22px",
                            }}
                        >
                            {certification.title}
                        </h3>

                        <p
                            style={{
                                color: certification.color,
                                fontWeight: 600,
                                marginBottom: "10px",
                            }}
                        >
                            {certification.level}
                        </p>

                        <p
                            style={{
                                color: "#6B7280",
                                marginBottom: "8px",
                            }}
                        >
                            Issued by {certification.issuer}
                        </p>

                        <span
                            style={{
                                display: "inline-block",
                                padding: "6px 14px",
                                background: "#F3F4F6",
                                borderRadius: "20px",
                                fontSize: "13px",
                                fontWeight: 600,
                                color: "#374151",
                            }}
                        >
                            {certification.year}
                        </span>
                    </div>
                ))}
            </div>

            <div
                style={{
                    marginTop: "70px",
                    background: "#111827",
                    color: "#FFFFFF",
                    borderRadius: "20px",
                    padding: "40px",
                    textAlign: "center",
                }}
            >
                <h2
                    style={{
                        fontSize: "3rem",
                        margin: 0,
                        color: "#FBBF24",
                    }}
                >
                    {certificationSummary.total}
                </h2>

                <h3
                    style={{
                        marginTop: "15px",
                        marginBottom: "15px",
                        fontSize: "24px",
                    }}
                >
                    {certificationSummary.title}
                </h3>

                <p
                    style={{
                        maxWidth: "700px",
                        margin: "0 auto",
                        lineHeight: 1.8,
                        color: "#D1D5DB",
                    }}
                >
                    {certificationSummary.description}
                </p>
            </div>
        </section>
    );
}