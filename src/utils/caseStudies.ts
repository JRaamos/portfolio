import { copy, type Text } from "./projectsDetails";
type Detail = { title: Text; text: Text };
export type CaseStudy = {
  context: Text;
  journey: Text[];
  decisions: Detail[];
  learning: Text;
  gallery?: { src: string; caption: Text; mobile?: boolean };
};
export const caseStudies: Record<string, CaseStudy> = {
  "febraio-tech": {
    context: copy(
      "Um estúdio de software precisa mostrar mais do que uma lista de tecnologias. A proposta da Febraio Tech é aproximar quem tem uma ideia de quem pode construí-la. Por isso, a experiência começa pelas pessoas, apresenta o trabalho e abre espaço para uma conversa com contexto.",
      "A software studio needs to show more than a list of technologies. Febraio Tech connects people with an idea to the people who can build it. The experience starts with people, introduces the work and makes room for a conversation with context.",
    ),
    journey: [
      copy(
        "Conhecer a identidade e a visão do estúdio pela narrativa da página inicial.",
        "Discover the studio’s identity and vision through the homepage story.",
      ),
      copy(
        "Explorar projetos e artigos para entender a abordagem e o repertório técnico.",
        "Explore projects and articles to understand the approach and technical background.",
      ),
      copy(
        "Descrever a ideia no contato, com validação e registro do pedido no servidor.",
        "Describe an idea through the contact form, with server-side validation and request storage.",
      ),
    ],
    decisions: [
      {
        title: copy(
          "Conteúdo separado da interface",
          "Content separated from the interface",
        ),
        text: copy(
          "Next.js cuida da apresentação e o Strapi organiza projetos, artigos e conteúdo editorial. Essa divisão permite atualizar a história do estúdio sem transformar cada revisão de texto em uma alteração de código. Campos estruturados mantêm consistência entre listagens e páginas de detalhe.",
          "Next.js handles presentation while Strapi organizes projects, articles and editorial content. This separation lets the studio update its story without turning every copy revision into a code change. Structured fields keep listings and detail pages consistent.",
        ),
      },
      {
        title: copy(
          "A história também precisa ser encontrada",
          "A story also needs to be discoverable",
        ),
        text: copy(
          "HTML renderizado no servidor, URLs canônicas e sitemap fazem parte da arquitetura. Projetos e artigos têm endereço próprio, para que cada conteúdo possa ser compartilhado e encontrado de forma independente da página inicial.",
          "Server-rendered HTML, canonical URLs and a sitemap are part of the architecture. Projects and articles have their own addresses so each piece of content can be shared and found independently of the homepage.",
        ),
      },
      {
        title: copy(
          "Um contato é um fluxo de produto",
          "Contact is a product flow",
        ),
        text: copy(
          "O formulário envia o contexto da solicitação para uma API, onde os dados são validados e registrados. A interface só apresenta sucesso após a confirmação do registro. Isso distingue o clique no botão da conclusão real da solicitação.",
          "The form sends the request context to an API, where data is validated and stored. The interface only shows success after storage is confirmed. This distinguishes a button click from an actually completed request.",
        ),
      },
    ],
    learning: copy(
      "Identidade e engenharia se encontram nos detalhes: o ritmo da leitura, a estrutura do conteúdo e o comportamento do formulário precisam contar a mesma história. Um site institucional também merece ser tratado como produto.",
      "Identity and engineering meet in the details: reading rhythm, content structure and form behavior need to tell the same story. A studio website deserves to be treated as a product.",
    ),
  },
  "febraio-tech-shop": {
    context: copy(
      "Na loja, a experiência não termina na escolha de um produto. Catálogo, estoque, carrinho e pedido precisam compartilhar as mesmas regras. O projeto foi estruturado para conectar uma vitrine de tecnologia à operação de comércio que existe por trás dela.",
      "In a store, the experience does not end with choosing a product. Catalog, inventory, cart and order need to share the same rules. The project connects a technology storefront to the commerce operations behind it.",
    ),
    journey: [
      copy(
        "Descobrir produtos pelo catálogo e consultar suas características.",
        "Discover products through the catalog and review their specifications.",
      ),
      copy(
        "Organizar a compra no carrinho e avançar pelas etapas do checkout.",
        "Organize a purchase in the cart and progress through checkout.",
      ),
      copy(
        "Conectar o pedido às regras de estoque e aos fluxos do núcleo de comércio.",
        "Connect the order to inventory rules and commerce workflows.",
      ),
    ],
    decisions: [
      {
        title: copy(
          "Uma vitrine independente do motor de comércio",
          "A storefront independent of the commerce engine",
        ),
        text: copy(
          "Next.js concentra a experiência de navegação; Medusa v2 modela os recursos de comércio. Essa separação permite evoluir a interface sem duplicar regras de pedidos e produtos no navegador. O custo é cuidar explicitamente dos contratos entre as duas aplicações.",
          "Next.js owns the browsing experience; Medusa v2 models commerce resources. This separation lets the interface evolve without duplicating order and product rules in the browser. The trade-off is explicitly maintaining contracts between the two applications.",
        ),
      },
      {
        title: copy(
          "As regras importantes ficam no servidor",
          "Important rules stay on the server",
        ),
        text: copy(
          "O backend concentra as decisões operacionais. A interface apresenta escolhas e estados, enquanto o núcleo de comércio valida as operações. Assim, a lógica não depende apenas do caminho que uma pessoa percorreu pela tela.",
          "The backend centralizes operational decisions. The interface presents choices and states while the commerce core validates operations. Business logic therefore does not depend solely on the path someone took through the screen.",
        ),
      },
      {
        title: copy(
          "Monorepo para evoluir as partes juntas",
          "A monorepo to evolve the parts together",
        ),
        text: copy(
          "Storefront e commerce convivem no mesmo repositório, com responsabilidades separadas. PostgreSQL sustenta os dados e Docker organiza a infraestrutura local. A proximidade do código facilita revisar mudanças que atravessam interface, API e modelos de negócio.",
          "Storefront and commerce live in the same repository with separate responsibilities. PostgreSQL supports the data and Docker organizes local infrastructure. Keeping the code together makes changes spanning the interface, API and business models easier to review.",
        ),
      },
    ],
    learning: copy(
      "Uma loja é um sistema de estados e transições. O principal exercício de engenharia é manter coerência entre o que a pessoa vê e o que a operação permite, incluindo situações de erro e indisponibilidade.",
      "A store is a system of states and transitions. The main engineering challenge is keeping what a person sees consistent with what operations allow, including errors and unavailability.",
    ),
  },
  "auzen-pet-resort": {
    context: copy(
      "Escolher onde deixar um pet é uma decisão de confiança. A experiência digital da Auzen precisa apresentar o espaço, explicar a rotina e ajudar o tutor a chegar ao atendimento com suas principais dúvidas resolvidas. O conteúdo e a jornada de reserva foram pensados como partes do mesmo cuidado.",
      "Choosing where to leave a pet is a decision built on trust. Auzen’s digital experience presents the space, explains daily care and helps owners arrive at a conversation with their main questions answered. Content and booking were designed as parts of the same care.",
    ),
    journey: [
      copy(
        "Conhecer o ambiente e comparar hotel e creche.",
        "Explore the space and compare boarding with daycare.",
      ),
      copy(
        "Informar os dados da estadia e revisar uma estimativa no formulário em etapas.",
        "Enter stay details and review an estimate in a step-by-step form.",
      ),
      copy(
        "Continuar pelo WhatsApp com uma mensagem organizada; a equipe confirma a vaga e o pagamento.",
        "Continue on WhatsApp with an organized message; the team confirms availability and payment.",
      ),
    ],
    decisions: [
      {
        title: copy(
          "Uma reserva assistida, com expectativas claras",
          "Assisted booking with clear expectations",
        ),
        text: copy(
          "O formulário prepara a solicitação e o atendimento continua no WhatsApp. A escolha respeita uma operação em que a equipe precisa avaliar disponibilidade e necessidades do pet. A estimativa ajuda a planejar, enquanto a confirmação permanece com quem cuida da estadia.",
          "The form prepares the request and service continues on WhatsApp. This respects an operation where the team needs to assess availability and the pet’s needs. The estimate helps with planning while confirmation stays with the people responsible for the stay.",
        ),
      },
      {
        title: copy(
          "Cálculo separado da apresentação",
          "Calculations separated from presentation",
        ),
        text: copy(
          "Regras de datas, valores e composição da mensagem ficam em funções próprias. Isso permite validar o cálculo sem depender do layout e facilita revisar condições comerciais sem espalhar números por várias páginas.",
          "Date, price and message-building rules live in dedicated functions. This makes calculations testable without relying on layout and lets commercial conditions change without scattering numbers across pages.",
        ),
      },
      {
        title: copy(
          "Imagens que funcionam também no celular",
          "Images that also work on mobile",
        ),
        text: copy(
          "As imagens têm versões e enquadramentos para diferentes larguras. O vídeo é carregado sob demanda e as transições respeitam a preferência por menos movimento. O objetivo é apresentar o ambiente com cuidado, preservando leitura e navegação em telas pequenas.",
          "Images have variants and framing for different widths. Video loads on demand and transitions respect reduced-motion preferences. The goal is to present the space thoughtfully while preserving readability and navigation on small screens.",
        ),
      },
    ],
    learning: copy(
      "Uma boa experiência de serviço prepara uma conversa melhor. Clareza sobre etapas, estimativas e confirmação faz parte do design tanto quanto a fotografia e as cores.",
      "A good service experience prepares a better conversation. Clarity about steps, estimates and confirmation is as much a part of design as photography and color.",
    ),
  },
  "manual-dos-achados": {
    context: copy(
      "Pesquisar um produto costuma significar abrir muitas abas e comparar informações em formatos diferentes. O Manual dos Achados organiza essa descoberta em guias, rankings e comparações, dando ao conteúdo uma estrutura que ajuda a leitura e a navegação.",
      "Researching a product often means opening many tabs and comparing information in different formats. Manual dos Achados organizes discovery into guides, rankings and comparisons, giving content a structure that supports reading and navigation.",
    ),
    journey: [
      copy(
        "Encontrar um tema ou categoria de interesse.",
        "Find a topic or category of interest.",
      ),
      copy(
        "Ler guias e rankings com uma hierarquia editorial consistente.",
        "Read guides and rankings with a consistent editorial hierarchy.",
      ),
      copy(
        "Explorar comparações e conteúdos relacionados antes de decidir.",
        "Explore comparisons and related content before deciding.",
      ),
    ],
    decisions: [
      {
        title: copy(
          "Modelar o conteúdo antes de desenhar a página",
          "Model content before designing the page",
        ),
        text: copy(
          "Strapi organiza o conteúdo e Next.js compõe a experiência de leitura. Templates compartilhados evitam que cada artigo precise de uma página feita do zero. A estrutura editorial ganha consistência sem impedir que cada assunto tenha seu próprio texto e contexto.",
          "Strapi organizes content and Next.js composes the reading experience. Shared templates avoid building every article page from scratch. The editorial structure stays consistent while each subject keeps its own text and context.",
        ),
      },
      {
        title: copy(
          "SEO como parte da estrutura",
          "SEO as part of the structure",
        ),
        text: copy(
          "Metadados, URLs canônicas e páginas com endereços próprios conectam a organização interna do conteúdo à descoberta por busca. Esses recursos também tornam o compartilhamento mais claro, com títulos e descrições específicos para cada página.",
          "Metadata, canonical URLs and individually addressable pages connect content organization to search discovery. They also make sharing clearer, with titles and descriptions specific to each page.",
        ),
      },
      {
        title: copy("Leitura antes de decoração", "Reading before decoration"),
        text: copy(
          "Guias e comparações precisam ser fáceis de percorrer. Títulos, espaçamento e padrões de apresentação ajudam a diferenciar o resumo da análise e a manter a orientação em páginas longas. A interface apoia a pesquisa sem disputar atenção com o conteúdo.",
          "Guides and comparisons need to be easy to scan. Headings, spacing and presentation patterns distinguish summaries from analysis and help readers stay oriented on long pages. The interface supports research without competing with the content.",
        ),
      },
    ],
    learning: copy(
      "Uma plataforma editorial cresce melhor quando conteúdo e interface compartilham um modelo claro. O trabalho técnico não está só em publicar páginas, mas em manter uma experiência coerente à medida que o acervo aumenta.",
      "An editorial platform grows better when content and interface share a clear model. The technical work is not just publishing pages, but keeping the experience coherent as the collection grows.",
    ),
    gallery: {
      src: "/images/manual-guide.webp",
      caption: copy(
        "A proposta editorial e a organização da descoberta no Manual dos Achados.",
        "The editorial approach and discovery structure in Manual dos Achados.",
      ),
    },
  },
  timebubble: {
    context: copy(
      "O TimeBubble nasceu de uma necessidade direta: acompanhar o tempo sem abandonar o aplicativo que está em uso. Uma bolha flutuante parece simples na tela, mas envolve permissões, comunicação com o Android e continuidade do cronômetro fora da interface principal.",
      "TimeBubble grew from a direct need: keep track of time without leaving the app currently in use. A floating bubble looks simple on screen, but involves permissions, communication with Android and continuity outside the main interface.",
    ),
    journey: [
      copy(
        "Configurar o cronômetro e personalizar a aparência.",
        "Configure the timer and customize its appearance.",
      ),
      copy(
        "Autorizar a exibição sobre outros aplicativos no Android.",
        "Allow display over other apps on Android.",
      ),
      copy(
        "Acompanhar e controlar o tempo pela bolha enquanto usa outro aplicativo.",
        "Track and control time through the bubble while using another app.",
      ),
    ],
    decisions: [
      {
        title: copy(
          "React Native na experiência, Kotlin no sistema",
          "React Native for the experience, Kotlin for the system",
        ),
        text: copy(
          "React Native e Expo organizam as telas e preferências. Kotlin integra a janela flutuante aos recursos nativos do Android. Essa divisão mantém a construção da interface produtiva e dá à função principal o acesso ao sistema de que ela precisa.",
          "React Native and Expo organize screens and preferences. Kotlin integrates the floating window with native Android capabilities. This division keeps interface development productive and gives the core feature the system access it needs.",
        ),
      },
      {
        title: copy(
          "O cronômetro não pode depender de uma tela aberta",
          "The timer cannot depend on an open screen",
        ),
        text: copy(
          "Um serviço em primeiro plano coordena o cronômetro fora da tela principal. A camada nativa separa serviço, gerenciamento da janela, estado e comunicação de eventos. O desafio é manter a interface informada mesmo quando o aplicativo muda de estado.",
          "A foreground service coordinates the timer outside the main screen. The native layer separates the service, window management, state and event communication. The challenge is keeping the interface informed as the app changes state.",
        ),
      },
      {
        title: copy(
          "Personalização perto de quem usa",
          "Personalization close to the user",
        ),
        text: copy(
          "As preferências de aparência ficam armazenadas localmente. A pessoa ajusta a bolha ao próprio uso sem depender de uma conta para essa configuração. O desenho da experiência também considera a passagem entre o aplicativo e as telas de permissão do Android.",
          "Appearance preferences are stored locally. People adapt the bubble to their needs without an account for this configuration. The experience also considers the transition between the app and Android’s permission screens.",
        ),
      },
    ],
    learning: copy(
      "Aplicativos que atravessam a fronteira da própria tela exigem atenção ao ciclo de vida do sistema. A simplicidade da bolha depende de uma separação cuidadosa entre interface, estado e serviços nativos.",
      "Apps that cross the boundary of their own screen require attention to the system lifecycle. The bubble’s simplicity depends on carefully separating interface, state and native services.",
    ),
    gallery: {
      src: "/images/timebubble-customization.webp",
      caption: copy(
        "Personalização da aparência da bolha no aplicativo Android.",
        "Bubble appearance customization in the Android app.",
      ),
      mobile: true,
    },
  },
  "sistema-de-agendamentos": {
    context: copy(
      "Este projeto marca uma etapa importante da minha formação: sair de telas isoladas para construir um fluxo que conecta pessoas e dados. O cenário de uma barbearia tornou concretos problemas como escolher um serviço, organizar horários e apresentar uma agenda útil ao profissional.",
      "This project marks an important stage in my training: moving from isolated screens to a flow connecting people and data. A barbershop made problems like choosing a service, organizing time slots and presenting a useful professional schedule tangible.",
    ),
    journey: [
      copy(
        "Consultar os serviços e escolher o atendimento desejado.",
        "Browse services and choose the desired appointment.",
      ),
      copy(
        "Selecionar um horário e registrar o agendamento.",
        "Select a time slot and register the booking.",
      ),
      copy(
        "Acompanhar os compromissos pela visão do profissional.",
        "Follow appointments through the professional’s view.",
      ),
    ],
    decisions: [
      {
        title: copy(
          "Duas perspectivas para a mesma agenda",
          "Two perspectives on the same schedule",
        ),
        text: copy(
          "O cliente procura um horário; o profissional precisa organizar o dia. A interface considera essas duas necessidades, mantendo o agendamento como ponto de encontro entre elas. Isso ajuda a pensar o produto por jornadas, em vez de apenas por telas.",
          "The customer looks for a time slot; the professional needs to organize the day. The interface considers both needs, with the appointment connecting them. This encourages thinking about the product in journeys rather than only screens.",
        ),
      },
      {
        title: copy(
          "Interface, API e persistência",
          "Interface, API and persistence",
        ),
        text: copy(
          "React apresenta a experiência, Node.js atende às operações e MySQL mantém os dados. Essa arquitetura tornou explícito o caminho de uma ação: um clique vira uma requisição, passa pelas regras da aplicação e retorna como um estado que a tela precisa comunicar.",
          "React presents the experience, Node.js handles operations and MySQL stores the data. This architecture made the path of an action explicit: a click becomes a request, passes through application rules and returns as a state the screen needs to communicate.",
        ),
      },
      {
        title: copy(
          "Dados relacionados pedem estrutura",
          "Related data needs structure",
        ),
        text: copy(
          "Clientes, serviços, profissionais e horários fazem parte do mesmo domínio. Um banco relacional é uma escolha natural para representar essas associações e consultar compromissos. O modelo de dados passa a orientar a API e a experiência, não apenas a armazenar formulários.",
          "Customers, services, professionals and time slots belong to the same domain. A relational database is a natural choice for representing those associations and querying appointments. The data model guides the API and experience rather than merely storing forms.",
        ),
      },
    ],
    learning: copy(
      "O maior aprendizado foi acompanhar uma funcionalidade de ponta a ponta. Entender como a interface depende da API e como a API depende do modelo de dados mudou minha forma de construir os projetos seguintes.",
      "The greatest lesson was following a feature end to end. Understanding how the interface depends on the API and the API on the data model changed how I approached later projects.",
    ),
  },
};
