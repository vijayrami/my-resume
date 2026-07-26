"use client";

import { profile } from "../data/profile";
import { motion } from "framer-motion";

export default function Hero() {
    const highlights = [
        "14+ Years Experience",
        "4× Adobe Certified",
        "Adobe Commerce Architect",
        "Commerce Cloud Expert",
        "GraphQL Specialist",
        "Team Lead",
    ];

    return (
        <section className="header-animated-bg" style={{ padding: "80px 20px" }}>
            <div className="header-blob" style={{ width: "300px", height: "300px", background: "#3B82F6", top: "-50px", left: "10%" }} />
            <div className="header-blob" style={{ width: "250px", height: "250px", background: "#8B5CF6", bottom: "-30px", right: "15%", animationDelay: "2s" }} />

            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    maxWidth: "1200px",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "1.3fr 1fr",
                    gap: "50px",
                    alignItems: "center",
                }}
            >
                {/* Left Side */}
                <div>
                    <span
                        style={{
                            display: "inline-block",
                            background: "#DBEAFE",
                            color: "#1D4ED8",
                            padding: "8px 18px",
                            borderRadius: "20px",
                            fontWeight: 600,
                            marginBottom: "22px",
                        }}
                    >
                        Available for Technical Lead & Solution Architect Roles
                    </span>

                    <h2
                        style={{
                            fontSize: "3rem",
                            marginBottom: "22px",
                            lineHeight: 1.2,
                            color: "#FFFFFF",
                        }}
                    >
                        Building Enterprise
                        <br />
                        Adobe Commerce Solutions
                    </h2>

                    <p
                        style={{
                            fontSize: "18px",
                            color: "#E5E7EB",
                            lineHeight: 1.8,
                            marginBottom: "32px",
                        }}
                    >
                        I specialize in designing scalable Adobe Commerce
                        solutions, modern GraphQL APIs, Commerce Cloud
                        deployments, enterprise integrations, and
                        high-performance Magento architectures for global
                        retailers. My focus is delivering business value through
                        clean architecture, technical leadership, and
                        engineering excellence.
                    </p>

                    <div
                        style={{
                            display: "flex",
                            gap: "15px",
                            flexWrap: "wrap",
                            marginBottom: "28px",
                        }}
                    >
                        <a
                            href="#experience"
                            style={{
                                background: "#FFFFFF",
                                color: "#2563EB",
                                textDecoration: "none",
                                padding: "14px 28px",
                                borderRadius: "8px",
                                fontWeight: 600,
                            }}
                        >
                            View Experience
                        </a>
                        <a
                            href={profile.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                border: "2px solid #FFFFFF",
                                color: "#FFFFFF",
                                textDecoration: "none",
                                padding: "14px 28px",
                                borderRadius: "8px",
                                fontWeight: 600,
                                background: "transparent",
                            }}
                        >
                            Download Resume
                        </a>
                    </div>

                    {/* Contact + Social Row */}
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "18px",
                            fontSize: "15px",
                            color: "#E5E7EB",
                        }}
                    >
                        <span>📍 {profile.location}</span>

                        <a
                            href={`mailto:${profile.email}`}
                            style={{ color: "#FFFFFF", textDecoration: "none" }}
                        >
                            📧 {profile.email}
                        </a>

                        <a
                            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                            style={{ color: "#FFFFFF", textDecoration: "none" }}
                        >
                            📞 {profile.phone}
                        </a>

                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#FFFFFF", textDecoration: "none", fontWeight: 600 }}
                        >
                            GitHub
                        </a>

                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#93C5FD", textDecoration: "none", fontWeight: 600 }}
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Right Side */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "20px",
                    }}
                >
                    {/* Left Card - Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        style={{
                            background: "rgba(37, 99, 235, 0.18)",
                            backdropFilter: "blur(16px)",
                            WebkitBackdropFilter: "blur(16px)",
                            border: "1px solid rgba(255, 255, 255, 0.25)",
                            padding: "26px 20px",
                            borderRadius: "20px",
                            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
                        }}
                    >
                        <h3
                            style={{
                                marginBottom: "22px",
                                textAlign: "center",
                                color: "#FFFFFF",
                                fontSize: "18px",
                                fontWeight: 700,
                            }}
                        >
                            Professional Highlights
                        </h3>

                        {highlights.map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 * index }}
                                style={{
                                    padding: "10px 14px",
                                    marginBottom: "10px",
                                    background: "rgba(255, 255, 255, 0.95)",
                                    borderRadius: "8px",
                                    borderLeft: "5px solid #2563EB",
                                    fontWeight: 600,
                                    fontSize: "13.5px",
                                    color: "#1E293B",
                                    transition: "transform 0.25s ease",
                                    cursor: "default",
                                }}
                                whileHover={{ x: 6 }}
                            >
                                ✔ {item}
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right Card - Key Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 40, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        style={{
                            background: "rgba(124, 58, 237, 0.18)",
                            backdropFilter: "blur(16px)",
                            WebkitBackdropFilter: "blur(16px)",
                            border: "1px solid rgba(255, 255, 255, 0.25)",
                            padding: "26px 20px",
                            borderRadius: "20px",
                            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <h3
                            style={{
                                marginBottom: "22px",
                                textAlign: "center",
                                color: "#FFFFFF",
                                fontSize: "18px",
                                fontWeight: 700,
                            }}
                        >
                            Key Stats
                        </h3>

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(2,1fr)",
                                gap: "18px",
                                textAlign: "center",
                            }}
                        >
                            {[
                                { value: "14+", label: "Years Experience" },
                                { value: "40+", label: "Enterprise Projects" },
                                { value: "4", label: "Adobe Certifications" },
                                { value: "6+", label: "Years Magento Leadership" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: 0.3 + 0.1 * index }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <h2
                                        style={{
                                            color: "#FFFFFF",
                                            margin: 0,
                                            fontSize: "2rem",
                                            fontWeight: 800,
                                            lineHeight: 1,
                                        }}
                                    >
                                        {stat.value}
                                    </h2>
                                    <small
                                        style={{
                                            color: "#DDD6FE",
                                            fontSize: "12px",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {stat.label}
                                    </small>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}