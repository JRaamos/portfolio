import sitemaDeAgendamentos from '../images/sitema-de-agendamentos.png';
import sistemaDeAgemdamentos2 from '../images/sistema-agendamento-2.png';
import sistemaDeAgemdamentos3 from '../images/sistema-agendamento-3.png';
import sistemaDeAgemdamentos4 from '../images/sistema-agendamento-4.png';
import portifolio from '../images/portifolio.png';
import portifolio2 from '../images/portifolio-2.png';
import portifolio3 from '../images/portifolio-3.png';
import portifolio4 from '../images/portifolio-4.png';
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
    img2: sistemaDeAgemdamentos2,
    img3: sistemaDeAgemdamentos3,
    img4: sistemaDeAgemdamentos4,
    linkSite: 'https://sistema-de-agendamento-developer.vercel.app/',
    github: 'https://github.com/JRaamos/Sistema-de-Agendamento',
    techs: [
      {
        name: 'CSS',
        image: css,
      },
      {
        name: 'Node',
        image: node,
      },
      {
        name: 'TypeScript',
        image: typeScript,
      },
      {
        name: 'React',
        image: react,
      },
      {
        name: 'RTL',
        image: rtl,
      },
      {
        name: 'Redux',
        image: redux,
      },
      {
        name: 'MySQL',
        image: mysql,
      },
    ],
  },
  {
    title: ' Portifolio',
    img: portifolio,
    img2: portifolio2,
    img3: portifolio3,
    img4: portifolio4,
    linkSite: 'https://jonathan-febrail-dev.vercel.app/',
    github: 'https://github.com/JRaamos/portfolio',
    techs: [
      {
        name: 'React',
        image: react,
      },
      {
        name: 'TypeScript',
        image: typeScript,
      },
    ],
  },
];
