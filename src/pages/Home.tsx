import { Link } from "react-router-dom";
import { Arrow, Contact, Footer, Header } from "../components/Layout";
import { useLocale } from "../context/Locale";
import { usePageEffects } from "../hooks/usePageEffects";
import { projectsDetails, stack } from "../utils/projectsDetails";
import cvPt from "../utils/curriculo_jonathan.pdf";
import cvEn from "../utils/curriculo_jonathan_en.pdf";
export default function Home() {
  const { locale, t } = useLocale();
  const pt = locale === "pt";
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
          <div className="hero-portrait hero-enter">
            <div className="portrait-circle">
              <img
                src="/images/jonathan-original.png"
                alt="Jonathan Febraio"
                width="2160"
                height="2160"
                fetchPriority="high"
              />
            </div>
            <span className="portrait-caption">
              <span className="status-dot" />{" "}
              {pt ? "Desenvolvedor Full Stack" : "Full-stack developer"}
            </span>
          </div>
          <div className="hero-content hero-enter">
            <p className="hero-greeting">
              {pt ? "Olá, eu sou o" : "Hello, I’m"}
            </p>
            <h1>
              Jonathan <span>Febraio.</span>
            </h1>
            <p className="hero-role">
              Full Stack Developer <span>·</span> Web & Mobile
            </p>
            <p className="hero-description">
              {pt
                ? "Gosto de transformar ideias em produtos digitais. Trabalho com interfaces, backend, aplicativos e IA, conectando tecnologia a problemas reais."
                : "I enjoy turning ideas into digital products. I work with interfaces, backend, apps and AI, connecting technology to real problems."}
            </p>
            <div className="hero-actions">
              <a href="#projects" className="button-primary">
                {pt ? "Conheça meus projetos" : "Explore my projects"}
                <Arrow down />
              </a>
              <a href="#contact" className="button-secondary">
                {pt ? "Vamos conversar" : "Let’s talk"}
                <Arrow />
              </a>
            </div>
            <div className="hero-social">
              <a
                href="https://github.com/JRaamos"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/jonathan-febraio-dev/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                href={pt ? cvPt : cvEn}
                download={
                  pt ? "Jonathan-Febraio.pdf" : "Jonathan-Febraio-EN.pdf"
                }
              >
                {pt ? "Baixar CV ↓" : "Download CV ↓"}
              </a>
            </div>
          </div>
          <a
            className="hero-scroll"
            href="#projects"
            aria-label={pt ? "Rolar até os projetos" : "Scroll to projects"}
          >
            <span />
            <small>{pt ? "Conheça meu trabalho" : "Discover my work"}</small>
          </a>
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
          <div className="center-heading reveal">
            <p className="section-kicker">
              03 / {pt ? "HABILIDADES" : "SKILLS"}
            </p>
            <h2>{pt ? "Tecnologias que uso" : "Technologies I work with"}</h2>
            <span className="heading-line" />
            <p>
              {pt
                ? "As ferramentas que fazem parte dos meus projetos, do primeiro componente à publicação."
                : "The tools behind my projects, from the first component to deployment."}
            </p>
          </div>
          <div className="skills-grid">
            {stack.map((group) => (
              <div className="skill-group reveal" key={group.number}>
                <h3>{t(group.title)}</h3>
                <ul>
                  {group.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
