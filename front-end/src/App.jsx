import { useState, useEffect } from 'react';
import axios from 'axios';
import PokeCards from './components/PokeCards';
import PokeForm from './components/PokeForm';
import './App.css'

function App() {
  // State hooks and handlers for hooks
  const [pokeName, setPokeName] = useState("");
  const [pokeData, setPokeData] = useState(null);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    console.log(pokeName);
  }, [pokeName])

  useEffect(() => {
    if (pokeData) {
      setPokemon([...pokemon, {'name': pokeData.name, 'types': pokeData.types, 'img': pokeData.sprites.front_default}]);
    }
  }, [pokeData]);

  useEffect(() => {
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
  }, [pokeName]);

  return (
    <>
      <div id='headerCont'>
        <h1 className='headerText'>PokeAPI Fetcher</h1>
        <p className='headerText'><em>A simple Pokemon data fetcher</em></p>
      </div>
      <PokeForm setPokeName={setPokeName} />
      <PokeCards pokemon={pokemon} />
    </>
  )
}

export default App
