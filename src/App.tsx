import React, {FunctionComponent } from 'react';
import "./styles/App.css";
import PokemonList from './pages/pokemon-list';
import {BrowserRouter as Router, Route, Link, Routes } from  'react-router-dom';
import PokemonDetail from './pages/pokemon-detail';
import Pokemon from './models/pokemon';


const App: FunctionComponent = () => {

  return( 
    
 
    <div>
    <nav> 
      <div className="nav-wrapper teal">
        <Link to="/" className="brand-logo center">Pokédex</Link>
      </div> 
    </nav>
    <Routes>
     <Route path='/' element={<PokemonList/>}/>
     <Route path='/pokemons' element={<PokemonList/>}/>
     <Route path='/pokemons/:id' element={<PokemonDetail />}/>


    </Routes>
    </div>

 
  )
}


export default App;
