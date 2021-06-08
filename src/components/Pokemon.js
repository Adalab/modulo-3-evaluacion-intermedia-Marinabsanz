import { render } from "@testing-library/react";

import PokeList from "./PokeList";

const Pokemon = (props) => 
{
    return <PokeList datapoke = {props.datapoke}/>;
  }
;

 ///Pendiente-- seleccionar favoritos y moverlos
// const favPoke = () => {
//   if (favorite=== ""){ 
//     setFavorite ('favPoke')
//   } else {
//     return setFavorite ("")
//   }

// }
export default Pokemon;
