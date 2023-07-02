import React from 'react';
import minhaFoto from '../img/eu.jpeg';
import './HomeConteudo.css';

function HomeConteudo() {
  return (
    <div
      className="home-contain"
    >
      <div className="home-conteudo">
        <section className="home-text">
          <h1 className="text-h1">
            Olá, eu sou o Jonathan Febraio
          </h1>
          <p className="text-p">
            Sou um Desenvolverdor Fronte-End que escreve codigos
            limpo, elgante e eficiente,
            apaixonado por tecnologia, sempre em busca de novos conhecimentos e desafios.
          </p>
        </section>
        <section>
          <img
            className="minha-foto"
            src={ minhaFoto }
            alt="Minha foto"
          />
        </section>
      </div>
    </div>
  );
}
export default HomeConteudo;
