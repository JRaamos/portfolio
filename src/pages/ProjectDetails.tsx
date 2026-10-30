import { Link, useParams } from "react-router-dom";
import { Arrow, Contact, Footer, Header } from "../components/Layout";
import { useLocale } from "../context/Locale";
import { usePageEffects } from "../hooks/usePageEffects";
import {
  findProject,
  projectsDetails,
  type Project,
} from "../utils/projectsDetails";
import NotFound from "./NotFound";
function CaseContent({ project }: { project: Project }) {
  const { locale, t } = useLocale();
  const pt = locale === "pt";
  const next =
    projectsDetails[
      (projectsDetails.indexOf(project) + 1) % projectsDetails.length
    ];
  usePageEffects(
    `${project.title} — Jonathan Febraio`,
    t(project.description),
    `/project/${project.slug}`,
    project.img,
  );
  return (
    <>
      <Header />
      <main id="main">
        <section className="case-heading section-pad">
          <Link className="text-link" to="/#projects">
            ← {pt ? "Todos os projetos" : "All projects"}
          </Link>
          <div className="case-meta section-kicker">
            <span>CASE / {project.number}</span>
            <span>{t(project.kind)}</span>
          </div>
          <h1>
            {project.title}
            <span className="accent">.</span>
          </h1>
          <p className="case-summary">{t(project.summary)}</p>
          <div className="case-links">
            <a
              className="button-primary"
              href={project.linkSite}
              target="_blank"
              rel="noreferrer"
            >
              {project.slug === "timebubble"
                ? "Google Play"
                : pt
                  ? "Visitar projeto"
                  : "Visit project"}
              <Arrow />
            </a>
            {project.github && (
              <a
                className="text-link"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                {pt ? "Ver código" : "View code"}
                <Arrow />
              </a>
            )}
          </div>
        </section>
        <div className={`case-image project-${project.imageStyle}`}>
          <img
            src={project.img}
            alt={`${project.title} — ${t(project.summary)}`}
            width="1280"
            height="800"
            fetchPriority="high"
          />
        </div>
        <section className="case-story section-pad">
          <aside>
            <p className="section-kicker">
              {pt ? "TECNOLOGIAS" : "TECHNOLOGIES"}
            </p>
            <ul>
              {project.techs.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </aside>
          <div>
            <article className="reveal">
              <p className="section-kicker">
                01 / {pt ? "O DESAFIO" : "THE CHALLENGE"}
              </p>
              <h2>{t(project.summary)}</h2>
              <p>{t(project.challenge)}</p>
            </article>
            <article className="reveal">
              <p className="section-kicker">
                02 / {pt ? "A CONSTRUÇÃO" : "THE BUILD"}
              </p>
              <h2>
                {pt
                  ? "Da intenção à experiência."
                  : "From intention to experience."}
              </h2>
              <p>{t(project.solution)}</p>
            </article>
          </div>
        </section>
        <section className="next-project section-pad reveal">
          <span className="section-kicker">
            {pt ? "PRÓXIMO PROJETO" : "NEXT PROJECT"}
          </span>
          <Link to={`/project/${next.slug}`}>
            {next.title}
            <Arrow />
          </Link>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
export default function ProjectDetails() {
  const { id } = useParams();
  const project = findProject(id);
  return project ? <CaseContent project={project} /> : <NotFound />;
}
