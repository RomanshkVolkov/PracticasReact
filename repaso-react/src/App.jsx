import logo from './logo.svg';
import './App.css';
import { MiPrimerComponente } from './MiPrimerComponente';
import { MiSegundoComponente } from './MiSegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MiPrimerComponente />
        
        <MiSegundoComponente />
      </header>
    </div>
  );
}

export default App;
