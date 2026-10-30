import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { render, projectsDetails } from "../.ssr/entry-server.js";
const origin = "https://jonathanfebraio.tech";
const template = await readFile("dist/index.html", "utf8");
const escape = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
const pages = [
  {
    path: "/",
    title: "Jonathan Febraio — Software, produtos & histórias",
    description:
      "Engenheiro de software. Conheça minha história e projetos em web, mobile, backend e inteligência artificial.",
    image: "/images/jonathan.webp",
  },
  ...projectsDetails.map((project) => ({
    path: `/project/${project.slug}`,
    title: `${project.title} — Jonathan Febraio`,
    description: project.description.pt,
    image: project.img,
  })),
];
for (const page of pages) {
  let html = template.replace(
    '<div id="root"></div>',
    () => `<div id="root">${render(page.path)}</div>`,
  );
  html = html
    .replace(/<title>.*?<\/title>/, `<title>${escape(page.title)}</title>`)
    .replace(
      /(<meta name="description" content=")[^"]*/,
      `$1${escape(page.description)}`,
    )
    .replace(
      /(<meta property="og:title" content=")[^"]*/,
      `$1${escape(page.title)}`,
    )
    .replace(
      /(<meta property="og:description" content=")[^"]*/,
      `$1${escape(page.description)}`,
    )
    .replace(
      /(<meta property="og:url" content=")[^"]*/,
      `$1${origin}${page.path}`,
    )
    .replace(
      /(<meta property="og:image" content=")[^"]*/,
      `$1${origin}${page.image}`,
    )
    .replace(
      /(<meta property="og:image:alt" content=")[^"]*/,
      `$1${escape(page.title)}`,
    )
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${origin}${page.path}`);
  const directory = page.path === "/" ? "dist" : `dist${page.path}`;
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}/index.html`, html);
}
await rm(".ssr", { recursive: true });
console.log(`Pre-rendered ${pages.length} pages with route-specific metadata.`);
