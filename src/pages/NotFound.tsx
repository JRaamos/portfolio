import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex  justify-center h-[calc(70vh)] items-center">
      <div className="">
        <h1
          className=" font-mono text-center text-2xl
         dark:text-white font-semibold
"
        >
          Oops! Página não encontrada
        </h1>
        <h2
          className="font-mono text-center text-xl"
        >
          Desculpe, a página que você está procurando não existe.

        </h2>
        <Link to="/">
          <h3
            className="font-mono text-center text-base
             dark:text-orange-300 underline font-semibold
 text-blue-900"
          >
            Voltar à página inicial

          </h3>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
