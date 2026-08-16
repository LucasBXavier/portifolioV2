import { HTMLAttributes, ReactNode } from "react";
import styles from "./Section.module.css";

type SectionProps = HTMLAttributes<HTMLElement> & {
  id: string;
  children: ReactNode;
  label?: string;
  title?: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function Section({
  id,
  children,
  label,
  title,
  description,
  align = "left",
  className,
  ...rest
}: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${className ?? ""}`} {...rest}>
      <div className={`container ${styles.inner}`}>
        {(label || title || description) && (
          <header className={`${styles.header} ${align === "center" ? styles.center : ""}`}>
            {label && <span className={`mono-label ${styles.label}`}>{label}</span>}
            {title && <h2 className={styles.title}>{title}</h2>}
            {description && <p className={styles.description}>{description}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
