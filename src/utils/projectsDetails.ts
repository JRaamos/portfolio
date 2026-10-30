export type Locale = "pt" | "en";
export type Text = Record<Locale, string>;
export const copy = (pt: string, en: string): Text => ({ pt, en });
export const projectsDetails = [
  {
    slug: "febraio-tech",
    title: "Febraio Tech",
    number: "01",
    kind: copy("Estúdio de software", "Software studio"),
    img: "/images/febraio-tech.jpg",
    imageStyle: "studio",
    summary: copy(
      "Tecnologia com alma humana.",
      "Technology with a human soul.",
    ),
    description: copy(
      "Uma presença digital que aproxima pessoas, ideias e software. Da história do estúdio à conversa sobre o próximo projeto.",
      "A digital presence connecting people, ideas and software. From the studio story to a conversation about the next project.",
    ),
    challenge: copy(
      "Apresentar um estúdio de desenvolvimento com personalidade, sem perder a clareza sobre o que ele faz e como começar uma conversa.",
      "Give a software studio a distinct voice while making its services and the path to a conversation clear.",
    ),
    solution: copy(
      "Uma experiência editorial em Next.js, com conteúdo gerenciado pelo Strapi, navegação bilíngue e um portal conectado aos serviços do projeto. A história e as imagens dão contexto antes do contato.",
      "An editorial Next.js experience with Strapi-managed content, bilingual navigation and a portal connected to the project services. Story and imagery build context before contact.",
    ),
    techs: ["Next.js", "TypeScript", "Strapi", "PostgreSQL"],
    linkSite: "https://febraiotech.com",
    github: "",
  },
  {
    slug: "febraio-tech-shop",
    title: "FebraioTech Shop",
    number: "02",
    kind: copy("E-commerce", "E-commerce"),
    img: "/images/shop.webp",
    imageStyle: "shop",
    summary: copy("Da descoberta à entrega.", "From discovery to delivery."),
    description: copy(
      "Uma loja de tecnologia com catálogo, jornada de compra e regras de operação trabalhando juntos.",
      "A technology store bringing catalog, shopping experience and operational rules together.",
    ),
    challenge: copy(
      "Construir uma loja que conecte a experiência de compra às regras de catálogo, estoque e pedidos, para além de uma vitrine.",
      "Build a store that connects the shopping experience to catalog, inventory and order rules, beyond the storefront.",
    ),
    solution: copy(
      "Storefront em Next.js e núcleo de comércio em Medusa v2. O projeto reúne modelos de produto, integrações e fluxos operacionais em um monorepo, com regras de negócio no servidor.",
      "A Next.js storefront and a Medusa v2 commerce core. The project brings product models, integrations and operational workflows into a monorepo, with business rules on the server.",
    ),
    techs: ["Next.js", "Medusa v2", "PostgreSQL", "Docker"],
    linkSite: "https://www.febraiotech.com.br",
    github: "",
  },
  {
    slug: "auzen-pet-resort",
    title: "Auzen Pet Resort",
    number: "03",
    kind: copy(
      "Experiência digital · Serviços",
      "Digital experience · Services",
    ),
    img: "/images/auzen.avif",
    imageStyle: "auzen",
    summary: copy(
      "O cuidado começa na experiência.",
      "Care starts with the experience.",
    ),
    description: copy(
      "Acolhimento, natureza e uma jornada clara para conhecer os serviços e planejar a estadia de um pet.",
      "Warmth, nature and a clear journey to explore services and plan a pet’s stay.",
    ),
    challenge: copy(
      "Traduzir o cuidado de um pet resort para uma experiência digital que ajude tutores a entender os serviços, os planos e o processo de reserva.",
      "Translate the care of a pet resort into a digital experience that helps owners understand services, plans and the booking process.",
    ),
    solution: copy(
      "Um site responsivo em React e TypeScript, com imagens adaptadas ao celular, páginas de serviços e conteúdo editorial. O fluxo de reserva organiza as escolhas do tutor antes de encaminhar a conversa ao WhatsApp.",
      "A responsive React and TypeScript website with mobile-adapted imagery, service pages and editorial content. The booking flow organizes the owner’s choices before continuing the conversation on WhatsApp.",
    ),
    techs: ["React", "TypeScript", "Vite", "Motion"],
    linkSite: "https://auzenpetresort.com.br",
    github: "",
  },
  {
    slug: "manual-dos-achados",
    title: "Manual dos Achados",
    number: "04",
    kind: copy("Conteúdo · Descoberta", "Content · Discovery"),
    img: "/images/manual.webp",
    imageStyle: "manual",
    summary: copy(
      "Informação para escolher melhor.",
      "Information for better choices.",
    ),
    description: copy(
      "Guias, rankings e comparações organizados em uma experiência editorial feita para explorar.",
      "Guides, rankings and comparisons in an editorial experience built for exploration.",
    ),
    challenge: copy(
      "Transformar pesquisa de produtos em conteúdo fácil de navegar, comparar e encontrar nos mecanismos de busca.",
      "Turn product research into content that is easy to navigate, compare and discover through search.",
    ),
    solution: copy(
      "Uma plataforma editorial com Next.js e Strapi. Templates de artigos, rankings e comparações compartilham conteúdo estruturado, metadados, URLs canônicas e recursos de descoberta.",
      "An editorial platform using Next.js and Strapi. Articles, rankings and comparison templates share structured content, metadata, canonical URLs and discovery features.",
    ),
    techs: ["Next.js", "React", "Strapi", "SEO"],
    linkSite: "https://www.manualdosachados.com.br",
    github: "https://github.com/JRaamos/guide-to-findings-front-end",
  },
  {
    slug: "timebubble",
    title: "TimeBubble",
    number: "05",
    kind: copy("Aplicativo Android", "Android application"),
    img: "/images/timebubble.webp",
    imageStyle: "timer",
    summary: copy("Seu tempo, sempre à vista.", "Your time, always in sight."),
    description: copy(
      "Um cronômetro flutuante que acompanha o que você faz, por cima dos outros aplicativos.",
      "A floating timer that follows what you do, on top of your other applications.",
    ),
    challenge: copy(
      "Manter um cronômetro visível e controlável enquanto a pessoa usa outros aplicativos, respeitando as permissões e o ciclo de vida do Android.",
      "Keep a timer visible and controllable while people use other apps, respecting Android permissions and lifecycle.",
    ),
    solution: copy(
      "Interface em React Native e Expo integrada a uma camada nativa em Kotlin. A bolha flutuante e o serviço em primeiro plano trabalham com preferências locais para personalizar a experiência.",
      "A React Native and Expo interface integrated with a native Kotlin layer. The floating overlay and foreground service work with local preferences to personalize the experience.",
    ),
    techs: ["React Native", "Expo", "Kotlin", "Android"],
    linkSite:
      "https://play.google.com/store/apps/details?id=br.com.jonathanfebraio.timebubble",
    github: "https://github.com/JRaamos/time-bubble",
  },
  {
    slug: "sistema-de-agendamentos",
    title: "Sistema de Agendamentos",
    number: "06",
    kind: copy("Aplicação full stack", "Full-stack application"),
    img: "/images/agendamento.png",
    imageStyle: "schedule",
    summary: copy(
      "Menos desencontros. Mais tempo.",
      "Less friction. More time.",
    ),
    description: copy(
      "O projeto que conecta clientes e profissionais de uma barbearia em uma agenda compartilhada.",
      "A project connecting barbershop customers and professionals through a shared schedule.",
    ),
    challenge: copy(
      "Facilitar a reserva de serviços de uma barbearia e dar aos profissionais uma visão organizada dos compromissos.",
      "Make booking barbershop services easier and give professionals an organized view of appointments.",
    ),
    solution: copy(
      "Uma aplicação full stack com React, Node.js e MySQL. Clientes escolhem serviços e horários; os profissionais acompanham sua agenda. Um capítulo importante da minha evolução no desenvolvimento de produtos.",
      "A full-stack application with React, Node.js and MySQL. Customers choose services and time slots while professionals manage their schedules. An important chapter in my evolution as a product developer.",
    ),
    techs: ["React", "Node.js", "TypeScript", "MySQL"],
    linkSite: "https://sistema-de-agendamento-developer.vercel.app",
    github: "https://github.com/JRaamos/Sistema-de-Agendamento",
  },
];
export type Project = (typeof projectsDetails)[number];
export function findProject(id?: string) {
  // Preserve the scheduling case's original URL. Retired cases are not reassigned.
  if (id === "0") return projectsDetails[5];
  return projectsDetails.find((project) => project.slug === id);
}
export const stack = [
  {
    title: copy("Interfaces & mobile", "Interfaces & mobile"),
    number: "01",
    description: copy(
      "A parte que as pessoas tocam. Interfaces claras, responsivas e conectadas ao produto.",
      "The part people touch. Clear, responsive interfaces connected to the product.",
    ),
    tools: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "Kotlin",
      "Tailwind CSS",
    ],
  },
  {
    title: copy("Backend & dados", "Backend & data"),
    number: "02",
    description: copy(
      "A estrutura que sustenta a experiência. APIs, regras de negócio e dados no lugar certo.",
      "The structure behind the experience. APIs, business rules and data in the right place.",
    ),
    tools: [
      "Node.js",
      "Strapi",
      "Medusa",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "MySQL",
      "Redis",
    ],
  },
  {
    title: copy("IA & integrações", "AI & integrations"),
    number: "03",
    description: copy(
      "Sistemas que conversam. Busca semântica, automações e serviços conectados com propósito.",
      "Systems that talk. Semantic search, automation and services connected with purpose.",
    ),
    tools: [
      "OpenAI API",
      "RAG",
      "Qdrant",
      "REST APIs",
      "Webhooks",
      "Salesforce",
      "OAuth",
    ],
  },
  {
    title: copy("Cloud & entrega", "Cloud & delivery"),
    number: "04",
    description: copy(
      "Do código à operação. Infraestrutura, testes e publicação fazem parte do mesmo trabalho.",
      "From code to operation. Infrastructure, testing and deployment are part of the same work.",
    ),
    tools: [
      "AWS",
      "Docker",
      "Vercel",
      "Railway",
      "GitHub",
      "GitLab CI/CD",
      "Playwright",
      "Vitest",
    ],
  },
];
