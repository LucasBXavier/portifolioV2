import { socialLinks } from "@/lib/data";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.name}>
            Lucas Boareto Xavier<span className={styles.dot}>.</span>
          </span>
          <p className={styles.message}>
            Construindo experiências digitais que unem performance, design e arquitetura.
          </p>
        </div>

        <ul className={styles.social}>
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <span className={styles.copy}>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
