import React from 'react';

function Skills() {
  const skils = [
    'Java',
    'JavaScript',
    'React',
    'TypeScript',
    'Node',
    'Docker',
    'Git',
    'GitHub',
    'HTML',
    'CSS',
    'SQL',
    'Mocha',
    'MySQL',
    'Jest',
    'PostgreSQL',
    'Tailwind',
    'React Testing Library',
  ];
  return (
    <section
      className="w-[60vh] flex flex-wrap items-center"
    >
      {skils.map((skill) => (
        <div
          key={ skill }
          className="flex flex-col items-center justify-center
        m-4"
        >
          <p className="font-mono text-lg text-slate-700">{skill}</p>
        </div>
      ))}

    </section>
  );
}
export default Skills;
