export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export const timelineSteps = [
  {
    year: "2023",
    title: "Início na Ciência da Computação",
    description:
      "Ingresso na UNG (Universidade de Guarulhos) e mergulho em lógica, algoritmos e fundamentos de engenharia de software.",
  },
  {
    year: "2024",
    title: "Backend Java na Michelin Connected Fleet",
    description:
      "Estágio em ambiente corporativo internacional, desenvolvendo microsserviços em Java com Spring Boot 3 para sistemas de alta disponibilidade.",
  },
  {
    year: "2024",
    title: "Migração & Infraestrutura",
    description:
      "Liderança na migração de versões críticas do Java (11 → 17 → 21) e do OpenShift (3 → 4), reduzindo instabilidades de deploy.",
  },
  {
    year: "2025",
    title: "Qualidade & CI/CD",
    description:
      "Suíte de testes automatizados com cobertura de até 100% em serviços críticos e atuação direta no pipeline via Jenkins e OpenShift.",
  },
  {
    year: "2026",
    title: "Maintora (SaaS)",
    description:
      "Idealização e desenvolvimento de uma plataforma multi-tenant para o setor automotivo, com autenticação JWT e arquitetura escalável.",
  },
  {
    year: "2026",
    title: "Evolução em Arquitetura de Software",
    description:
      "Foco contínuo em sistemas distribuídos, Clean Architecture e arquitetura hexagonal, aprofundando a atuação como desenvolvedor backend.",
  },
];

export type Tech = { name: string; core?: boolean };

export type TechCategory = {
  title: string;
  icon: "backend" | "frontend" | "devops" | "database" | "ai";
  techs: Tech[];
};

export const techCategories: TechCategory[] = [
  {
    title: "Backend",
    icon: "backend",
    techs: [
      { name: "Java 11+", core: true },
      { name: "Spring Boot 3", core: true },
      { name: "Microsserviços", core: true },
      { name: "REST APIs" },
      { name: "Clean Architecture" },
      { name: "Arquitetura Hexagonal" },
      { name: "C#" },
      { name: ".NET" },
    ],
  },
  {
    title: "Frontend",
    icon: "frontend",
    techs: [
      { name: "Next.js", core: true },
      { name: "React", core: true },
      { name: "Angular" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "devops",
    techs: [
      { name: "Docker", core: true },
      { name: "CI/CD", core: true },
      { name: "Kafka", core: true },
      { name: "Jenkins" },
      { name: "OpenShift" },
      { name: "3Scale (API Gateway)" },
    ],
  },
  {
    title: "Banco de Dados",
    icon: "database",
    techs: [
      { name: "PostgreSQL", core: true },
      { name: "MySQL", core: true },
    ],
  },
  {
    title: "IA & Produtividade",
    icon: "ai",
    techs: [
      { name: "Claude", core: true },
      { name: "GitHub Copilot" },
      { name: "Prompt Engineering" },
    ],
  },
];

export const methodologies = ["Scrum", "Kanban", "Cerimônias Ágeis"];

export const featuredTech = [
  "Java 11+",
  "Spring Boot 3",
  "Microsserviços",
  "Next.js",
  "React",
  "Docker",
  "Kafka",
  "PostgreSQL",
  "OpenShift",
  "CI/CD",
  "Clean Architecture",
  "Angular",
  "C# / .NET",
  "Jenkins",
  "MySQL",
  "Claude",
];

export type ProjectVisual =
  | { type: "mockup" }
  | { type: "content-site" }
  | { type: "telegram" };

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  features: string[];
  tech: string[];
  github?: string;
  demo?: string;
  visual: ProjectVisual;
};

export const projects: Project[] = [
  {
    id: "maintora",
    title: "Maintora",
    tagline: "Plataforma SaaS multi-tenant para o setor automotivo",
    description:
      "Plataforma fullstack para gestão de veículos, manutenções, clientes e financeiro, com APIs REST, autenticação JWT e cache híbrido.",
    problem:
      "Oficinas e frotistas dependiam de planilhas e controles manuais dispersos, gerando retrabalho e perda de histórico de manutenção dos veículos.",
    solution:
      "Arquitetura SaaS multi-tenant com isolamento completo de dados entre clientes, autenticação JWT com refresh token e APIs documentadas via Swagger/OpenAPI.",
    impact:
      "Redução de até 70% no tempo de busca de informações e eliminação do retrabalho com digitalização completa do histórico de veículos.",
    features: [
      "Autenticação JWT com refresh token",
      "Dashboard de indicadores operacionais",
      "Multi-tenancy com isolamento completo de dados",
      "Geração automática de relatórios",
    ],
    tech: ["Next.js", "Spring Boot", "PostgreSQL", "JWT", "Swagger/OpenAPI"],
    demo: "https://maintora.com.br",
    visual: { type: "mockup" },
  },
  {
    id: "gastroinfo",
    title: "GastroInfo",
    tagline: "Portal educativo sobre saúde gastrointestinal",
    description:
      "Site informativo sobre saúde gastrointestinal, reunindo conteúdo sobre alergias alimentares, intolerâncias, doenças gastrointestinais e orientações gerais de dieta.",
    problem:
      "Informação confiável sobre saúde gastrointestinal costuma estar dispersa ou é densa demais para consulta rápida por quem busca orientação no dia a dia.",
    solution:
      "Site estático com separação entre dados e renderização: conteúdo centralizado em módulos JavaScript e scripts dedicados que geram a interface dinamicamente, com busca e navegação simples.",
    impact:
      "Conteúdo educativo organizado por tema, com leitura rápida e navegação direta entre alergias, intolerâncias, doenças e orientações de dieta.",
    features: [
      "Conteúdo educativo sobre alergias e intolerâncias alimentares",
      "Seções dedicadas a doenças gastrointestinais",
      "Orientações gerais de dieta",
      "Busca e navegação simples, com foco em leitura rápida",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Font Awesome"],
    github: "https://github.com/LucasBXavier/GastroInfo",
    demo: "https://lucasbxavier.github.io/GastroInfo/",
    visual: { type: "content-site" },
  },
  {
    id: "finance-bot",
    title: "Finance Bot",
    tagline: "Bot de finanças pessoais no Telegram",
    description:
      "Bot para Telegram que registra despesas e receitas por comando, persiste os dados em uma planilha Google Sheets e exporta relatórios mensais em XLSX.",
    problem:
      "Controlar gastos manualmente em planilhas exige abrir um app à parte, e a maioria das pessoas abandona o hábito nas primeiras semanas.",
    solution:
      "Bot em Node.js integrado à API do Telegram e à API do Google Sheets, com comandos diretos para registrar transações e gerar relatórios sem sair do chat.",
    impact:
      "Registro de despesas em segundos direto do Telegram, com histórico centralizado em planilha e relatórios mensais prontos para exportação.",
    features: [
      "Comandos /gasto e /receita para registrar transações",
      "Resumo mensal com /mes e relatório completo com /relatorio",
      "Exportação de relatórios em XLSX com /export",
      "Persistência automática em Google Sheets",
    ],
    tech: ["Node.js", "Telegram Bot API", "Google Sheets API", "XLSX"],
    github: "https://github.com/LucasBXavier/finance-bot",
    visual: { type: "telegram" },
  },
];

export type Service = {
  icon: "backend" | "frontend" | "systems" | "consulting";
  title: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    icon: "backend",
    title: "Desenvolvimento Backend",
    description:
      "APIs robustas e escaláveis construídas com Java e Spring Boot, prontas para crescer junto com o seu negócio.",
    items: ["APIs REST", "Microsserviços", "Spring Boot", "Integrações", "Arquitetura"],
  },
  {
    icon: "frontend",
    title: "Desenvolvimento Frontend",
    description:
      "Interfaces modernas e performáticas que unem design cuidadoso a código limpo e reutilizável.",
    items: ["Landing Pages", "Sistemas Web", "Dashboards", "React", "Next.js"],
  },
  {
    icon: "systems",
    title: "Sistemas Sob Medida",
    description:
      "Soluções personalizadas para automatizar processos e centralizar a gestão do seu negócio.",
    items: ["ERP", "CRM", "Automações", "Painéis Administrativos"],
  },
  {
    icon: "consulting",
    title: "Consultoria Técnica",
    description:
      "Análise e direcionamento técnico para elevar a qualidade, performance e escalabilidade do seu produto.",
    items: ["Arquitetura", "Refatoração", "Performance", "Boas práticas", "Escalabilidade"],
  },
];

export const processSteps = [
  {
    title: "Descoberta",
    description: "Entendimento profundo do problema, objetivos e contexto do negócio.",
  },
  {
    title: "Planejamento",
    description: "Definição de escopo, prazos e prioridades técnicas do projeto.",
  },
  {
    title: "Arquitetura",
    description: "Desenho da solução com foco em escalabilidade e boas práticas.",
  },
  {
    title: "Desenvolvimento",
    description: "Implementação iterativa com entregas contínuas e código limpo.",
  },
  {
    title: "Testes",
    description: "Validação funcional, de performance e segurança da aplicação.",
  },
  {
    title: "Entrega",
    description: "Deploy da solução em produção com monitoramento ativo.",
  },
  {
    title: "Suporte",
    description: "Acompanhamento contínuo, ajustes e evolução do produto.",
  },
];

export const contactInfo = [
  {
    icon: "mail" as const,
    label: "Email",
    value: "lucasboareto.dev@gmail.com",
    href: "mailto:lucasboareto.dev@gmail.com",
  },
  {
    icon: "whatsapp" as const,
    label: "WhatsApp",
    value: "+55 11 96411-6489",
    href: "https://wa.me/5511964116489",
  },
  {
    icon: "instagram" as const,
    label: "Instagram",
    value: "@lucasboareto.dev",
    href: "https://instagram.com/lucasboareto.dev",
  },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com/lucasboareto.dev" },
];
