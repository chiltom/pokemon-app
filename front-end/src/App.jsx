import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import PokeCard from './components/PokeCard';

function App() {
  // State hooks and handlers for hooks
  const [pokeName, setPokeName] = useState("");
  const [pokeData, setPokeData] = useState(null);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    if (pokeData) {
      setPokemon([...pokemon, {'name': pokeData.name, 'types': pokeData.types, 'img': pokeData.sprites.front_default}]);
    }
  }, [pokeData]);

  const handleSubmit = e => {
    e.preventDefault();
    const getPokemonData = async () => {
      try {
        const { data } = await axios.get(`http://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`);
        setPokeData(data);
      } catch(error) {
        alert(error.response.data);
      }
    }
    if (pokeName.length > 0) {
      getPokemonData();
    }
    setPokeName("");
  }

  return (
    <>
      <div id='headerCont'>
        <h1 className='headerText'>PokeAPI Fetcher</h1>
        <p className='headerText'><em>A simple Pokemon data fetcher</em></p>
      </div>
      <div id='inputCont'>
        <form id='userInput' onSubmit={handleSubmit}>
          <input 
            type='text' 
            name='pokeName' 
            placeholder="Enter a pokemon's name:" 
            value={pokeName} 
            onChange={e => setPokeName(e.target.value)} />
          <input type='submit' />
        </form>
      </div>
      <div id='outputCont'>
        {pokemon.map((mon, i) => (
          <PokeCard
            name={mon.name}
            types={mon.types}
            img={mon.img}
            key={i}
          />
        ))}
      </div>
    </>
  )
}

export default App
