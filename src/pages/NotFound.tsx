import { Link } from "react-router-dom";
import { Footer, Header } from "../components/Layout";
import { useLocale } from "../context/Locale";
import { usePageEffects } from "../hooks/usePageEffects";
export default function NotFound() {
  const { locale } = useLocale();
  const pt = locale === "pt";
  usePageEffects(
    "404 — Jonathan Febraio",
    pt ? "Página não encontrada." : "Page not found.",
    "/404",
  );
  return (
    <>
      <Header />
      <main id="main" className="not-found section-pad">
        <span className="section-kicker">
          404 / {pt ? "ROTA NÃO ENCONTRADA" : "PAGE NOT FOUND"}
        </span>
        <h1>
          {pt ? "Este capítulo" : "This chapter"}
          <br />
          <span>{pt ? "ainda não existe." : "does not exist yet."}</span>
        </h1>
        <Link to="/" className="button-primary">
          {pt ? "Voltar ao início" : "Back to home"}
        </Link>
      </main>
      <Footer />
    </>
  );
}
