"use client";

import Image from "next/image";

interface Props {
    title: string;
    issuer: string;
    image: string;
    verifyLink: string;
}

export default function CertificationCard({ title, issuer, image, verifyLink }: Props) {
    return (
        <div className="cert-flip-outer" style={{ perspective: "1000px", height: "280px" }}>
            <div
                className="cert-flip-inner"
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.6s ease",
                }}
            >
                {/* Front */}
                <div
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backfaceVisibility: "hidden",
                        borderRadius: "16px",
                        overflow: "hidden",
                        boxShadow: "0 6px 20px rgba(0,0,0,.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#fff",
                    }}
                >
                    <Image src={image} alt={title} width={180} height={180} style={{ objectFit: "contain" }} />
                </div>

                {/* Back */}
                <div
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        borderRadius: "16px",
                        background: "#111827",
                        color: "#fff",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        textAlign: "center",
                        gap: "12px",
                    }}
                >
                    <h4 style={{ margin: 0 }}>{title}</h4>
                    <p style={{ fontSize: "13px", color: "#9CA3AF", margin: 0 }}>{issuer}</p>
                    <a
                        href={verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            marginTop: "10px",
                            padding: "8px 16px",
                            background: "#2563EB",
                            borderRadius: "20px",
                            color: "#fff",
                            fontSize: "13px",
                            textDecoration: "none",
                        }}
                    >
                        Verify Credential
                    </a>
                </div>
            </div>
        </div>
    );
}