export interface Certification {
    title: string;
    issuer: string;
    level: string;
    year: string;
    badge: string;
    color: string;
}

export const certifications: Certification[] = [
    {
        title: "Adobe Certified Master",
        issuer: "Adobe",
        level: "Adobe Commerce Architect",
        year: "Current",
        badge: "🏆",
        color: "#7C3AED",
    },
    {
        title: "Adobe Certified Expert",
        issuer: "Adobe",
        level: "Adobe Commerce Business Practitioner",
        year: "Current",
        badge: "🥇",
        color: "#2563EB",
    },
    {
        title: "Adobe Certified Professional",
        issuer: "Adobe",
        level: "Adobe Commerce Developer",
        year: "Current",
        badge: "💻",
        color: "#059669",
    },
    {
        title: "Adobe Certified Professional",
        issuer: "Adobe",
        level: "Adobe Commerce Frontend Developer",
        year: "Current",
        badge: "🎨",
        color: "#EA580C",
    },
];

export const certificationSummary = {
    total: "4×",
    title: "Adobe Certifications",
    description:
        "Certified across Adobe Commerce architecture, backend development, frontend development, and business solutions.",
};