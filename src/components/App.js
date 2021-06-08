
import React, { useState } from "react";
import "../styles/main.scss";
import Pokemon from "./Pokemon";
import Data from "../Data/data.json";
  // const [data, setdata] = useState(data) = useState(Data);

  const App = () => {
  return (
    <>
      <header className="headerstyle">
        <h1 className="pokestyle">POKEMONS</h1>
      </header>

      <main className="mainstyle">
        <p> Mi lista de pokemons:</p>
        <Pokemon datapoke={Data}/>
      </main>
      <footer className="footerstyle">
        <small> Marina B.Sánchez.Evaluación Intermedia</small>
      </footer>
    </>
  );
};

export default App;
