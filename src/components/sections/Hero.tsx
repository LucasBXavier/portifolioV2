"use client";

import { motion } from "framer-motion";
import { ArrowRight, Braces, Database, FileCode2, Layers, ServerCog } from "lucide-react";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { FloatingBadge } from "@/components/ui/FloatingBadge";
import styles from "./Hero.module.css";

const particles = [
  { top: "12%", left: "8%", size: 3, delay: 0 },
  { top: "22%", left: "88%", size: 2, delay: 0.6 },
  { top: "68%", left: "5%", size: 2, delay: 1.1 },
  { top: "80%", left: "92%", size: 3, delay: 0.3 },
  { top: "40%", left: "95%", size: 2, delay: 1.6 },
  { top: "88%", left: "40%", size: 2, delay: 0.9 },
  { top: "6%", left: "55%", size: 2, delay: 1.3 },
  { top: "55%", left: "2%", size: 3, delay: 0.2 },
];

const codeLines = [
  { text: "@RestController", width: "58%" },
  { text: "public class ApiService {", width: "78%" },
  { text: "  @Autowired", width: "44%" },
  { text: "  private Repository repo;", width: "68%" },
  { text: "}", width: "18%" },
];

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.backdrop} aria-hidden>
        <div className={styles.radial} />
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className={styles.particle}
            style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
            animate={{ opacity: [0.15, 0.6, 0.15], y: [0, -14, 0] }}
            transition={{ duration: 5 + i * 0.4, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={`mono-label ${styles.eyebrow}`}>Olá, eu sou Lucas Boareto</span>

          <h1 className={styles.title}>
            Desenvolvedor
            <br />
            <span className="gradient-text">Full Stack</span>
          </h1>

          <p className={styles.subtitle}>
            Especialista em <strong>Java</strong> <span className={styles.sep}>•</span>{" "}
            <strong>Spring Boot</strong> <span className={styles.sep}>•</span>{" "}
            <strong>Arquitetura de Software</strong>
          </p>

          <p className={styles.description}>
            Construo aplicações escaláveis, APIs robustas e interfaces modernas focadas em
            performance, experiência do usuário e boas práticas de engenharia de software.
          </p>

          <div className={styles.actions}>
            <AnimatedButton href="#projetos" variant="primary" icon={<ArrowRight size={16} />}>
              Ver Projetos
            </AnimatedButton>
            <AnimatedButton href="#contato" variant="secondary">
              Entrar em Contato
            </AnimatedButton>
          </div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.avatarRing}>
            <div className={styles.avatarGlow} aria-hidden />
            <div className={styles.avatar}>
              <span className={styles.avatarInitials}>LB</span>
              <div className={styles.avatarMesh} aria-hidden />
            </div>
          </div>

          <div className={styles.codeCard}>
            <div className={styles.codeDots}>
              <span />
              <span />
              <span />
            </div>
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                className={styles.codeLine}
                style={{ width: line.width }}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.12 }}
              />
            ))}
          </div>

          <FloatingBadge className={styles.badgeJava} delay={0.6}>
            <Braces size={15} color="#22d4fd" /> Java
          </FloatingBadge>
          <FloatingBadge className={styles.badgeSpring} delay={1}>
            <ServerCog size={15} color="#22d4fd" /> Spring Boot
          </FloatingBadge>
          <FloatingBadge className={styles.badgeArch} delay={1.3} duration={5}>
            <Layers size={15} color="#22d4fd" /> Arquitetura
          </FloatingBadge>
          <FloatingBadge className={styles.badgePostgres} delay={0.4} duration={5.5}>
            <Database size={15} color="#22d4fd" /> PostgreSQL
          </FloatingBadge>
          <FloatingBadge className={styles.badgeReact} delay={1.6} duration={4.8}>
            <FileCode2 size={15} color="#22d4fd" /> React
          </FloatingBadge>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollCue}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>scroll</span>
      </motion.div>
    </section>
  );
}
