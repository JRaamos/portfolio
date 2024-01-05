import sitemaDeAgendamentos from '../images/sitema-de-agendamentos.png';
import portifolio from '../images/portifolio.png';
import node from '../images/node-js.webp';
import react from '../images/react.svg';
import typeScript from '../images/typescript.svg';
import rtl from '../images/RTL.png';
import redux from '../images/redux.png';
import css from '../images/css.svg';
import mysql from '../images/mysql.png';

export const projectsDetails = [
  {
    title: ' Sistema de agendamentos',
    img: sitemaDeAgendamentos,
    linkSite: 'https://sistema-de-agendamento-developer.vercel.app/',
    github: 'https://github.com/JRaamos/Sistema-de-Agendamento',
    techs: [{
      name: 'CSS',
      image: css,
    }, {
      name: 'Node',
      image: node,
    }, {
      name: 'TypeScript',
      image: typeScript,
    }, {
      name: 'React',
      image: react,
    },
    {
      name: 'RTL',
      image: rtl,
    }, {
      name: 'Redux',
      image: redux,
    }, {
      name: 'MySQL',
      image: mysql,
    }],
  },
  {
    title: 'Portifolio',
    img: portifolio,
    linkSite: 'https://jonathan-febrail-dev.vercel.app/',
    github: 'https://github.com/JRaamos/portfolio',
    techs: [{
      name: 'React',
      image: react,
    }, {
      name: 'TypeScript',
      image: typeScript,
    }],
  },
];
