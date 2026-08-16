"use client";

import { motion } from "framer-motion";
import { ElementType } from "react";
import styles from "./AnimatedTitle.module.css";

type AnimatedTitleProps = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
};

export function AnimatedTitle({ text, as: Tag = "h2", className = "", delay = 0 }: AnimatedTitleProps) {
  const words = text.split(" ");

  return (
    <Tag className={`${styles.title} ${className}`}>
      <span className={styles.wrap} aria-label={text}>
        {words.map((word, i) => (
          <span className={styles.wordMask} key={`${word}-${i}`}>
            <motion.span
              className={styles.word}
              initial={{ y: "110%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.9,
                delay: delay + i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}
