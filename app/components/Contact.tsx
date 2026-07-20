export default function Contact() {
    return (
        <section
            id="contact"
            style={{
                maxWidth: "1100px",
                margin: "100px auto",
                padding: "0 20px",
            }}
        >
            <div
                style={{
                    background: "linear-gradient(135deg,#2563EB,#1E40AF)",
                    borderRadius: "24px",
                    padding: "60px 40px",
                    color: "#fff",
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
                    I'm always interested in discussing Adobe Commerce
                    architecture, enterprise eCommerce solutions, technical
                    leadership opportunities, and challenging projects.
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
                            href="mailto:YOUR_EMAIL"
                            style={{
                                color: "#fff",
                                textDecoration: "none",
                            }}
                        >
                            YOUR_EMAIL
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
                            href="tel:YOUR_PHONE"
                            style={{
                                color: "#fff",
                                textDecoration: "none",
                            }}
                        >
                            YOUR_PHONE
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

                        <p>Ahmedabad, Gujarat, India</p>
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
                        href="https://github.com/YOUR_GITHUB"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: "14px 26px",
                            background: "#111827",
                            color: "#fff",
                            textDecoration: "none",
                            borderRadius: "10px",
                            fontWeight: 600,
                            transition: "all .25s ease",
                        }}
                    >
                        GitHub
                    </a>

                    <a
                        href="https://linkedin.com/in/YOUR_LINKEDIN"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: "14px 26px",
                            background: "#fff",
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
                        href="/Vijay_Rami_Resume.pdf"
                        target="_blank"
                        style={{
                            padding: "14px 26px",
                            background: "#059669",
                            color: "#fff",
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