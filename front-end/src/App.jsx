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
      <Navbar className='bg-body-tertiary justify-content-between'>
        <Container>
          <Navbar.Brand href='#home'>
            <Image 
              alt='Pikachu'
              src='https://i.pngimg.me/thumb/f/720/m2i8d3K9H7A0Z5G6.jpg'
              width="30"
              height="30"
              className='d-inline-block align-top'
            />{' '}
            PokeAPI Fetcher
          </Navbar.Brand>
          <PokeForm setPokeName={setPokeName} />
        </Container>
      </Navbar>
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
