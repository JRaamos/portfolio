import React from 'react';
import javascript from '../images/javascript.svg';
import typescript from '../images/typescript.svg';
import java from '../images/java.png';
import node from '../images/node-js.jpg';
import docker from '../images/docker-icon.svg';
import redux from '../images/redux.png';

function Skills() {
  return (
    <section
      className=" shadow-lg mt-6 rounded-md flex
    justify-around mx-1 flex-wrap w-[calc(80%)]"
    >
      <section>
        <img src={ javascript } alt="javascript" className="w-20 rounded-lg" />
        <p>JavaScript</p>
      </section>
      <section>
        <img src={ typescript } alt="typescript" className="w-20 rounded-lg" />
        <p>TypeScript</p>
      </section>
      <section className="w-20">
        <img
          src={ java }
          alt="java"
          className="dark:bg-slate-200 border border-gray-900
            w-20 h-20  rounded-lg"
        />
        <p className="text-center">Java</p>
      </section>
      <section className="w-20">
        <img
          src={ node }
          alt="node"
          className="w-20 h-20 rounded-lg"
        />
        <p className="text-center">Node</p>
      </section>
      <section className="w-20">
        <img
          src={ docker }
          alt="docker"
          className="w-20 h-20 rounded-lg"
        />
        <p className="mx-2">Docker</p>
      </section>
      <section className="w-20">
        <img
          src={ redux }
          alt="redux"
          className="w-20 h-20 rounded-lg"
        />
        <p className="mx-2">Redux</p>
      </section>
    </section>
  );
}
export default Skills;
