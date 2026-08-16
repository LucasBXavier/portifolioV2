import { Section } from "@/components/ui/Section";
import { ProjectShowcase } from "@/components/ui/ProjectShowcase";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Section
      id="projetos"
      label="Trabalhos selecionados"
      title="Projetos"
      description="Uma seleção de produtos que desenvolvi do zero, unindo arquitetura sólida, código limpo e experiência de uso cuidadosa."
    >
      <div>
        {projects.map((project, i) => (
          <ProjectShowcase key={project.id} project={project} index={i} reverse={i % 2 === 1} />
        ))}
      </div>
    </Section>
  );
}
