import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { DuckCo } from "@/components/sections/DuckCo";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
import { duckco } from "@/lib/data";

const personId = "https://lucasboareto.dev/#person";
const organizationId = `${duckco.url}/#organization`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: "Lucas Boareto Xavier",
      jobTitle: "Desenvolvedor Full Stack e fundador da DuckCo",
      description:
        "Desenvolvedor Full Stack especializado em Java, Spring Boot, arquitetura de software, APIs, React e Next.js. Fundador da DuckCo.",
      url: "https://lucasboareto.dev",
      sameAs: [
        "https://github.com/LucasBXavier",
        "https://linkedin.com/in/lucas-boareto",
        "https://instagram.com/lucasboareto.dev",
      ],
      worksFor: { "@id": organizationId },
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
    },
    {
      "@type": "Organization",
      "@id": organizationId,
      name: duckco.name,
      url: duckco.url,
      logo: duckco.logoUrl,
      slogan: duckco.tagline,
      description: duckco.description,
      founder: { "@id": personId },
      areaServed: "BR",
      sameAs: [duckco.instagram, duckco.linkedin],
      knowsAbout: ["Sistemas web", "Desenvolvimento de sites", "Automações", "Consultoria de tecnologia"],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DuckCo />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
