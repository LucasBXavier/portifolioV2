"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Code2, Container, Database, ServerCog } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { GlowCard } from "@/components/ui/GlowCard";
import { TechChip } from "@/components/ui/TechChip";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { featuredTech, methodologies, techCategories } from "@/lib/data";
import styles from "./Skills.module.css";

const icons = {
  backend: ServerCog,
  frontend: Code2,
  devops: Container,
  database: Database,
  ai: BrainCircuit,
};

export function Skills() {
  return (
    <Section
      id="skills"
      label="Arsenal técnico"
      title="Tecnologias que domino"
      description="O ferramental que uso no dia a dia para arquitetar, construir e escalar sistemas, do backend distribuído à interface."
    >
      <MarqueeStrip items={featuredTech} />

      <div className={styles.grid}>
        {techCategories.map((category, i) => {
          const Icon = icons[category.icon];
          return (
            <GlowCard key={category.title} className={`${styles.panel} ${styles[`span-${category.icon}`]}`}>
              <div className={styles.panelHeader}>
                <span className={styles.iconBox}>
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className={styles.panelTitle}>{category.title}</h3>
              </div>

              <div className={styles.chips}>
                {category.techs.map((tech, j) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.05 + j * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <TechChip name={tech.name} core={tech.core} />
                  </motion.div>
                ))}
              </div>
            </GlowCard>
          );
        })}
      </div>

      <motion.p
        className={styles.methodologies}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <span className="mono-label">Metodologia</span> {methodologies.join(" · ")}
      </motion.p>
    </Section>
  );
}
