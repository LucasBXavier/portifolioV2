import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/lib/data";
import styles from "./Services.module.css";

export function Services() {
  return (
    <Section
      id="servicos"
      label="O que eu faço"
      title="Serviços"
      description="Soluções sob medida para cada etapa do seu produto digital, do backend à experiência final."
    >
      <div className={styles.grid}>
        {services.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </div>
    </Section>
  );
}
