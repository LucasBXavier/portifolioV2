"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TiktokLogo,
} from "@phosphor-icons/react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TechChip } from "@/components/ui/TechChip";
import { duckco } from "@/lib/data";
import styles from "./DuckCo.module.css";

export function DuckCo() {
  return (
    <Section id="duckco" label="Minha empresa" title="DuckCo" description={`${duckco.tagline}.`}>
      <div className={styles.card}>
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.glow} aria-hidden />
          <Image
            src={duckco.logo}
            alt={duckco.logoAlt}
            width={946}
            height={1182}
            sizes="(max-width: 860px) 220px, 280px"
            className={styles.mascot}
          />
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className={styles.lead}>
            Fundei a <strong>{duckco.name}</strong> para levar tecnologia de verdade a quem tem um
            negócio para tocar.
          </p>

          <p className={styles.text}>{duckco.description}</p>

          <div className={styles.chips}>
            {duckco.services.map((service) => (
              <TechChip key={service} name={service} core />
            ))}
          </div>

          <div className={styles.actions}>
            <Button
              href={duckco.url}
              variant="primary"
              icon={<ArrowUpRight size={16} weight="bold" />}
              target="_blank"
              rel="noopener"
            >
              Conhecer a DuckCo
            </Button>

            <ul className={styles.social}>
              <li>
                <a
                  href={duckco.instagram}
                  target="_blank"
                  rel="noopener"
                  aria-label="Instagram da DuckCo"
                >
                  <InstagramLogo size={20} />
                </a>
              </li>
              <li>
                <a
                  href={duckco.linkedin}
                  target="_blank"
                  rel="noopener"
                  aria-label="LinkedIn da DuckCo"
                >
                  <LinkedinLogo size={20} />
                </a>
              </li>
              <li>
                <a
                  href={duckco.facebook}
                  target="_blank"
                  rel="noopener"
                  aria-label="Facebook da DuckCo"
                >
                  <FacebookLogo size={20} />
                </a>
              </li>
              <li>
                <a
                  href={duckco.tiktok}
                  target="_blank"
                  rel="noopener"
                  aria-label="TikTok da DuckCo"
                >
                  <TiktokLogo size={20} />
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
