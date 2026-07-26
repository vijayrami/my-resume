import { experiences } from "../data/experience";
import ExperienceCard from "./ExperienceCard";
import FadeInSection from "./FadeInSection";

export default function Experience() {
    return (
        <section
            id="experience"
            style={{ background: "#FFFFFF", padding: "80px 0" }}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
                <div className="experience-section-title">
                    <h2>Professional Experience</h2>
                    <p>
                        14+ years building enterprise Adobe Commerce and Magento
                        solutions across product companies, agencies and consulting
                        firms.
                    </p>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
                        gap: "26px",
                    }}
                >
                    {experiences.map((exp, index) => (
                        <FadeInSection key={exp.company} delay={index * 0.1}>
                            <ExperienceCard experience={exp} />
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    );
}