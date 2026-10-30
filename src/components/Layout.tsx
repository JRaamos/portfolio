import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLocale } from "../context/Locale";
export function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg
      className={down ? "arrow arrow-down" : "arrow"}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
export function Header() {
  const { locale, toggle } = useLocale();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
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
      <Link className="brand" to="/" aria-label="Jonathan Febraio — início">
        <span className="brand-mark">
          jf<span>_</span>
        </span>
        <span className="brand-name">
          Jonathan
          <br />
          Febraio<span className="accent">.</span>
        </span>
      </Link>
      <nav
        id="navigation"
        className={open ? "navigation is-open" : "navigation"}
        aria-label={pt ? "Navegação principal" : "Main navigation"}
      >
        <a href="/#projects" onClick={() => setOpen(false)}>
          {pt ? "Projetos" : "Work"}
          <span>01</span>
        </a>
        <a href="/#about" onClick={() => setOpen(false)}>
          {pt ? "Minha história" : "My story"}
          <span>02</span>
        </a>
        <a href="/#stack" onClick={() => setOpen(false)}>
          Stack<span>03</span>
        </a>
        <a
          className="nav-contact"
          href="/#contact"
          onClick={() => setOpen(false)}
        >
          {pt ? "Vamos conversar" : "Let’s talk"} <Arrow />
        </a>
      </nav>
      <div className="header-actions">
        <button
          className="language"
          onClick={toggle}
          aria-label={pt ? "Switch to English" : "Mudar para português"}
        >
          <span className={pt ? "selected" : ""}>PT</span>
          <span className="language-divider">/</span>
          <span className={!pt ? "selected" : ""}>EN</span>
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
          <span>{open ? "−" : "+"}</span>
        </button>
      </div>
    </header>
  );
}
export function Footer() {
  const { locale } = useLocale();
  return (
    <footer className="site-footer">
      <Link to="/" className="footer-wordmark">
        febraio<span>_</span>
      </Link>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Jonathan Febraio</span>
        <span>
          {locale === "pt"
            ? "Feito com intenção. E código."
            : "Made with intention. And code."}
        </span>
        <a href="#main">
          {locale === "pt" ? "Voltar ao topo" : "Back to top"} ↑
        </a>
      </div>
    </footer>
  );
}
export function Contact() {
  const { locale } = useLocale();
  const pt = locale === "pt";
  return (
    <section id="contact" className="contact section-pad reveal">
      <div className="section-kicker">
        <span>04 / {pt ? "PRÓXIMO CAPÍTULO" : "NEXT CHAPTER"}</span>
        <span className="status-dot" />
        {pt ? "ABERTO A CONVERSAS" : "OPEN TO CONVERSATIONS"}
      </div>
      <h2>
        {pt ? "Sua ideia merece" : "Your idea deserves"}
        <br />
        <span>{pt ? "sair do papel." : "to become real."}</span>
      </h2>
      <div className="contact-bottom">
        <p>
          {pt
            ? "Um produto, um desafio ou uma boa conversa sobre tecnologia. Vamos construir o próximo capítulo."
            : "A product, a challenge or a good conversation about technology. Let’s build the next chapter."}
        </p>
        <a className="contact-cta" href="mailto:jhonyramos46@gmail.com">
          {pt ? "Vamos conversar" : "Let’s talk"}
          <Arrow />
        </a>
      </div>
      <div className="social-links">
        <a href="https://github.com/JRaamos" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a
          href="https://www.linkedin.com/in/jonathan-febraio-dev/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
        <a href="https://wa.me/5511921404143" target="_blank" rel="noreferrer">
          WhatsApp ↗
        </a>
        <a href="mailto:jhonyramos46@gmail.com">E-mail ↗</a>
      </div>
    </section>
  );
}
