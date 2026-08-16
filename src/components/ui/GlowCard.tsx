"use client";

import { motion } from "framer-motion";
import { HTMLAttributes, ReactNode, useRef } from "react";
import styles from "./GlowCard.module.css";

type GlowCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  as?: "div";
};

export function GlowCard({ children, className = "", ...rest }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      className={`${styles.card} ${className}`}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      {...(rest as Record<string, unknown>)}
    >
      <div className={styles.glow} aria-hidden />
      <div className={styles.content}>{children}</div>
    </motion.div>
  );
}
