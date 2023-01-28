import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="gameboy">
        <div className="display">
        <div className="screen">
          <div className="pokeone"></div>
          <div className="poketwo"></div>
        </div>
        </div>
        <div className="pokesearch">
          <input type="text"></input>
        </div>      
      </div>
  );
}

export default App;
