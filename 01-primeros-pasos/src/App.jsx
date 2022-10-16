import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import MiComponente2 from './MiComponente2';
import MiComponente3 from './MiComponente3';
import EventosComponente from './EventosComponente';

function App() {
  let fichaMedica = {
    altura: 1.80,
    peso: 80,
    edad: 23,
    estadoCivil: 'Soltero',
    alergias: ['Mosquitos', 'Polen', 'Polvo']
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EventosComponente />
          <MiComponente />
          <MiComponente2 />
          <MiComponente3 
          nombre='Jose Guzman'
          ficha={fichaMedica}
          />
      </header>
    </div>
  );
}

export default App;
