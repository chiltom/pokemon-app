import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import PokeCards from './components/PokeCards';
import PokeForm from './components/PokeForm';
import './App.css'

function App() {
  // State hooks and handlers for hooks
  const [pokeName, setPokeName] = useState("");
  const [pokeData, setPokeData] = useState(null);
  const [pokemon, setPokemon] = useState([]);

  // Generate four random moves for a pokemon to spawn with
  const getRandMoves = (moves) => {
    let newMoves = [];
    let randNum = 0;
    for (let i = 0; i < 4; i++) {
      randNum = Math.floor(Math.random() * moves.length);
      newMoves.push(moves[randNum])
    }
    return newMoves
  }

  // Update pokemon when new pokemon data comes in from API calls
  useEffect(() => {
    if (pokeData) {
      setPokemon([...pokemon, {
        'name': pokeData.name, 
        'types': pokeData.types, 
        'img': pokeData.sprites.front_default,
        'stats': pokeData.stats,
        'moves': getRandMoves(pokeData.moves),
      }]);
    }
    console.log(pokemon)
  }, [pokeData]);

  // API call for pokemon name specified, if good set pokemon data, if not alert error
  useEffect(() => {
    const getPokemonData = async () => {
      try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`);
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
      <Navbar className='bg-body-tertiary' bg='dark' data-bs-theme='dark' sticky='top'>
        <Container>
          <Navbar.Brand href='#home' className='text-gray-200'>
            <Image 
              alt='Pikachu'
              src="https://i.kym-cdn.com/photos/images/newsfeed/001/297/938/8e6.png"
              width="30"
              height="30"
              className='d-inline-block align-top mb-0'
            />{' '}
            PokeAPI Fetcher
          </Navbar.Brand>
          <PokeForm className="" setPokeName={setPokeName} />
        </Container>
      </Navbar>
      <PokeCards pokemon={pokemon} />
    </>
  )
}

export default App
