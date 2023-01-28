import logo from './logo.svg';
import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState('')
  const getPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/1')
    .then(res => {
      console.log(res.data.sprites.front_default)
      setPokemon(res.data.sprites.front_default)
    }).catch(err => {
      console.log(err)
    })
  }
  return (
      <div className="gameboy">
        <div className="display">
        <div className="screen">
          <div className="pokeone" onClick={getPokemon}></div>
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
