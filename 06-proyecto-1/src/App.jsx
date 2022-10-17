import './App.css';
import { BuscadorComponent } from './components/BuscadorComponent';
import { CrearComponent } from './components/CrearComponent';
import { ListadoComponent } from './components/ListadoComponent';
import React from 'react'

function App() {

  const [movieList, setMovieList] = React.useState([]);


  return (
    <div className="layout">
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>Proyecto de peliculas</h1>
      </header>

      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Peliculas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul>
      </nav>

      <section className="content">
        <ListadoComponent movieList={movieList} setMovieList={setMovieList} />

      </section>

      <aside className="lateral">
        <BuscadorComponent movieList={movieList} setMovieList={setMovieList} />

        <CrearComponent setMovieList={setMovieList} />
      </aside>

      {/* Footer pie de pagina */}
      <footer className="footer">
        &copy; Master en JavaScript ES12 y TypeScript - <a href="https://github.com/RomanshkVolkov">Jose Guzman</a>
      </footer>

    </div>
  );
}

export default App;
