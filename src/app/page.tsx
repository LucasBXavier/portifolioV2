import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lucas Boareto Xavier",
  jobTitle: "Desenvolvedor Full Stack",
  description:
    "Desenvolvedor Full Stack especializado em Java, Spring Boot, arquitetura de software, APIs, React e Next.js.",
  url: "https://lucasboareto.dev",
  sameAs: ["https://github.com/LucasBXavier"],
  knowsAbout: [
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "Arquitetura de Software",
    "APIs REST",
    "Microserviços",
    "DevOps",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
