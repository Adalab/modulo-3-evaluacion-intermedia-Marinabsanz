import { render } from "@testing-library/react";

import Pokemon from './Pokemon';

const PokeList = (props) => 
{
    return ( 
    
    
    <ul> 
    < Pokemon datapoke = {props.datapoke}/>  
    
     </ul>);
  }
;

export default PokeList;
