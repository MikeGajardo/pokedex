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
            <img src="https://png2.cleanpng.com/sh/bf886d854416a56c1f038691d1666776/L0KzQYm3VsEyN6l4jJH0aYP2gLBuTgdqcV5vhAt8dHnme37ugf1mNZR0huZ7b3zvdcP6TfJtaZRwRehyZHXyPbjojfUueJ1mkeV9YYTsf7A0hghxbaNufdDsZT24coLshME2OJU7UapvMj62QIm3Vsk1O2I6SqoCNEa2QoGBV8kveJ9s/kisspng-wii-joystick-game-controllers-black-video-game-playstation-experience-5b1ed150d698f2.308069431528746320879.png" />
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
  );
}

export default App;
