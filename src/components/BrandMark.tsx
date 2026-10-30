import { useId } from "react";
const monogram =
  "M15 18h27v31c0 12-7 19-18 19-6 0-11-2-15-6l8-9c2 2 4 3 7 3 4 0 6-3 6-7V30H15z M48 18h30v12H61v10h14v12H61v16H48z";
export default function BrandMark() {
  const id = useId().replace(/:/g, "");
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 96 96" focusable="false">
        <defs>
          <linearGradient id={`${id}-face`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#838bff" />
            <stop offset=".48" stopColor="#6261ef" />
            <stop offset="1" stopColor="#973fe8" />
          </linearGradient>
          <linearGradient id={`${id}-depth`} x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#4034a1" />
            <stop offset="1" stopColor="#281e69" />
          </linearGradient>
        </defs>
        <g fill={`url(#${id}-depth)`}>
          {[9, 7, 5, 3].map((offset) => (
            <path
              key={offset}
              d={monogram}
              transform={`translate(${offset} ${offset})`}
            />
          ))}
        </g>
        <path
          d={monogram}
          fill={`url(#${id}-face)`}
          stroke="#aaa7ff"
          strokeWidth=".7"
        />
      </svg>
    </span>
  );
}
