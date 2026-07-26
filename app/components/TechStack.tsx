"use client";

import {
    SiPhp,
    SiMysql,
    SiGraphql,
    SiReact,
    SiJavascript,
    SiGit,
    SiDocker,
    SiJquery,
} from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";

const techStack = [
    { name: "Magento", icon: FaShoppingCart, color: "#EE672F" }, // fallback icon
    { name: "Adobe Commerce", icon: FaShoppingCart, color: "#FA0F00" }, // fallback icon
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "jQuery", icon: SiJquery, color: "#0769AD" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
];

export default function TechStack() {
    return (
        <section
            id="tech-stack"
            style={{
                maxWidth: "1200px",
                margin: "60px auto",
                padding: "0 20px",
                textAlign: "center",
            }}
        >
            <h2 style={{ fontSize: "2.5rem", marginBottom: "50px" }}>
                My Stack
            </h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                    gap: "30px",
                }}
            >
                {techStack.map(({ name, icon: Icon, color }) => (
                    <div
                        key={name}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "12px",
                            padding: "20px",
                            borderRadius: "16px",
                            background: "#FFFFFF",
                            boxShadow: "0 4px 15px rgba(0,0,0,.06)",
                            transition: "transform .25s ease, box-shadow .25s ease",
                            cursor: "default",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-6px)";
                            e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,.12)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,.06)";
                        }}
                    >
                        <Icon size={42} color={color} />
                        <span style={{ fontSize: "14px", fontWeight: 500 }}>
                            {name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}