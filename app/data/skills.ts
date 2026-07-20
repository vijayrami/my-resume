export interface SkillCategory {
    title: string;
    icon: string;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Adobe Commerce",
        icon: "🛒",
        skills: [
            "Adobe Commerce",
            "Magento 2",
            "Adobe Commerce Cloud",
            "Magento Open Source",
            "B2B Commerce",
            "Shared Catalog",
            "Purchase Order",
            "Security Patching",
            "Platform Upgrades",
        ],
    },
    {
        title: "Backend Development",
        icon: "⚙",
        skills: [
            "PHP 8.x",
            "GraphQL",
            "REST APIs",
            "MySQL",
            "Redis",
            "RabbitMQ",
            "OpenSearch",
            "Elasticsearch",
            "API Mesh",
            "Adobe App Builder",
        ],
    },
    {
        title: "Frontend",
        icon: "💻",
        skills: [
            "React.js",
            "PWA Studio",
            "JavaScript",
            "TypeScript",
            "Knockout.js",
            "HTML5",
            "CSS3",
            "AJAX",
            "jQuery",
        ],
    },
    {
        title: "Cloud & DevOps",
        icon: "☁",
        skills: [
            "AWS",
            "Docker",
            "Git",
            "CI/CD",
            "Fastly CDN",
            "Jenkins",
            "Linux",
        ],
    },
    {
        title: "Integrations",
        icon: "🔗",
        skills: [
            "SAP",
            "Constructor.io",
            "Algolia",
            "ERP Integration",
            "Payment Gateway",
            "Taxation",
            "OMS",
            "XML Feeds",
        ],
    },
    {
        title: "Leadership",
        icon: "👨‍💼",
        skills: [
            "Solution Architecture",
            "Technical Leadership",
            "Agile",
            "Code Reviews",
            "Mentoring",
            "Sprint Planning",
            "Estimation",
            "Stakeholder Management",
        ],
    },
];

export const skillStatistics = [
    {
        value: "12+",
        label: "Years Experience",
        background: "#2563EB",
    },
    {
        value: "4×",
        label: "Adobe Certified",
        background: "#059669",
    },
    {
        value: "40+",
        label: "Enterprise Projects",
        background: "#7C3AED",
    },
    {
        value: "6+",
        label: "Years Leadership",
        background: "#EA580C",
    },
];