import { experiences } from "../data/experience";
import ExperienceCard from "./ExperienceCard";
import FadeInSection from "./FadeInSection";

export default function Experience() {
    return (
        <section
            id="experience"
            style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px" }}
        >
            <div className="experience-section-title">
                <h2>Professional Experience</h2>
                <p>
                    14+ years building enterprise Adobe Commerce and Magento
                    solutions across product companies, agencies and consulting
                    firms.
                </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                {experiences.map((exp, index) => (
                    <FadeInSection key={exp.company} delay={index * 0.15}>
                        <ExperienceCard experience={exp} />
                    </FadeInSection>
                ))}
            </div>
        </section>
    );
}