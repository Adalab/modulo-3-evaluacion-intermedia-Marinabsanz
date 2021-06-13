
import React, { useState } from "react";
import "../styles/main.scss";
import PokeList from './PokeList';
import data from "../Data/data.json";


  const App = () => {
 
  return (
    <>
      <header className="headerstyle">
        <h1 className="pokestyle">POKEMONS</h1>
      </header>

      <main className="mainstyle">
        <p> Mi lista de pokemons:</p>
        <PokeList datapoke={data}/>
      </main>
      <footer className="footerstyle">
        <small> Marina B.Sánchez.Evaluación Intermedia</small>
      </footer>
    </>
  );
};

export default App;
