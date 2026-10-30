import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLocale } from "../context/Locale";
export function usePageEffects(
  title: string,
  description: string,
  path = "/",
  image = "/images/jonathan.webp",
) {
  const { pathname, hash } = useLocation();
  const { locale } = useLocale();
  useEffect(() => {
    document.title = title;
    for (const [selector, value] of [
      ['meta[name="description"]', description],
      ['meta[property="og:title"]', title],
      ['meta[property="og:description"]', description],
      ['meta[property="og:url"]', `https://jonathanfebraio.tech${path}`],
      ['meta[property="og:locale"]', locale === "pt" ? "pt_BR" : "en_US"],
      ['meta[property="og:image"]', `https://jonathanfebraio.tech${image}`],
      ['meta[property="og:image:alt"]', title],
    ])
      document.querySelector(selector)?.setAttribute("content", value);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", `https://jonathanfebraio.tech${path}`);
    document
      .querySelector('meta[name="robots"]')
      ?.setAttribute(
        "content",
        path === "/404" ? "noindex, follow" : "index, follow",
      );
  }, [title, description, path, locale, image]);
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    elements.forEach((element) => {
      element.classList.add("will-reveal");
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
      elements.forEach((element) => element.classList.remove("will-reveal"));
    };
  }, [pathname]);
}
