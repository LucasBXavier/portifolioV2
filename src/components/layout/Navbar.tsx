"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/lib/data";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrolled } from "@/hooks/useScrolled";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import styles from "./Navbar.module.css";

export function Navbar() {
  const scrolled = useScrolled(32);
  const activeId = useActiveSection(navLinks.map((l) => l.href.replace("#", "")));
  const [open, setOpen] = useState(false);

  const handleMobileNavigation = (href: string) => {
    setOpen(false);

    window.setTimeout(() => {
      const target = document.querySelector(href);
      if (!(target instanceof HTMLElement)) return;

      window.history.pushState(null, "", href);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 350);
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={`container ${styles.inner}`}>
        <a href="#hero" className={styles.logo}>
          LucasBoareto<span className={styles.dot}>.</span>dev
        </a>

        <ul className={styles.links}>
          {navLinks.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a href={link.href} className={`${styles.link} ${isActive ? styles.active : ""}`}>
                  {link.label}
                  {isActive && (
                    <motion.span
                      className={styles.indicator}
                      layoutId="nav-indicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className={styles.ctaWrap}>
          <AnimatedButton href="#contato" variant="secondary">
            Vamos conversar
          </AnimatedButton>
        </div>

        <button
          className={styles.menuBtn}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className={styles.mobileLinks}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      handleMobileNavigation(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contato"
              className={styles.mobileCta}
              onClick={(event) => {
                event.preventDefault();
                handleMobileNavigation("#contato");
              }}
            >
              Vamos conversar
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
