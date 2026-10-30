import {
  faGithub,
  faLinkedinIn,
  faWhatsapp,
  faGooglePlay,
  faReact,
  faPython,
  faDocker,
  faAws,
  faNodeJs,
  faJs,
  faGitlab,
  faAndroid,
  faSalesforce,
  faOpenai,
  faTypescript,
  faPostgresql,
} from "@fortawesome/free-brands-svg-icons";
const brands = {
  github: faGithub,
  GitHub: faGithub,
  "OpenAI API": faOpenai,
  TypeScript: faTypescript,
  PostgreSQL: faPostgresql,
  linkedin: faLinkedinIn,
  whatsapp: faWhatsapp,
  play: faGooglePlay,
  React: faReact,
  "React Native": faReact,
  Python: faPython,
  Docker: faDocker,
  AWS: faAws,
  "Node.js": faNodeJs,
  JavaScript: faJs,
  "GitLab CI/CD": faGitlab,
  Android: faAndroid,
  Salesforce: faSalesforce,
};
const paths: Record<string, string> = {
  mail: "M3 5h18v14H3z M3 5l9 8 9-8",
  document: "M6 3h8l4 4v14H6z M14 3v5h4 M9 12h6 M9 16h6",
  grid: "M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z",
  globe:
    "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0 M3 12h18 M12 3c5 5 5 13 0 18-5-5-5-13 0-18",
};
export function Icon({ name }: { name: string }) {
  const brand = brands[name as keyof typeof brands];
  if (brand) {
    const [width, height, , , path] = brand.icon;
    return (
      <svg
        className="platform-icon"
        viewBox={`0 0 ${width} ${height}`}
        aria-hidden="true"
        focusable="false"
        fill="currentColor"
      >
        {(Array.isArray(path) ? path : [path]).map((d, i) => (
          <path key={i} d={d} />
        ))}
      </svg>
    );
  }
  if (!paths[name]) return null;
  return (
    <svg
      className="platform-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[name]} />
    </svg>
  );
}
