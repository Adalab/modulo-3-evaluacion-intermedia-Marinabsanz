
import React from "react";
import "../styles/main.scss";
import Pokemon from "./Pokemon";
import Data from "../Data/data.json";
// import { useState } from "react";


const App = () => {

  // const [Data, setData] = useState(Data);

console.log(Data)
  return (
    <>
      <header className="headerstyle">
        <h1 className="pokestyle">Mi lista de pokemons</h1>
      </header>

      <main className="mainstyle">
        <p> Mis pokemons favoritos </p>
        <Pokemon datapoke={Data}/>
      </main>

      <footer className="footerstyle">
        <small> Marina B.Sánchez.EValuación Intermedia</small>
      </footer>
    </>
  );
};

export default App;
