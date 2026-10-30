# Jonathan Febraio — Portfólio

Portfólio pessoal em português e inglês, com histórias de projetos, trajetória profissional, tecnologias por categoria e contato direto.

Domínio principal: https://jonathanfebraio.tech

## Desenvolvimento

Node.js 22.12 ou superior.

```sh
npm ci
npm run dev
```

## Validação

```sh
npm test
npm run build
npm audit
```

O build verifica os tipos antes de gerar `dist/`. Os testes cobrem as seis páginas de projeto, a rota legada do agendamento, rotas inválidas, troca de idioma, exibição das tecnologias, tema, formulário e fechamento do menu.

## Conteúdo e experiência

- Projetos e tecnologias: `src/utils/projectsDetails.ts`.
- Home e história: `src/pages/Home.tsx`.
- Cases: `src/pages/ProjectDetails.tsx`.
- Layout e contato: `src/components/Layout.tsx`.
- Identidade e responsividade: `src/index.css`.
- Fontes locais e imagens: `public/`.
- Fontes Manrope e IBM Plex Mono distribuídas sob SIL Open Font License; licenças em `public/fonts/`.

As animações respeitam `prefers-reduced-motion`. O formulário mantém o serviço EmailJS usado na versão original, com validação nativa e estados de envio, sucesso e erro. Os testes de envio usam mocks e não enviam mensagens reais. E-mail direto e WhatsApp continuam disponíveis como alternativas. Preferências de idioma e tema são opcionais e persistidas no navegador.

## Publicação

O repositório `JRaamos/portfolio` usa o projeto `portfolio` da Vercel. A produção acompanha a branch `main`, com Node.js 22. O domínio raiz é o endereço canônico; `www` redireciona para ele. DNS é administrado na Hostinger.

`/project/0` redireciona para o case de agendamentos. Os cases antigos de Portfólio e Receitas da Hora foram retirados. URLs de projeto inválidas exibem uma página 404 com `noindex`.

A aplicação é estática. `vercel.json` mantém o acesso direto às rotas. As páginas principais e de cases têm HTML inicial pré-renderizado, metadados próprios, sitemap e canonical.
