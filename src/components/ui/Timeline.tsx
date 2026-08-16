"use client";

import { motion } from "framer-motion";
import styles from "./Timeline.module.css";

type TimelineItem = {
  title: string;
  description: string;
  meta?: string;
};

type TimelineProps = {
  items: TimelineItem[];
  orientation?: "vertical" | "horizontal";
};

export function Timeline({ items, orientation = "vertical" }: TimelineProps) {
  if (orientation === "horizontal") {
    return (
      <div className={styles.horizontal}>
        <div className={styles.horizontalLine} aria-hidden />
        {items.map((item, i) => (
          <motion.div
            className={styles.hStep}
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.hDot}>
              <span className={styles.hDotNumber}>{String(i + 1).padStart(2, "0")}</span>
            </span>
            <h3 className={styles.hTitle}>{item.title}</h3>
            <p className={styles.hDescription}>{item.description}</p>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.vertical}>
      <div className={styles.verticalLine} aria-hidden />
      {items.map((item, i) => (
        <motion.div
          className={styles.vStep}
          key={item.title}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.vDot} />
          {item.meta && <span className={styles.vMeta}>{item.meta}</span>}
          <h3 className={styles.vTitle}>{item.title}</h3>
          <p className={styles.vDescription}>{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
