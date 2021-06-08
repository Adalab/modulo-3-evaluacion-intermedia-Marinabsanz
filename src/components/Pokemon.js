import { render } from "@testing-library/react";
import { useState } from "react";
import PokeList from "./PokeList";

const Pokemon = (props) => 
{
    return <PokeList datapoke = {props.datapoke}/>;
  }
;

export default Pokemon;
