"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { AnchorHTMLAttributes, ReactNode, useRef } from "react";
import { Button } from "./Button";
import styles from "./AnimatedButton.module.css";

type AnimatedButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  icon?: ReactNode;
  href: string;
};

const STRENGTH = 0.35;

export function AnimatedButton({ href, children, variant = "primary", icon, ...rest }: AnimatedButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * STRENGTH);
    y.set(relY * STRENGTH);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={styles.magnet}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      <Button href={href} variant={variant} icon={icon} {...rest}>
        {children}
      </Button>
    </motion.div>
  );
}
