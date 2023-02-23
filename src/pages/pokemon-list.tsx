import React, {FunctionComponent} from "react";
import PokemonCard from "../components/pokemon-card";
import usePokemons from '../hooks/hook-pokemon';


const PokemonList: FunctionComponent = () => {
   const pokemons = usePokemons();


    return (<div>
        <h1 className='center'>POKÉDEX</h1>
        <div className='container'>
          <div className='row'>
          {pokemons.map((pokemon) =>
          (<PokemonCard key={pokemon.id} pokemon={pokemon}/>
          ))}
          </div>
      </div>
    </div>

    )
}


export default PokemonList;