import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
afterEach(() => {
  cleanup();
  localStorage.clear();
});
Object.defineProperty(window, "scrollTo", { value: vi.fn(), writable: true });
Object.defineProperty(window, "matchMedia", {
  value: vi.fn(() => ({
    matches: true,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })),
  writable: true,
});
HTMLElement.prototype.scrollIntoView = vi.fn();
