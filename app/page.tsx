import FadeInSection from "./components/FadeInSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <FadeInSection><About /></FadeInSection>
            <FadeInSection><Skills /></FadeInSection>
            <FadeInSection><Experience /></FadeInSection>
            <FadeInSection><Certifications /></FadeInSection>
            <FadeInSection><Projects /></FadeInSection>
            <FadeInSection><Education /></FadeInSection>
            <FadeInSection><Contact /></FadeInSection>
            <Footer />
        </>
    );
}