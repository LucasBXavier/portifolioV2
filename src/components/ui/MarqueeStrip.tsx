import styles from "./MarqueeStrip.module.css";

export function MarqueeStrip({ items }: { items: string[] }) {
  const track = [...items, ...items];

  return (
    <div className={styles.outer}>
      <div className={styles.track}>
        {track.map((item, i) => (
          <div className={styles.item} key={`${item}-${i}`}>
            <span className={i % 4 === 0 ? styles.highlight : undefined}>{item}</span>
            <span className={styles.dot} aria-hidden />
          </div>
        ))}
      </div>
    </div>
  );
}
