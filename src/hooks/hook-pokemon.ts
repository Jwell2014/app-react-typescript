import React, {useState, useEffect} from "react";
import POKEMONS from "../models/listPokemon";
import Pokemon from "../models/pokemon";


const usePokemons = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        setPokemons(POKEMONS);
    }, [])

    return pokemons;
}

export default usePokemons;