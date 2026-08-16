"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ComponentType } from "react";
import styles from "./ContactItem.module.css";

type ContactItemProps = {
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
  label: string;
  value: string;
  href: string;
  index?: number;
};

export function ContactItem({ icon: Icon, label, value, href, index = 0 }: ContactItemProps) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={styles.item}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className={styles.iconBox}>
        <Icon size={20} strokeWidth={1.75} />
      </span>
      <span className={styles.text}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value}>{value}</span>
      </span>
      <span className={styles.arrow}>
        <ArrowUpRight size={18} strokeWidth={1.75} />
      </span>
    </motion.a>
  );
}
