import React, {FunctionComponent, useEffect, useState } from 'react';
import "./styles/App.css";
import Pokemon from './models/pokemon';
import listPokemon from './models/listPokemon'


const App: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect( () => {
    setPokemons(listPokemon)
  }, [] )

  return(
    <>
    <div>POKEDEX</div>
    <p>Vous avez 
      { pokemons.length } Pokemons
      </p>
      </>
  )
}

export default App;
