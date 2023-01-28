import logo from './logo.svg';
import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState('')
  const [pokemon2, setPokemon2] = useState('')
  const rando = () => {
    return Math.floor(Math.random() * 600)
  }
  const url = 'https://pokeapi.co/api/v2/pokemon/'
  const getPokemon1 = () => {
    axios.get(url + rando())
    .then(res => {
      setPokemon(res.data.sprites.front_default)
    }).catch(err => {
      console.log(err)
    })
  }
  const getPokemon2 = () => {
    axios.get(url + rando())
    .then(res => {
      setPokemon2(res.data.sprites.back_default)
    }).catch(err => {
      console.log(err)
    })
  }
  return (
      <div className="gameboy">
        <div className="display">
        <div className="screen">
          <div className="pokeone" onClick={getPokemon1}>
            <img src={pokemon}/>
          </div>
          <div className="poketwo" onClick={getPokemon2}>
          <img src={pokemon2}/>
          </div>
        </div>
        </div>
        <div className="controls">
        </div>      
      </div>
  );
}

export default App;
