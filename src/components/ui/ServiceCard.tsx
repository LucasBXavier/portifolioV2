import { Cog, LayoutPanelLeft, ServerCog, Wrench } from "lucide-react";
import { Service } from "@/lib/data";
import { GlowCard } from "./GlowCard";
import styles from "./ServiceCard.module.css";

const icons = {
  backend: ServerCog,
  frontend: LayoutPanelLeft,
  systems: Cog,
  consulting: Wrench,
};

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = icons[service.icon];

  return (
    <GlowCard className={styles.card}>
      <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
      <span className={styles.iconBox}>
        <Icon size={22} strokeWidth={1.6} />
      </span>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.description}>{service.description}</p>
      <ul className={styles.items}>
        {service.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </GlowCard>
  );
}
