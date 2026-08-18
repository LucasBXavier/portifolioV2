import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lucas Boareto",
    short_name: "Lucas Boareto",
    description:
      "Portfólio de Lucas Boareto, desenvolvedor Full Stack especializado em Java, Spring Boot, React e Next.js.",
    start_url: "/",
    display: "standalone",
    background_color: "#050816",
    theme_color: "#7c3aed",
    lang: "pt-BR",
    orientation: "portrait",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
