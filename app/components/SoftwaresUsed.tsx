"use client";

import {
    SiPhpstorm,
    SiPostman,
    SiGithub,
    SiClaude,
} from "react-icons/si";
import Image from "next/image";

interface SoftwareItem {
    name: string;
    icon?: React.ComponentType<{ size?: number; color?: string }>;
    image?: string;
    color: string;
}

const softwares: SoftwareItem[] = [
    { name: "PHPStorm", icon: SiPhpstorm, color: "#000000" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Warden", image: "/icons/warden.svg", color: "#2496ED" },
    { name: "VS Code", image: "/icons/visual_studio_code.svg", color: "#007ACC" },
    { name: "GraphQL", image: "/icons/graphql.svg", color: "#007ACC" },
    { name: "GitHub Desktop", icon: SiGithub, color: "#181717" },
    { name: "ChatGPT", image: "/icons/chatgpt.svg", color: "#000000" },
    { name: "Claude AI", icon: SiClaude, color: "#DA7756" },
];

export default function SoftwaresUsed() {
    return (
        <section
            id="softwares-used"
            style={{
                maxWidth: "1200px",
                margin: "60px auto",
                padding: "0 20px",
                textAlign: "center",
            }}
        >
            <h2 style={{ fontSize: "2rem", marginBottom: "40px" }}>
                Softwares I Use
            </h2>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: "30px",
                }}
            >
                {softwares.map(({ name, icon: Icon, image, color }) => (
                    <div
                        key={name}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "10px",
                            padding: "18px",
                            borderRadius: "14px",
                            background: "#FFFFFF",
                            boxShadow: "0 4px 15px rgba(0,0,0,.06)",
                            minWidth: "110px",
                            transition: "transform .25s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-6px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                        }}
                    >
                        {image ? (
                            <Image src={image} alt={name} width={38} height={38} />
                        ) : Icon ? (
                            <Icon size={38} color={color} />
                        ) : null}
                        <span style={{ fontSize: "13px", fontWeight: 500 }}>
                            {name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}