import React from "react";


class Pokemon extends React.Component {

    render() { 
const ePokemon = this.props.datapoke.map((pokeitem) => 
{ return ( <li key ={pokeitem.id}  className ='eachPokemon'>  {pokeitem.name} Type: {pokeitem.types} <img src= {pokeitem.url} alt= '{pokeitem.name}'/>
        </li>)  })

    return (
       
       <ul className= 'pokemonsCss'> 
           {ePokemon}
          
       </ul>
      
    )     
}
    }
export default Pokemon;