import React from 'react';
import minhaFoto from '../img/eu.jpeg';

function HomeConteudo() {
  return (
    <div
      className="home-conteudo"
    >
      <h1>
        Olá, eu sou o Jonathan Febraio
      </h1>
      <p>
        Sou um Desenvolverdor Fronte-End que escreve codigos limpo, elgante e eficiente,
        apaixonado por tecnologia, sempre em busca de novos conhecimentos e desafios.
      </p>
      <section>
        <img src={ minhaFoto } alt="Minha foto" />
      </section>
    </div>
  );
}
export default HomeConteudo;
