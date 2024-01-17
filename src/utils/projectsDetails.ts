import sitemaDeAgendamentos from '../images/sitema-de-agendamentos.png';
import sistemaDeAgemdamentos1 from '../images/sistema-agendamento-1.png';
import sistemaDeAgemdamentos2 from '../images/sistema-agendamento-2.png';
import sistemaDeAgemdamentos3 from '../images/sistema-agendamento-3.png';
import sistemaDeAgemdamentos4 from '../images/sistema-agendamento-4.png';
import portifolio from '../images/portifolio.png';
import portifolio1 from '../images/portifolio-1.png';
import portifolio2 from '../images/portifolio-2.png';
import portifolio3 from '../images/portifolio-3.png';
import portifolio4 from '../images/portifolio-4.png';
import receitasDaHora from '../images/receitas-da-hora.png';
import receitasDaHora1 from '../images/receitas-da-hora-1.png';
import receitasDaHora2 from '../images/receitas-da-hora-2.png';
import receitasDaHora3 from '../images/receitas-da-hora-3.png';
import receitasDaHora4 from '../images/receitas-da-hora-4.png';

export const projectsDetails = [
  {
    title: ' Sistema de agendamentos',
    img: sitemaDeAgendamentos,
    imgs: [
      sistemaDeAgemdamentos1,
      sistemaDeAgemdamentos2,
      sistemaDeAgemdamentos3,
      sistemaDeAgemdamentos4,
    ],
    linkSite: 'https://sistema-de-agendamento-developer.vercel.app/',
    github: 'https://github.com/JRaamos/Sistema-de-Agendamento',
    techs: ['CSS', 'Node', 'TypeScript', 'React', 'RTL', 'Redux', 'MySQL'],
  },
  {
    title: ' Portifolio',
    img: portifolio,
    imgs: [portifolio1, portifolio2, portifolio3, portifolio4],
    linkSite: 'https://jonathan-febrail-dev.vercel.app/',
    github: 'https://github.com/JRaamos/portfolio',
    techs: ['React', 'TypeScript', 'Tailwind', 'Git',
      'GitHub', 'Vercel', 'HTML', 'Context API', 'i18next'],
  },
  {
    title: ' Receitas da Hora',
    img: receitasDaHora,
    imgs: [receitasDaHora1, receitasDaHora2, receitasDaHora3, receitasDaHora4],
    linkSite: 'https://receitas-da-hora.vercel.app/',
    github: 'https://github.com/JRaamos/receitas-da-hora',
    techs: ['React', 'JavaScript', 'CSS', 'HTML', 'Git', 'GitHub', 'Vercel',
      'Redux', 'RTL', 'Gravatar'],
  },
];
