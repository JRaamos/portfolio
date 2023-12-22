import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>Oops! Página não encontrada</h1>
      <h2>Desculpe, a página que você está procurando não existe.</h2>
      <Link to="/">
        <h3>Voltar à página inicial</h3>
      </Link>
    </>
  );
}

export default NotFound;
