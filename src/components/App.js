

// import logo from './logo.svg';
import React from 'react';
import Data from '../Data/data.json';
import Pokelist from './PokeList';
import '../styles/main.scss';

const App= () => {
  return (
    <div className="Div">
      <header className="partial">
        <h1 className= 'pokestyle'>Mi lista de pokemons</h1>
      </header>
     
      <main className= "partial">
      <p> Mis pokemons favoritos </p>
       
  
      </main>

<footer className= "footer">   
<small> Marina B.Sánchez.EValuación Intermedia</small>
</footer>

    </div>

    
  );
}

export default App;
