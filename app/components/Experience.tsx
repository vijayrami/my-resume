import ExperienceCard from "./ExperienceCard";
import { experiences } from "../data/experience";

export default function Experience() {
    return (
        <section id="experience">
            {experiences.map((experience, index) => (
                <ExperienceCard
                    key={experience.company}
                    experience={experience}
                    reverse={index % 2 === 1}
                />
            ))}
        </section>
    );
}