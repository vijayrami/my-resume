import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";


export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Certifications />
            <Projects />
            <Education />
            <Contact />
        </>
    );
}