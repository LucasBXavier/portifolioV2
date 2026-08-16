import { BrowserFrame } from "./BrowserFrame";
import styles from "./ProjectMockup.module.css";

const patterns = [
  { bars: [62, 38, 74, 50], accent: 0 },
  { bars: [45, 80, 30, 65], accent: 1 },
  { bars: [70, 55, 40, 85], accent: 2 },
];

export function ProjectMockup({ index = 0 }: { index?: number }) {
  const pattern = patterns[index % patterns.length];

  return (
    <BrowserFrame>
      <div className={styles.dashboard}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarDot} />
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className={styles.sidebarItem} style={{ width: `${60 + n * 6}%` }} />
          ))}
        </div>
        <div className={styles.main}>
          <div className={styles.statsRow}>
            {pattern.bars.map((h, i) => (
              <div key={i} className={styles.statCard}>
                <div className={styles.statBar} style={{ height: `${h}%` }} />
              </div>
            ))}
          </div>
          <div className={styles.tableRows}>
            {[1, 2, 3].map((n) => (
              <div key={n} className={styles.tableRow}>
                <span className={styles.tableDot} />
                <span className={styles.tableLine} style={{ width: `${40 + n * 15}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
