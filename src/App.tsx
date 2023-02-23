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
    <div>
      <h1 className='center'>POKÉDEX</h1>
      <div className='container'>
        <div className='row'>
          {pokemons.map(({id, name, picture, created}) =>
          (<div className='col s6 m4' key={id}>
            <div className='card horizontal'> 
              <div className='card-image'>
                <img src={picture} alt={name}/>
              </div> 
              <div className='card-started'>
                <div className='card-content'>
                  <p>{name}</p>
                  <p><small>{created.toString()}</small></p>
                </div>
              </div>
            </div>
          </div>)
          )}
        </div>
      </div>
    </div>
  )
}

export default App;
