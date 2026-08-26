import { ChefHat, Package, TrendingUp } from "lucide-react";
import { BrowserFrame } from "./BrowserFrame";
import styles from "./SaborPoteMockup.module.css";

const tabs = ["Ingredientes", "Receitas", "Vendas", "Financeiro"];

const ingredients = [
  { name: "Farinha de trigo", price: "R$ 6,20/kg" },
  { name: "Leite condensado", price: "R$ 8,90/kg" },
  { name: "Chocolate 50%", price: "R$ 32,40/kg" },
];

export function SaborPoteMockup() {
  return (
    <BrowserFrame>
      <div className={styles.app}>
        <div className={styles.topbar}>
          <span className={styles.logoDot}>
            <ChefHat size={12} strokeWidth={2} />
          </span>
          <div className={styles.tabs}>
            {tabs.map((tab, i) => (
              <span key={tab} className={`${styles.tab} ${i === 1 ? styles.tabActive : ""}`}>
                {tab}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.ingredients}>
            <span className={styles.panelLabel}>Bolo de pote · chocolate</span>
            {ingredients.map((ing) => (
              <div key={ing.name} className={styles.ingredientRow}>
                <span className={styles.ingredientIcon}>
                  <Package size={12} strokeWidth={1.8} />
                </span>
                <span className={styles.ingredientName}>{ing.name}</span>
                <span className={styles.ingredientPrice}>{ing.price}</span>
              </div>
            ))}
          </div>

          <div className={styles.summary}>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Custo/kg</span>
              <span className={styles.summaryValue}>R$ 14,80</span>
            </div>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Preço venda/kg</span>
              <span className={styles.summaryValue}>R$ 28,00</span>
            </div>
            <div className={styles.marginBar}>
              <div className={styles.marginFill} style={{ width: "62%" }} />
            </div>
            <div className={styles.marginBadge}>
              <TrendingUp size={13} strokeWidth={2} />
              Margem de 47%
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
