import { describe, expect, it } from "vitest";
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
      "FebraioTech Shop",
      "Auzen Pet Resort",
      "Manual dos Achados",
      "TimeBubble",
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
    expect(screen.getByText("I turn ideas into products.")).toBeTruthy();
    expect(document.documentElement.lang).toBe("en");
    expect(localStorage.getItem("jf-locale-v1")).toBe("en");
    await userEvent.click(
      screen.getByRole("button", { name: "Mudar para português" }),
    );
    expect(screen.getByText("Transformo ideias em produtos.")).toBeTruthy();
  });
  it("supports keyboard selection of technology areas", async () => {
    visit();
    screen.getByRole("tab", { name: /Interfaces/ }).focus();
    await userEvent.keyboard("{ArrowDown}");
    expect(
      screen
        .getByRole("tab", { name: /Backend/ })
        .getAttribute("aria-selected"),
    ).toBe("true");
    expect(screen.getByRole("tabpanel").textContent).toContain("PostgreSQL");
    await userEvent.keyboard("{End}");
    expect(screen.getByRole("tabpanel").textContent).toContain("AWS");
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
