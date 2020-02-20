import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize'

function App() {
  const [value, setValue] = useState()
  const [pokemonImg, setPokemonImg] = useState('')
  const [pokemonName, setPokemonName] = useState('')

   const changeValue = (e) => {
    setValue(e.target.value)
  }

  const addPokemon = (event) => {
    event.preventDefault()
    setPokemonName(value)
    const url = `https://pokeapi.co/api/v2/pokemon/${value}`
    fetch(url)
    .then( res => res.json())
    .then( data => {
      setPokemonImg(data.sprites.front_default)
    })
    .catch(e => console.log(e))
    setValue('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={addPokemon}>
          <div class="input-field inline" style={{color: 'white'}}>
            <input id="pokemon" value={value} onChange={changeValue}/>
            <label for="pokemon">Pokemon</label>
          </div>
          
          <button class="btn waves-effect waves-light" type="submit" name="action">
            Submit
          </button>
        </form>
        {/* <ul>
          {
            items.map( item => <Item name={item}/>)
          }
        </ul> */}
        <img src={pokemonImg} alt={pokemonImg} width={300}></img>
        <h1>{pokemonName}</h1>
      </header>
    </div>
  );
}

export default App;
