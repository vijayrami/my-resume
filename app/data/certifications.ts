export interface Certification {
    title: string;
    issuer: string;
    image: string;
    verifyLink: string;
}

export const certifications: Certification[] = [
    {
        title: "Adobe Certified Master",
        issuer: "Adobe Commerce Architect",
        image: "/certifications/adobe-master.png",
        verifyLink: "https://certification.adobe.com/credential/verify/0ba3e7c0-e4d4-11f0-81b9-42010a400fdc",
    },
    {
        title: "Adobe Certified Expert",
        issuer: "Adobe Commerce Developer",
        image: "/certifications/adobe-expert.png",
        verifyLink: "https://certification.adobe.com/credential/verify/ae14cc6c-8cd5-11f0-8ca0-42010a400fd3",
    },
    {
        title: "Adobe Certified Professional",
        issuer: "Adobe Commerce Front-End Developer",
        image: "/certifications/adobe-pro-frontend.png",
        verifyLink: "https://certification.adobe.com/credential/verify/6597ae96-59e5-4fb9-a282-c67dc603cf76",
    },
    {
        title: "Adobe Certified Professional",
        issuer: "Adobe Commerce Developer",
        image: "/certifications/adobe-pro-backend.png",
        verifyLink: "https://certification.adobe.com/credential/verify/9eb0decb-fb18-40ae-a9c5-65b505a72f26",
    },
];