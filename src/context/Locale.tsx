import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Locale, Text } from "../utils/projectsDetails";
const LocaleContext = createContext<{
  locale: Locale;
  toggle: () => void;
  t: (value: Text) => string;
}>({ locale: "pt", toggle: () => {}, t: (v) => v.pt });
export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    try {
      return localStorage.getItem("jf-locale-v1") === "en" ? "en" : "pt";
    } catch {
      return "pt";
    }
  });
  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
    try {
      localStorage.setItem("jf-locale-v1", locale);
    } catch {
      /* Storage is optional. */
    }
  }, [locale]);
  return (
    <LocaleContext.Provider
      value={{
        locale,
        toggle: () => setLocale((current) => (current === "pt" ? "en" : "pt")),
        t: (value) => value[locale],
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}
export const useLocale = () => useContext(LocaleContext);
