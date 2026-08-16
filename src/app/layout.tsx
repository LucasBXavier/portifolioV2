import type { Metadata } from "next";
import { Krona_One, SUSE } from "next/font/google";
import "./globals.css";

const kronaOne = Krona_One({
  variable: "--font-krona",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const suse = SUSE({
  variable: "--font-suse",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://lucasboareto.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Lucas Boareto | Desenvolvedor Full Stack Java & Spring Boot",
  description:
    "Desenvolvedor Full Stack especialista em Java, Spring Boot e Arquitetura de Software. Construo APIs escaláveis e interfaces modernas com React e Next.js.",
  keywords: [
    "desenvolvedor full stack",
    "java",
    "spring boot",
    "arquitetura de software",
    "react",
    "next.js",
    "backend",
  ],
  authors: [{ name: "Lucas Boareto Xavier" }],
  creator: "Lucas Boareto Xavier",
  openGraph: {
    title: "Lucas Boareto | Desenvolvedor Full Stack Java & Spring Boot",
    description:
      "Construo aplicações escaláveis, APIs robustas e interfaces modernas focadas em performance e boas práticas de engenharia de software.",
    url: siteUrl,
    siteName: "Lucas Boareto",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Boareto | Desenvolvedor Full Stack Java & Spring Boot",
    description:
      "Construo aplicações escaláveis, APIs robustas e interfaces modernas focadas em performance e boas práticas de engenharia de software.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${kronaOne.variable} ${suse.variable}`}>
      <body>{children}</body>
    </html>
  );
}
