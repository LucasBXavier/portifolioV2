"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/data";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { ProjectMockup } from "./ProjectMockup";
import { GastroInfoMockup } from "./GastroInfoMockup";
import { TelegramMockup } from "./TelegramMockup";
import styles from "./ProjectShowcase.module.css";

type ProjectShowcaseProps = {
  project: Project;
  index: number;
  reverse?: boolean;
};

const metaBlocks: { key: keyof Project; label: string }[] = [
  { key: "problem", label: "Problema" },
  { key: "solution", label: "Solução" },
  { key: "impact", label: "Impacto" },
];

export function ProjectShowcase({ project, index, reverse = false }: ProjectShowcaseProps) {
  return (
    <div className={`${styles.row} ${reverse ? styles.reverse : ""}`}>
      <motion.div
        className={styles.visual}
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
        {project.visual.type === "content-site" ? (
          <GastroInfoMockup />
        ) : project.visual.type === "telegram" ? (
          <TelegramMockup />
        ) : (
          <ProjectMockup index={index} />
        )}
      </motion.div>

      <motion.div
        className={styles.text}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="mono-label">{project.tagline}</span>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.metaGrid}>
          {metaBlocks.map(({ key, label }) => (
            <div className={styles.metaBlock} key={key}>
              <span className={styles.metaLabel}>{label}</span>
              <p className={styles.metaText}>{project[key] as string}</p>
            </div>
          ))}
        </div>

        <ul className={styles.features}>
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className={styles.techRow}>
          {project.tech.map((tech) => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.actions}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <GithubIcon width={17} height={17} /> GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <ArrowUpRight size={17} strokeWidth={1.75} /> Demo
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}
