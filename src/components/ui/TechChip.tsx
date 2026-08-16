import { Tech } from "@/lib/data";
import styles from "./TechChip.module.css";

export function TechChip({ name, core, index = 0 }: Tech & { index?: number }) {
  return (
    <span
      className={`${styles.chip} ${core ? styles.core : ""}`}
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      {name}
    </span>
  );
}
