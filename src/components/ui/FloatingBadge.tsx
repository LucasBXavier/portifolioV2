"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import styles from "./FloatingBadge.module.css";

type FloatingBadgeProps = {
  children: ReactNode;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  className?: string;
};

export function FloatingBadge({
  children,
  style,
  delay = 0,
  duration = 4.5,
  className = "",
}: FloatingBadgeProps) {
  return (
    <motion.div
      className={`${styles.badge} ${className}`}
      style={style}
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.8, delay },
        scale: { duration: 0.8, delay },
        y: {
          duration,
          delay: delay + 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      {children}
    </motion.div>
  );
}
