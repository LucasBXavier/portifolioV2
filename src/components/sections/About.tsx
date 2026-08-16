"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Timeline } from "@/components/ui/Timeline";
import { timelineSteps } from "@/lib/data";
import styles from "./About.module.css";

export function About() {
  return (
    <Section id="sobre" label="Sobre mim" title="Minha trajetória até aqui">
      <div className={styles.grid}>
        <div className={styles.left}>
          <Timeline items={timelineSteps.map((s) => ({ ...s, meta: s.year }))} orientation="vertical" />
        </div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className={styles.lead}>
            Sou Desenvolvedor Full Stack com foco em Backend utilizando Java e Spring Boot.
          </p>

          <p>
            Tenho paixão por arquitetura de software, APIs escaláveis, boas práticas, Clean
            Architecture, SOLID, microsserviços e desenvolvimento orientado à qualidade.
          </p>

          <p>
            Também desenvolvo interfaces modernas utilizando React, Next.js e TypeScript, criando
            aplicações completas que unem desempenho, experiência do usuário e código limpo.
          </p>

          <p>
            Meu objetivo é transformar ideias em produtos digitais robustos, intuitivos e
            preparados para crescer.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
