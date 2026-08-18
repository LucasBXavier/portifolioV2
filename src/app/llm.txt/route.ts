export async function GET() {
  const body = `Lucas Boareto

Desenvolvedor Full Stack especializado em Java, Spring Boot, arquitetura de software, APIs, React e Next.js.

Especialidades:
- Java e Spring Boot
- APIs REST e microsserviços
- React e Next.js
- Arquitetura limpa e escalável
- DevOps, Docker e CI/CD

Site: https://lucasboareto.dev
GitHub: https://github.com/LucasBXavier
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
