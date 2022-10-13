import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import Logo from "./componentes/Logo";

function App() {
  return (
    <div className="App">
      <div className="aplicacion-tareas">
        <Logo />
        <div className="tareas-lista-principal">
          <h1>Mis tareas</h1>
          <ListaDeTareas />
        </div>
      </div>
    </div>
  );
}

export default App;
