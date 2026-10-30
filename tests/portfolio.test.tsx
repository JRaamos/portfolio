import { describe, expect, it, vi, beforeEach } from "vitest";
import emailjs from "@emailjs/browser";
vi.mock("@emailjs/browser", () => ({ default: { send: vi.fn() } }));
beforeEach(() => {
  vi.clearAllMocks();
});
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { existsSync } from "node:fs";
import App from "../src/App";
import { projectsDetails } from "../src/utils/projectsDetails";
const visit = (route = "/") =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  );
describe("Portfolio visitor journeys", () => {
  it("shows exactly the six selected projects and their local images exist", () => {
    visit();
    expect(
      screen
        .getAllByRole("heading", { level: 3 })
        .slice(0, 6)
        .map((el) => el.textContent),
    ).toEqual([
      "Febraio Tech",
      "Auzen Pet Resort",
      "TimeBubble",
      "FebraioTech Shop",
      "Manual dos Achados",
      "Sistema de Agendamentos",
    ]);
    for (const project of projectsDetails)
      expect(existsSync(`public${project.img}`)).toBe(true);
    expect(screen.queryByText("Receitas da Hora")).toBeNull();
  });
  it.each(projectsDetails)(
    "opens the $title case on a direct URL",
    (project) => {
      visit(`/project/${project.slug}`);
      expect(screen.getByRole("heading", { level: 1 }).textContent).toContain(
        project.title,
      );
      expect(
        screen
          .getByRole("link", {
            name:
              project.slug === "timebubble" ? "Google Play" : "Visitar projeto",
          })
          .getAttribute("href"),
      ).toBe(project.linkSite);
      expect(screen.getByText(project.solution.pt)).toBeTruthy();
    },
  );
  it("keeps the original scheduling URL and does not reassign retired URLs", () => {
    const view = visit("/project/0");
    expect(screen.getByRole("heading", { level: 1 }).textContent).toContain(
      "Sistema de Agendamentos",
    );
    view.unmount();
    visit("/project/1");
    expect(screen.getByText("404 / ROTA NÃO ENCONTRADA")).toBeTruthy();
  });
  it("handles invalid case URLs without crashing", () => {
    visit("/project/not-a-project");
    expect(screen.getByRole("link", { name: /Voltar ao início/ })).toBeTruthy();
  });
  it("changes language, document language and persisted preference", async () => {
    visit();
    await userEvent.click(
      screen.getByRole("button", { name: "Switch to English" }),
    );
    expect(screen.getByText("Hello, I’m")).toBeTruthy();
    expect(document.documentElement.lang).toBe("en");
    expect(localStorage.getItem("jf-locale-v1")).toBe("en");
    await userEvent.click(
      screen.getByRole("button", { name: "Mudar para português" }),
    );
    expect(screen.getByText("Olá, eu sou o")).toBeTruthy();
  });
  it("makes all technology groups available without hidden tabs", () => {
    visit();
    expect(screen.queryByRole("tab")).toBeNull();
    for (const technology of [
      "PostgreSQL",
      "AWS",
      "React Native",
      "Qdrant",
      "Fine-tuning",
      "Machine learning",
    ])
      expect(screen.getByText(technology)).toBeTruthy();
  });
  it("defaults to the light theme and persists an explicit dark choice", async () => {
    visit();
    expect(document.documentElement.dataset.theme).toBe("light");
    await userEvent.click(
      screen.getByRole("button", { name: "Ativar tema escuro" }),
    );
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(localStorage.getItem("jf-theme-v1")).toBe("dark");
    await userEvent.click(
      screen.getByRole("button", { name: "Ativar tema claro" }),
    );
    expect(document.documentElement.dataset.theme).toBe("light");
  });
  it("reports a rejected contact request and preserves the visitor's message", async () => {
    vi.mocked(emailjs.send).mockRejectedValueOnce(
      new Error("Service unavailable"),
    );
    visit();
    await userEvent.type(screen.getByLabelText("Nome"), "Teste local");
    await userEvent.type(screen.getByLabelText("E-mail"), "test@example.com");
    await userEvent.type(
      screen.getByLabelText("Mensagem"),
      "Mensagem de teste local.",
    );
    await userEvent.click(
      screen.getByRole("button", { name: /Enviar mensagem/ }),
    );
    expect((await screen.findByRole("status")).textContent).toContain(
      "Não foi possível enviar",
    );
    expect(
      (screen.getByLabelText("Mensagem") as HTMLTextAreaElement).value,
    ).toBe("Mensagem de teste local.");
    expect(
      screen
        .getByRole("button", { name: /Enviar mensagem/ })
        .hasAttribute("disabled"),
    ).toBe(false);
  });
  it("only shows contact success after the service accepts the request", async () => {
    vi.mocked(emailjs.send).mockResolvedValueOnce({ status: 200, text: "OK" });
    visit();
    await userEvent.type(screen.getByLabelText("Nome"), "Teste local");
    await userEvent.type(screen.getByLabelText("E-mail"), "test@example.com");
    await userEvent.type(
      screen.getByLabelText("Mensagem"),
      "Mensagem de teste local.",
    );
    await userEvent.click(
      screen.getByRole("button", { name: /Enviar mensagem/ }),
    );
    expect((await screen.findByRole("status")).textContent).toContain(
      "Mensagem enviada",
    );
    expect(
      (screen.getByLabelText("Mensagem") as HTMLTextAreaElement).value,
    ).toBe("");
  });
  it("closes the mobile menu with Escape and returns focus", async () => {
    visit();
    const button = screen.getByRole("button", { name: "Abrir menu" });
    await userEvent.click(button);
    expect(button.getAttribute("aria-expanded")).toBe("true");
    await userEvent.keyboard("{Escape}");
    expect(button.getAttribute("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(button);
  });
});
