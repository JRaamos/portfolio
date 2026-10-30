import { useState } from "react";
import { Link } from "react-router-dom";
import { Arrow, Contact, Footer, Header } from "../components/Layout";
import { useLocale } from "../context/Locale";
import { usePageEffects } from "../hooks/usePageEffects";
import { projectsDetails, stack } from "../utils/projectsDetails";
export default function Home() {
  const { locale, t } = useLocale();
  const pt = locale === "pt";
  const [activeStack, setActiveStack] = useState(0);
  usePageEffects(
    pt
      ? "Jonathan Febraio — Software, produtos & histórias"
      : "Jonathan Febraio — Software, products & stories",
    pt
      ? "Desenvolvedor full stack. Conheça minha história e projetos em web, mobile, backend e inteligência artificial."
      : "Full-stack developer. Explore my story and projects across web, mobile, backend and artificial intelligence.",
  );
  return (
    <>
      <Header />
      <main id="main">
        <section className="hero">
          <div className="hero-photo">
            <img
              src="/images/jonathan.webp"
              alt="Jonathan Febraio"
              width="960"
              height="960"
              fetchPriority="high"
            />
          </div>
          <div className="hero-content">
            <p className="eyebrow hero-enter">
              <span className="status-dot" /> FULL STACK DEVELOPER ·{" "}
              {pt ? "BRASIL" : "BRAZIL"}
            </p>
            <h1 className="hero-enter">
              Jonathan
              <br />
              <span>
                Febraio<span className="accent">.</span>
              </span>
            </h1>
            <div className="hero-intro hero-enter">
              <p>
                {pt
                  ? "Transformo ideias em produtos."
                  : "I turn ideas into products."}
                <br />
                <span>
                  {pt
                    ? "E desafios em novos capítulos."
                    : "And challenges into new chapters."}
                </span>
              </p>
              <a href="#projects" className="button-primary">
                {pt ? "Explore meu trabalho" : "Explore my work"}
                <Arrow down />
              </a>
            </div>
          </div>
          <div className="hero-bottom">
            <span>WEB · MOBILE · BACKEND · {pt ? "IA" : "AI"}</span>
            <a href="#projects">
              {pt ? "ROLE PARA DESCOBRIR" : "SCROLL TO DISCOVER"}{" "}
              <span className="scroll-arrow">↓</span>
            </a>
            <span className="hero-coordinate">
              {pt ? "CÓDIGO + PROPÓSITO" : "CODE + PURPOSE"}
            </span>
          </div>
        </section>
        <section className="intro section-pad reveal">
          <span className="section-kicker">
            {pt ? "DA IDEIA AO MUNDO REAL" : "FROM AN IDEA TO THE REAL WORLD"}
          </span>
          <p>
            {pt ? "Mais do que escrever código," : "More than writing code,"}
            <br />
            <span>
              {pt
                ? "eu gosto de construir o que faz sentido."
                : "I like building things that matter."}
            </span>
          </p>
          <div className="intro-description">
            <span className="mini-symbol" aria-hidden="true">
              ✳
            </span>
            <p>
              {pt
                ? "Da primeira interface às regras que sustentam o negócio. Conecto design, desenvolvimento e infraestrutura para dar vida a produtos digitais."
                : "From the first interface to the rules behind the business. I connect design, development and infrastructure to bring digital products to life."}
            </p>
          </div>
        </section>
        <section id="projects" className="work section-pad">
          <div className="section-heading reveal">
            <div>
              <p className="section-kicker">
                01 / {pt ? "TRABALHOS SELECIONADOS" : "SELECTED WORK"}
              </p>
              <h2>
                {pt ? "Ideias que" : "Ideas that"}
                <br />
                <span>{pt ? "ganharam vida." : "came to life."}</span>
              </h2>
            </div>
            <p>
              {pt
                ? "Seis projetos. Diferentes desafios. A mesma vontade de construir algo que funcione para as pessoas."
                : "Six projects. Different challenges. The same drive to build something that works for people."}
            </p>
          </div>
          <div className="projects-grid">
            {projectsDetails.map((project) => (
              <article
                className={`project reveal project-${project.imageStyle}`}
                key={project.slug}
              >
                <Link
                  to={`/project/${project.slug}`}
                  className="project-image"
                  aria-label={`${pt ? "Conhecer" : "Explore"} ${project.title}`}
                >
                  <img
                    src={project.img}
                    alt={`${project.title} — ${t(project.summary)}`}
                    loading="lazy"
                    decoding="async"
                    width={project.imageStyle === "timer" ? 420 : 1280}
                    height={project.imageStyle === "timer" ? 900 : 800}
                  />
                  <span className="image-number">/{project.number}</span>
                  {["studio", "auzen"].includes(project.imageStyle) && (
                    <span className="image-brand">
                      {project.imageStyle === "auzen"
                        ? "auzen"
                        : "febraio tech"}
                      <small>
                        {project.imageStyle === "auzen"
                          ? "PET RESORT"
                          : "SOFTWARE COM ALMA HUMANA"}
                      </small>
                    </span>
                  )}
                  {project.imageStyle === "timer" && (
                    <span className="timer-note">
                      Time<span>Bubble</span>
                      <small>
                        {pt ? "O tempo acompanha você." : "Time follows you."}
                      </small>
                    </span>
                  )}
                  <span className="project-open">
                    <Arrow />
                  </span>
                </Link>
                <div className="project-info">
                  <span className="project-kind">{t(project.kind)}</span>
                  <Link to={`/project/${project.slug}`}>
                    <h3>
                      {project.title}
                      <Arrow />
                    </h3>
                  </Link>
                  <p>{t(project.description)}</p>
                  <div className="tech-line">
                    {project.techs.slice(0, 3).join(" / ")}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="about" className="about section-pad">
          <div className="about-title reveal">
            <p className="section-kicker">
              02 / {pt ? "MINHA HISTÓRIA" : "MY STORY"}
            </p>
            <h2>
              {pt ? "Mudei as ferramentas." : "Different tools."}
              <br />
              <span>
                {pt ? "Mantive a vontade" : "The same drive"}
                <br />
                {pt ? "de construir." : "to build."}
              </span>
            </h2>
            <p>
              {pt
                ? "Antes de construir software, eu trabalhei na construção civil. O cenário mudou, mas a curiosidade de entender como as coisas funcionam continuou comigo."
                : "Before building software, I worked in construction. The setting changed, but the curiosity to understand how things work stayed with me."}
            </p>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/jonathan-febraio-dev/"
              target="_blank"
              rel="noreferrer"
            >
              {pt ? "Minha trajetória no LinkedIn" : "My journey on LinkedIn"}{" "}
              <Arrow />
            </a>
          </div>
          <div className="story-timeline">
            <article className="reveal">
              <span>01</span>
              <div>
                <p className="section-kicker">
                  {pt ? "A VIRADA" : "THE TURNING POINT"}
                </p>
                <h3>
                  {pt ? "Uma nova forma de criar." : "A new way to create."}
                </h3>
                <p>
                  {pt
                    ? "Encontrei na programação um jeito de transformar problemas em soluções. Os estudos na Trybe e na FAM deram estrutura à mudança de carreira."
                    : "Programming gave me a way to turn problems into solutions. Studying at Trybe and FAM gave structure to that career change."}
                </p>
              </div>
            </article>
            <article className="reveal">
              <span>02</span>
              <div>
                <p className="section-kicker">
                  {pt ? "A PRÁTICA" : "THE PRACTICE"}
                </p>
                <h3>
                  {pt ? "O código encontrou pessoas." : "Code met people."}
                </h3>
                <p>
                  {pt
                    ? "Sistemas de agendamento, plataformas de conteúdo, comércio e aplicativos. Cada projeto trouxe uma nova perspectiva sobre o que significa entregar um produto."
                    : "Scheduling systems, content platforms, commerce and apps. Each project brought a new perspective on what delivering a product means."}
                </p>
              </div>
            </article>
            <article className="reveal">
              <span>03</span>
              <div>
                <p className="section-kicker">
                  {pt ? "O PRESENTE" : "THE PRESENT"}
                </p>
                <h3>
                  {pt ? "Conectar todas as partes." : "Connecting every part."}
                </h3>
                <p>
                  {pt
                    ? "Hoje, transito entre frontend, backend, mobile, cloud e IA. Gosto de acompanhar o produto por inteiro, entender as escolhas e cuidar da entrega."
                    : "Today, I work across frontend, backend, mobile, cloud and AI. I like following the whole product, understanding the decisions and taking care of delivery."}
                </p>
              </div>
            </article>
          </div>
        </section>
        <section id="stack" className="stack section-pad">
          <div className="section-heading reveal">
            <div>
              <p className="section-kicker">
                03 / {pt ? "CAIXA DE FERRAMENTAS" : "TOOLBOX"}
              </p>
              <h2>
                {pt ? "A tecnologia certa." : "The right technology."}
                <br />
                <span>{pt ? "Para cada desafio." : "For each challenge."}</span>
              </h2>
            </div>
            <p>
              {pt
                ? "Minha stack evolui com os produtos que construo. Estas são as ferramentas que fazem parte dessa jornada."
                : "My stack evolves with the products I build. These are the tools that are part of that journey."}
            </p>
          </div>
          <div className="stack-workspace reveal">
            <div
              className="stack-tabs"
              role="tablist"
              aria-label={pt ? "Áreas de tecnologia" : "Technology areas"}
              aria-orientation="vertical"
            >
              {stack.map((group, index) => (
                <button
                  role="tab"
                  key={group.number}
                  id={`stack-tab-${index}`}
                  aria-selected={activeStack === index}
                  aria-controls={`stack-panel-${index}`}
                  tabIndex={activeStack === index ? 0 : -1}
                  onClick={() => setActiveStack(index)}
                  onKeyDown={(event) => {
                    let next = index;
                    if (event.key === "ArrowDown")
                      next = (index + 1) % stack.length;
                    else if (event.key === "ArrowUp")
                      next = (index + stack.length - 1) % stack.length;
                    else if (event.key === "Home") next = 0;
                    else if (event.key === "End") next = stack.length - 1;
                    else return;
                    event.preventDefault();
                    setActiveStack(next);
                    document.getElementById(`stack-tab-${next}`)?.focus();
                  }}
                >
                  <span>{group.number}</span>
                  {t(group.title)}
                  <Arrow />
                </button>
              ))}
            </div>
            <div
              key={activeStack}
              id={`stack-panel-${activeStack}`}
              className="stack-panel"
              role="tabpanel"
              aria-labelledby={`stack-tab-${activeStack}`}
              tabIndex={0}
            >
              <div className="stack-panel-top">
                <span className="stack-symbol" aria-hidden="true">
                  {["</>", "{ }", "✳", "↗"][activeStack]}
                </span>
                <span className="section-kicker">
                  STACK / {stack[activeStack].number}
                </span>
              </div>
              <p>{t(stack[activeStack].description)}</p>
              <ul>
                {stack[activeStack].tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
