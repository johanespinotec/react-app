import React, { useState } from 'react';
import Item from './Item'
import logo from './logo.svg';
import './App.css';

function App() {
  const [value, setValue] = useState('bulbasaur')
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
    setValue('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form className="App" onSubmit={addPokemon}>
        <input value={value} onChange={changeValue}/>
        <button>Add</button>
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
