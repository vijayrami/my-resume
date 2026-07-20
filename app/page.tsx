import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";


export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Certifications />
        </>
    );
}