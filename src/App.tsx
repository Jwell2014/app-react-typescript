import React, {FunctionComponent } from 'react';
import "./styles/App.css";
import PokemonList from './pages/pokemon-list';
import { Route, Link, Routes} from 'react-router-dom';
import PokemonDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found.tsx';
import PokemonEdit from './pages/pokemon-edit';


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
     <Route path="/pokemons/:id" element={<PokemonDetail />}/>
     <Route path="/pokemons/edit/:id" element={<PokemonEdit />}/>
     <Route path="/*" element={<PageNotFound />}/>


    </Routes>
    </div>

 
  )
}


export default App;
