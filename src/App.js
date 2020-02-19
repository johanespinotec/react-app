import React, { useState } from 'react';
import Item from './Item'
import logo from './logo.svg';
import './App.css';

function App() {
  const [value, setValue] = useState('')
  const [items, setItems] = useState([])

  const changeValue = (e) => {
    setValue(e.target.value)
  }

  const addItem = (event) => {
    event.preventDefault()
    setValue('')
    setItems([...items,value])
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form className="App" onSubmit={addItem}>
        <input value={value} onChange={(event) => changeValue(event)}/>
        <button>Add</button>
        </form>
        <ul>
        {
          items.map( item => <Item name={item}/>)
        }
        </ul>
        <h1>{value}</h1>
      </header>
    </div>
  );
}

export default App;
