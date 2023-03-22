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
      <div>
        <div className="App"><p>Press A & B to Toggle Through Pokemon Battles</p></div>
      <div className="gameboy">
        <div className="display">
        <div className="screen">
          <div className="pokeone">
            <img src={pokemon}/>
          </div>
          <div className="poketwo">
          <img src={pokemon2}/>
          </div>
        </div>
        </div>
        <div className="controls">
          <div className="dpad">
            <img src="https://static.thenounproject.com/png/2879645-200.png" />
          </div>
          <div className="button-area">
            <div className="button1" onClick={getPokemon1}>
              <p>B</p>
            </div>
            <div className="button2" onClick={getPokemon2}>
              <p>A</p>
            </div>
          </div>
        </div>      
      </div>
      </div>
  );
}

export default App;
