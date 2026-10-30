import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLocale } from "../context/Locale";
import BrandMark from "./BrandMark";
import { Icon } from "./Icon";
import ContactForm from "./ContactForm";
export function Header() {
  const { locale, toggle } = useLocale();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("jf-theme-v1") === "dark";
    } catch {
      return false;
    }
  });
  const menuButton = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    try {
      localStorage.setItem("jf-theme-v1", dark ? "dark" : "light");
    } catch {
      /* Optional preference. */
    }
  }, [dark]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  const pt = locale === "pt";
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        {pt ? "Pular para o conteúdo" : "Skip to content"}
      </a>
      <Link className="brand" to="/">
        <BrandMark />
        <span className="brand-wordmark">
          Jonathan Febraio<span>.</span>
        </span>
      </Link>
      <nav
        id="navigation"
        className={open ? "navigation is-open" : "navigation"}
        aria-label={pt ? "Navegação principal" : "Main navigation"}
      >
        <a href="/#main" onClick={() => setOpen(false)}>
          {pt ? "Início" : "Home"}
        </a>
        <a href="/#projects" onClick={() => setOpen(false)}>
          {pt ? "Projetos" : "Projects"}
        </a>
        <a href="/#about" onClick={() => setOpen(false)}>
          {pt ? "Sobre mim" : "About me"}
        </a>
        <a href="/#stack" onClick={() => setOpen(false)}>
          {pt ? "Tecnologias" : "Technologies"}
        </a>
        <a href="/#contact" onClick={() => setOpen(false)}>
          {pt ? "Contato" : "Contact"}
        </a>
      </nav>
      <div className="header-actions">
        <button
          className="language"
          onClick={toggle}
          aria-label={pt ? "Switch to English" : "Mudar para português"}
        >
          <span className={pt ? "selected" : ""}>PT</span>
          <span>/</span>
          <span className={!pt ? "selected" : ""}>EN</span>
        </button>
        <button
          className="theme-button"
          onClick={() => setDark(!dark)}
          aria-label={
            dark
              ? pt
                ? "Ativar tema claro"
                : "Use light theme"
              : pt
                ? "Ativar tema escuro"
                : "Use dark theme"
          }
          aria-pressed={dark}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            {dark ? (
              <>
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5" />
              </>
            ) : (
              <path d="M20.8 13.2A9 9 0 0 1 10.8 3.1 9 9 0 1 0 20.8 13.2Z" />
            )}
          </svg>
        </button>
        <button
          ref={menuButton}
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="navigation"
          aria-label={
            open
              ? pt
                ? "Fechar menu"
                : "Close menu"
              : pt
                ? "Abrir menu"
                : "Open menu"
          }
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            aria-hidden="true"
          >
            <path
              d={open ? "m5 5 14 14M5 19 19 5" : "M3 6h18M3 12h18M3 18h18"}
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
export function Footer() {
  const { locale } = useLocale();
  const pt = locale === "pt";
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link to="/" className="footer-name">
            Jonathan Febraio<span>.</span>
          </Link>
          <p>
            {pt
              ? "Engenheiro de Software. Sempre aprendendo, criando e transformando ideias em soluções."
              : "Software engineer. Always learning, creating and turning ideas into solutions."}
          </p>
        </div>
        <div className="footer-social">
          <span>{pt ? "Vamos nos conectar" : "Let’s connect"}</span>
          <div>
            <a
              href="https://github.com/JRaamos"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="github" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-febraio-dev/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="linkedin" /> LinkedIn
            </a>
            <a
              href="https://wa.me/5511921404143"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="whatsapp" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Jonathan Febraio</span>
        <span>
          {pt ? "Feito com dedicação e código." : "Made with care and code."}
        </span>
        <a href="#main">{pt ? "Voltar ao topo" : "Back to top"}</a>
      </div>
    </footer>
  );
}
export function Contact() {
  const { locale } = useLocale();
  const pt = locale === "pt";
  return (
    <section id="contact" className="contact section-pad">
      <div className="center-heading reveal">
        <p className="section-kicker">
          04 / {pt ? "VAMOS CONVERSAR" : "LET’S TALK"}
        </p>
        <h2>{pt ? "Entre em contato" : "Get in touch"}</h2>
        <span className="heading-line" />
        <p>
          {pt
            ? "Tem uma ideia, um projeto ou uma oportunidade? Vai ser um prazer conversar com você."
            : "Have an idea, a project or an opportunity? I’d be happy to talk with you."}
        </p>
      </div>
      <div className="contact-layout">
        <div className="contact-copy reveal">
          <h3>
            {pt
              ? "O próximo projeto pode começar com uma conversa."
              : "The next project could start with a conversation."}
          </h3>
          <p>
            {pt
              ? "Me conte o que você está construindo. Você pode usar o formulário ou falar diretamente comigo."
              : "Tell me what you’re building. Use the form or reach out to me directly."}
          </p>
          <a className="contact-email" href="mailto:jhonyramos46@gmail.com">
            <span>
              <Icon name="mail" /> E-mail
            </span>
            jhonyramos46@gmail.com
          </a>
          <a
            className="contact-whatsapp"
            href="https://wa.me/5511921404143"
            target="_blank"
            rel="noreferrer"
          >
            {pt ? "Conversar pelo WhatsApp" : "Chat on WhatsApp"}
            <Icon name="whatsapp" />
          </a>
        </div>
        <div className="reveal">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
