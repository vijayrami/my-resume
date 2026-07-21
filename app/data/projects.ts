export interface Project {
    company: string;
    role: string;
    duration: string;
    icon: string;
    description: string;
    highlights: string[];
    technologies: string[];
    color: string;
}

export const projects: Project[] = [
    {
        company: "BCMCS Healthcare",
        role: "Adobe Commerce Technical Lead",
        duration: "2024 – Present",
        icon: "🏥",
        color: "#2563EB",
        description:
            "Leading development of a large-scale Adobe Commerce Cloud B2B healthcare platform with multi-store architecture and complex purchasing workflows.",
        highlights: [
            "Designed enterprise B2B architecture",
            "Implemented Shared Catalog & Purchase Orders",
            "Integrated Constructor.io search",
            "Developed GraphQL APIs and custom modules",
            "Led technical team and code reviews",
        ],
        technologies: [
            "Adobe Commerce",
            "Commerce Cloud",
            "GraphQL",
            "PHP",
            "Redis",
            "RabbitMQ",
            "OpenSearch",
            "Constructor.io",
        ],
    },

    {
        company: "Helly Hansen",
        role: "Adobe Commerce Lead Developer",
        duration: "2023 – 2024",
        icon: "🥾",
        color: "#EA580C",
        description:
            "Worked on Adobe Commerce Cloud upgrade, checkout customization, order management and enterprise integrations for a global retail brand.",
        highlights: [
            "Adobe Commerce upgrade",
            "Checkout customization",
            "Security patch implementation",
            "Credit Memo enhancements",
            "Performance improvements",
        ],
        technologies: [
            "Adobe Commerce",
            "PHP",
            "GraphQL",
            "MySQL",
            "Fastly",
            "Docker",
        ],
    },

    {
        company: "EZ Living Furniture",
        role: "Senior Adobe Commerce Developer",
        duration: "2022 – 2023",
        icon: "🛋️",
        color: "#059669",
        description:
            "Delivered enterprise eCommerce features, GraphQL APIs, backend customizations and performance optimizations.",
        highlights: [
            "Custom module development",
            "GraphQL implementation",
            "Performance optimization",
            "Third-party integrations",
        ],
        technologies: [
            "Magento 2",
            "GraphQL",
            "REST",
            "Redis",
            "MySQL",
        ],
    },

    {
        company: "B.TECH",
        role: "Adobe Commerce Developer",
        duration: "2021 – 2022",
        icon: "📱",
        color: "#7C3AED",
        description:
            "Implemented enterprise Adobe Commerce features and integrated multiple business systems for a leading electronics retailer.",
        highlights: [
            "ERP integrations",
            "Catalog customization",
            "Backend development",
            "API integrations",
        ],
        technologies: [
            "Adobe Commerce",
            "PHP",
            "REST API",
            "SAP",
            "JavaScript",
        ],
    },
];

export const projectStatistics = [
    {
        value: "40+",
        label: "Enterprise Projects",
        background: "#2563EB",
    },
    {
        value: "12+",
        label: "Years Experience",
        background: "#059669",
    },
    {
        value: "6+",
        label: "Years Technical Leadership",
        background: "#7C3AED",
    },
];