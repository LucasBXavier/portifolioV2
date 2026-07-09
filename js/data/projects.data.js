const projetos = [
    {
        id: 1,
        nome: "Portfólio Pessoal",
        desafio: "Um site para mostrar meus projetos e habilidades como desenvolvedor web.",
        solução: "Desenvolvi um site para exibir meus projetos e habilidades como desenvolvedor web, com foco em design responsivo e experiência do usuário.",
        link: "https://lucasboareto.vercel.app/",
        imagem: "portifolio.png",
        tecnologias: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 2,
        nome: "Método LD",
        desafio: "Um vendedor de cursos e mentorias precisava de uma presença digital profissional para aumentar a credibilidade e converter visitantes em alunos. O site anterior era genérico e não comunicava o valor da oferta.",
        solução: "Desenvolvi uma landing page focada em conversão, com seção de depoimentos, apresentação da metodologia, preços e CTA claro para compra ou contato direto. Design responsivo e otimizado para carregamento rápido em mobile.",
        link: "https://vida-sem-clt.vercel.app/",
        imagem: "vidaSemCLT.png",
        tecnologias: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 3,
        nome: "KeepTrack",
        desafio: "Desenvolver um sistema completo para controle de manutenções, cadastro de clientes e carros, incluindo relatórios e alertas de manutenção.",
        solução: "Criei um sistema para controle de manutenções, incluindo cadastro de clientes e carros, agendamento de serviços, relatórios e alertas de manutenção, utilizando Spring Boot para o backend e Next.js com React para o frontend. O sistema é seguro, escalável e fácil de usar.",
        link: "https://keeptrack-front.vercel.app",
        imagem: "keepTrack.png",
        tecnologias: ["Spring", "Spring Data JPA", "Spring Security", "Swagger", "Java", "Lombok", "Hibernate", "PostgreSQL", "Next.js", "React", "TypeScript", "radix-ui", "AOS", "eslint", "ExcelJS", "jsPDF", "Sonner"]

    },
    {
        id: 4,
        nome: "LGPD",
        desafio: "Tornar a Lei Geral de Proteção de Dados acessível para pessoas comuns um tema técnico e árido que precisava ser comunicado de forma clara, organizada e visualmente agradável.",
        solução: "Site informativo com arquitetura de conteúdo bem estruturada, navegação intuitiva e visual limpo. Demonstra capacidade de organizar informação complexa em experiências digitais simples e eficientes.",
        link: "https://rhoanbarioni.github.io/LGPD_Facul/index.html",
        imagem: "LGPD.png",
        tecnologias: ["HTML", "SCSS", "JavaScript"]
    },
    {
        id: 5,
        nome: "Busca CEP",
        desafio: "Uma aplicação simples para buscar endereços a partir do CEP utilizando uma API externa.",
        solução: "Desenvolvi uma aplicação web responsiva que permite aos usuários buscar informações de endereços através do CEP, utilizando uma API externa para obter os dados.",
        link: "https://lucasbxavier.github.io/busca-CEP/",
        imagem: "buscaCEP.png",
        tecnologias: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 6,
        nome: "GastroInfo",
        desafio: "Criar um recurso digital confiável e acessível sobre doenças intestinais, alergias e intolerâncias alimentares área em que a desinformação é comum e a necessidade por conteúdo claro é enorme.",
        solução: "Site informativo com categorização clara por tipo de condição, linguagem acessível e navegação pensada para quem está buscando informação em momento de dúvida ou urgência. Demonstra capacidade de estruturar projetos com propósito real e público definido.",
        link: "https://lucasbxavier.github.io/GastroInfo/",
        imagem: "gastroInfo.png",
        tecnologias: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 8,
        nome: "Spring Cloud",
        desafio: "Desenvolver um projeto de microsserviços utilizando Spring Cloud para demonstrar comunicação entre serviços.",
        solução: "Implementei uma arquitetura de microsserviços com Spring Cloud, incluindo descoberta de serviços, balanceamento de carga e roteamento inteligente.",
        link: "https://github.com/LucasBXavier/springCloud",
        imagem: "springCloud.png",
        tecnologias: ["Spring", "Java", "Spring Cloud", "Lombok", "Eureka", "Feign", "Spring Cloud Gateway", "RestTemplate"]
    },
    {
        id: 9,
        nome: "SmartClass",
        desafio: "Desenvolver uma API Rest para gerenciar as salas de aula de uma faculdade.",
        solução: "Criei uma API Restful para gerenciar o cadastro e a disponibilidade das salas de aula, permitindo agendamentos e consultas eficientes.",
        link: "https://github.com/LucasBXavier/SmartClass",
        imagem: "smartClass.png",
        tecnologias: ["Spring", "Java", "Lombok", "JPA", "Hibernate", "PostgreSQL"]
    },
    {
        id: 10,
        nome: "ToDo List API Rest",
        desafio: "Desenvolver uma API RESTful para gerenciar tarefas em uma lista de afazeres.",
        solução: "Criei uma API RESTful para gerenciar o cadastro e a atualização das tarefas, permitindo operações eficientes de criação, leitura, atualização e exclusão.",
        link: "https://github.com/LucasBXavier/ToDoList",
        imagem: "ToDoList.png",
        tecnologias: ["Spring", "Java", "H2 Database", "Lombok"]
    }
];

export default projetos;