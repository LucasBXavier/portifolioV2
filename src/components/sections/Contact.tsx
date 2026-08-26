"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { ContactItem } from "@/components/ui/ContactItem";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { InstagramIcon } from "@/components/icons/BrandIcons";
import { contactInfo } from "@/lib/data";
import styles from "./Contact.module.css";

const icons = {
  mail: Mail,
  whatsapp: MessageCircle,
  instagram: InstagramIcon,
};

export function Contact() {
  return (
    <Section
      id="contato"
      label="Contato"
      title="Vamos construir algo juntos?"
      description="Estou disponível para novos projetos, parcerias e oportunidades. Escolha o canal que preferir."
      align="center"
    >
      <div className={styles.grid}>
        {contactInfo.map((info, i) => (
          <ContactItem
            key={info.label}
            icon={icons[info.icon]}
            label={info.label}
            value={info.value}
            href={info.href}
            index={i}
          />
        ))}
      </div>

    </Section>
  );
}
