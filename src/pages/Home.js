import Header from '../components/Header';
import HomeConteudo from '../components/HomeConteudo';
import NavLateral from '../components/NavLateral';

function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <NavLateral />
        <HomeConteudo />
      </main>
    </div>
  );
}

export default Home;
