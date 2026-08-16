import { Apple, Search, ShieldAlert, Stethoscope, Wheat } from "lucide-react";
import { BrowserFrame } from "./BrowserFrame";
import styles from "./GastroInfoMockup.module.css";

const categories = [
  { icon: ShieldAlert, label: "Alergias" },
  { icon: Wheat, label: "Intolerâncias" },
  { icon: Stethoscope, label: "Doenças" },
  { icon: Apple, label: "Dieta" },
];

const articles = [{ width: "82%" }, { width: "68%" }, { width: "74%" }, { width: "60%" }];

export function GastroInfoMockup() {
  return (
    <BrowserFrame>
      <div className={styles.site}>
        <div className={styles.topbar}>
          <span className={styles.logoDot} />
          <div className={styles.searchBar}>
            <Search size={12} strokeWidth={2} />
            <span className={styles.searchText}>Buscar por tema...</span>
          </div>
        </div>

        <div className={styles.categories}>
          {categories.map(({ icon: Icon, label }) => (
            <span key={label} className={styles.category}>
              <Icon size={14} strokeWidth={1.8} />
              {label}
            </span>
          ))}
        </div>

        <div className={styles.grid}>
          {articles.map((article, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.cardIcon} />
              <span className={styles.cardTitle} style={{ width: article.width }} />
              <span className={styles.cardLine} />
              <span className={styles.cardLine} style={{ width: "60%" }} />
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}
