import { certifications } from "../data/certifications";
import CertificationCard from "./CertificationCard";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
    { value: "40+", label: "Enterprise Projects Delivered" },
    { value: "14+", label: "Years Experience" },
    { value: "4×", label: "Adobe Certifications" },
];

export default function Certifications() {
    return (
        <section
            id="certifications"
            style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px" }}
        >
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
                <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                    Adobe Certifications
                </h2>
                <p style={{ color: "#6B7280", maxWidth: "800px", margin: "0 auto", lineHeight: 1.8, fontSize: "18px" }}>
                    Continuous learning and professional certifications validating my expertise in Adobe Commerce.
                </p>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "25px",
                    marginBottom: "70px",
                }}
            >
                {certifications.map((cert) => (
                    <CertificationCard key={cert.verifyLink} {...cert} />
                ))}
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "25px",
                    textAlign: "center",
                }}
            >
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        style={{
                            background: "#111827",
                            color: "#fff",
                            padding: "30px",
                            borderRadius: "16px",
                        }}
                    >
                        <AnimatedCounter value={stat.value} />
                        <p style={{ marginTop: "8px" }}>{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}