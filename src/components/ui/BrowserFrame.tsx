import { ReactNode } from "react";
import styles from "./BrowserFrame.module.css";

type BrowserFrameProps = {
  children: ReactNode;
  urlLabel?: string;
  className?: string;
};

export function BrowserFrame({ children, urlLabel, className = "" }: BrowserFrameProps) {
  return (
    <div className={`${styles.frame} ${className}`}>
      <div className={styles.chrome}>
        <div className={styles.dots}>
          <span />
          <span />
          <span />
        </div>
        {urlLabel && <span className={styles.urlLabel}>{urlLabel}</span>}
      </div>
      <div className={styles.body}>{children}</div>
      <div className={styles.glowOverlay} aria-hidden />
    </div>
  );
}
