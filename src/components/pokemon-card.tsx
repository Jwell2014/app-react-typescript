import React, { FunctionComponent, useState } from "react";
import Pokemon from "../models/pokemon";
import '../styles/pokemoncard.css'
import formatDate from "../helpers/format-date";
import formatType from "../helpers/format-types";


type Props = {
    pokemon: Pokemon;
    borderColor?: string;
}

const PokemonCard: FunctionComponent<Props> = ({pokemon, borderColor = '#009688' }) => {

    const [color, setColor]= useState<string>();

    const showBorder = () => {
      setColor(borderColor)
    }

    const hideBorder = () => {
      setColor("#f5f5f5")
    }

   
   
    return (
        
        <div className='col s6 m4' key={pokemon.id} onMouseEnter={showBorder} onMouseLeave={hideBorder} >
            <div className='card horizontal' style={{ borderColor: color }} > 
              <div className='card-image'>
                <img src={pokemon.picture} alt={pokemon.name}/>
              </div> 
              <div className='card-started'>
                <div className='card-content'>
                  <p>{pokemon.name}</p>
                  <p><small>{formatDate(pokemon.created)}</small></p>
                  {pokemon.types.map(type => (
                    <span key={type} className={formatType(type)} >{type}</span>
                  ))}
                  
                </div>
              </div>
            </div>
          </div>)
}

export default PokemonCard;