import type { Metadata } from "next";
import { Krona_One, SUSE } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

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
  title: {
    default: "Lucas Boareto | Desenvolvedor Full Stack Java & Spring Boot",
    template: "%s | Lucas Boareto",
  },
  description:
    "Desenvolvedor Full Stack especialista em Java, Spring Boot, arquitetura de software e interfaces modernas com React e Next.js.",
  applicationName: "Lucas Boareto Portfolio",
  keywords: [
    "desenvolvedor full stack",
    "java",
    "spring boot",
    "arquitetura de software",
    "react",
    "next.js",
    "backend",
    "software engineer",
    "api",
    "microserviços",
    "saas",
  ],
  authors: [{ name: "Lucas Boareto Xavier" }],
  creator: "Lucas Boareto Xavier",
  publisher: "Lucas Boareto Xavier",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lucas Boareto | Desenvolvedor Full Stack Java & Spring Boot",
    description:
      "Construo aplicações escaláveis, APIs robustas e interfaces modernas focadas em performance, arquitetura limpa e experiência de usuário.",
    url: siteUrl,
    siteName: "Lucas Boareto",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Lucas Boareto - Desenvolvedor Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Boareto | Desenvolvedor Full Stack Java & Spring Boot",
    description:
      "Construo aplicações escaláveis, APIs robustas e interfaces modernas focadas em performance e boas práticas de engenharia de software.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${kronaOne.variable} ${suse.variable}`}>
      <head>
        <meta
          name="google-site-verification"
          content="DrW6cNGKYPWv5Yh8bSjQQnqvHt2DUyOcLw4xMqiCigA"
        />
      </head>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
