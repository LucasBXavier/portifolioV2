import { FileSpreadsheet, Send, Wallet } from "lucide-react";
import styles from "./TelegramMockup.module.css";

type Message =
  | { from: "user" | "bot"; type?: "text"; text: string; time: string }
  | { from: "bot"; type: "file"; name: string; size: string; time: string };

const messages: Message[] = [
  { from: "user", text: "/gasto 45,90 mercado", time: "09:12" },
  { from: "bot", text: "✅ Despesa registrada\nR$ 45,90 · Mercado", time: "09:12" },
  { from: "user", text: "/receita 2500 salário", time: "09:13" },
  { from: "bot", text: "✅ Receita registrada\nR$ 2.500,00 · Salário", time: "09:13" },
  { from: "user", text: "/relatorio", time: "09:14" },
  { from: "bot", text: "📊 Saldo do mês\nR$ 2.454,10", time: "09:14" },
  { from: "bot", type: "file", name: "relatorio-10-2025.xlsx", size: "18 KB", time: "09:15" },
];

export function TelegramMockup() {
  return (
    <div className={styles.frame}>
      <div className={styles.header}>
        <span className={styles.avatar}>
          <Wallet size={17} strokeWidth={1.8} />
        </span>
        <div className={styles.headerText}>
          <span className={styles.botName}>Finance Bot</span>
          <span className={styles.status}>bot</span>
        </div>
      </div>

      <div className={styles.chat}>
        <span className={styles.dateChip}>Hoje</span>

        {messages.map((msg, i) =>
          msg.type === "file" ? (
            <div key={i} className={`${styles.bubble} ${styles.bot} ${styles.fileBubble}`}>
              <span className={styles.fileIcon}>
                <FileSpreadsheet size={16} strokeWidth={1.8} />
              </span>
              <span className={styles.fileInfo}>
                <span className={styles.fileName}>{msg.name}</span>
                <span className={styles.fileSize}>{msg.size}</span>
              </span>
              <span className={styles.time}>{msg.time}</span>
            </div>
          ) : (
            <div key={i} className={`${styles.bubble} ${styles[msg.from]}`}>
              <span className={styles.text}>{msg.text}</span>
              <span className={styles.time}>{msg.time}</span>
            </div>
          )
        )}
      </div>

      <div className={styles.inputBar}>
        <span className={styles.inputPlaceholder}>Mensagem</span>
        <span className={styles.sendBtn}>
          <Send size={14} strokeWidth={2} />
        </span>
      </div>

      <div className={styles.fade} aria-hidden />
      <div className={styles.glowOverlay} aria-hidden />
    </div>
  );
}
