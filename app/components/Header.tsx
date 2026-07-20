export default function Header() {
    return (
        <header
            style={{
                background: "#111827",
                color: "#fff",
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
                    Vijay M. Rami
                </h1>

                <h2
                    style={{
                        fontWeight: 400,
                        color: "#93C5FD",
                        marginBottom: "25px",
                    }}
                >
                    Adobe Commerce Technical Lead • Solution Architect • GraphQL &
                    Commerce Cloud Expert
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
                        12+ Years Experience
                    </span>

                    <span
                        style={{
                            background: "#059669",
                            padding: "8px 14px",
                            borderRadius: "20px",
                        }}
                    >
                        4× Adobe Certified
                    </span>

                    <span
                        style={{
                            background: "#7C3AED",
                            padding: "8px 14px",
                            borderRadius: "20px",
                        }}
                    >
                        Adobe Commerce Cloud
                    </span>

                    <span
                        style={{
                            background: "#EA580C",
                            padding: "8px 14px",
                            borderRadius: "20px",
                        }}
                    >
                        Magento Architect
                    </span>
                </div>

                <p
                    style={{
                        maxWidth: "900px",
                        margin: "0 auto 30px",
                        lineHeight: 1.8,
                        color: "#D1D5DB",
                    }}
                >
                    Results-driven Adobe Commerce Technical Lead with 12+ years of
                    experience delivering scalable enterprise eCommerce solutions,
                    specializing in Adobe Commerce Cloud, GraphQL, PWA Studio,
                    enterprise integrations, solution architecture, and technical
                    leadership.
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
                    <span>📍 Ahmedabad, Gujarat, India</span>

                    <a
                        href="mailto:vijaymrami@gmail.com"
                        style={{
                            color: "#93C5FD",
                            textDecoration: "none",
                        }}
                    >
                        📧 vijaymrami@gmail.com
                    </a>

                    <a
                        href="tel:+919662782488"
                        style={{
                            color: "#93C5FD",
                            textDecoration: "none",
                        }}
                    >
                        📞 +91 9662782488
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
                        href="https://github.com/vijayrami"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            background: "#2563EB",
                            color: "#fff",
                            padding: "12px 22px",
                            borderRadius: "8px",
                            textDecoration: "none",
                            fontWeight: 600,
                        }}
                    >
                        GitHub
                    </a>

                    <a
                        href="https://linkedin.com/in/vijay-rami"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            background: "#0A66C2",
                            color: "#fff",
                            padding: "12px 22px",
                            borderRadius: "8px",
                            textDecoration: "none",
                            fontWeight: 600,
                        }}
                    >
                        LinkedIn
                    </a>

                    <a
                        href="/Vijay_Rami_Resume.pdf"
                        target="_blank"
                        style={{
                            background: "#16A34A",
                            color: "#fff",
                            padding: "12px 22px",
                            borderRadius: "8px",
                            textDecoration: "none",
                            fontWeight: 600,
                        }}
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </header>
    );
}