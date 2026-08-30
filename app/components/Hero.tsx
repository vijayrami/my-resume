"use client";

import { profile } from "../data/profile";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";

export default function Hero() {
    const highlights = [
        "14+ Years Experience",
        "4× Adobe Certified",
        "Adobe Commerce Architect",
        "Commerce Cloud Expert",
        "GraphQL Specialist",
        "Team Lead",
    ];

    const contactLinks = [
        {
            href: `mailto:${profile.email}`,
            label: "Email",
            Icon: FaEnvelope,
            external: false,
        },
        {
            href: `tel:${profile.phone.replace(/\s+/g, "")}`,
            label: "Phone",
            Icon: FaPhoneAlt,
            external: false,
        },
        {
            href: profile.github,
            label: "GitHub",
            Icon: FaGithub,
            external: true,
        },
        {
            href: profile.linkedin,
            label: "LinkedIn",
            Icon: FaLinkedinIn,
            external: true,
        },
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

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: "9px",
                            fontSize: "15px",
                            color: "#E5E7EB",
                            marginTop: "4px",
                            lineHeight: 1,
                            paddingTop: "0",
                            transform: "translateY(1px)",
                        }}
                    >
                        <span
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                                padding: "6px 10px",
                                borderRadius: "999px",
                                background: "rgba(255,255,255,0.012)",
                                border: "1px solid rgba(255,255,255,0.04)",
                                color: "#DCE7F8",
                                fontWeight: 300,
                                fontSize: "12.4px",
                                letterSpacing: "0.01em",
                                boxShadow: "none",
                                maxWidth: "fit-content",
                            }}
                        >
                            <span aria-hidden="true" style={{ fontSize: "10px", opacity: 0.72 }}>📍</span>
                            {profile.location}
                        </span>

                        {contactLinks.map(({ href, label, Icon, external }) => (
                            <a
                                key={label}
                                href={href}
                                target={external ? "_blank" : undefined}
                                rel={external ? "noopener noreferrer" : undefined}
                                aria-label={label}
                                title={label}
                                style={{
                                    width: "32px",
                                    height: "32px",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "50%",
                                    background: "rgba(255,255,255,0.01)",
                                    border: "1px solid rgba(255,255,255,0.06)",
                                    color: "rgba(248,250,252,0.72)",
                                    textDecoration: "none",
                                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
                                    transition: "all 0.2s ease",
                                    opacity: 0.72,
                                }}
                                onMouseEnter={(event) => {
                                    event.currentTarget.style.transform = "translateY(-1px) scale(1.04)";
                                    event.currentTarget.style.background = "rgba(255,255,255,0.045)";
                                    event.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                                    event.currentTarget.style.boxShadow = "0 0 0 1px rgba(255,255,255,0.04), 0 0 18px rgba(255,255,255,0.22)";
                                    event.currentTarget.style.opacity = "1";
                                    event.currentTarget.style.color = "#FFFFFF";
                                }}
                                onMouseLeave={(event) => {
                                    event.currentTarget.style.transform = "translateY(0) scale(1)";
                                    event.currentTarget.style.background = "rgba(255,255,255,0.01)";
                                    event.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                                    event.currentTarget.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.03)";
                                    event.currentTarget.style.opacity = "0.72";
                                    event.currentTarget.style.color = "rgba(248,250,252,0.72)";
                                }}
                            >
                                <Icon size={12} />
                            </a>
                        ))}
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