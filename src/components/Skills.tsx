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
    'Express',
  ];
  return (
    <section
      className="w-full max-lg:w-[90%] flex flex-wrap items-center justify-center
    max-[450px]:items-center max-[450px]:w-full"
    >
      {skils.map((skill) => (
        <div
          key={ skill }
          className="flex flex-col items-center justify-center
           max-[415px]:m-2
        m-4"
        >
          <p
            className="font-mono text-lg text-slate-700 dark:text-slate-400
          border rounded-xl p-2 bg-slate-300 dark:bg-slate-900 shadow-lg
          dark:border-black hover:scale-125 hover:cursor-pointer
          transition-all hover:dark:bg-slate-800 hover:bg-[#fafafa]"
          >
            {skill}
          </p>
        </div>
      ))}
    </section>
  );
}
export default Skills;
