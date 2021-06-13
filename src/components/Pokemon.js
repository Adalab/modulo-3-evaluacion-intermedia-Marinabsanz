import React from "react";


class Pokemon extends React.Component {

    render() { 
const ePokemon = this.props.datapoke.map((pokeitem) => 
{ return ( <li key ={pokeitem.id}  className ='eachPokemon'>  {`Name: ${pokeitem.name}`} {`Type:${pokeitem.types}`} <img src= {pokeitem.url} alt= '{pokeitem.name}'/>
        </li>)  })

    return (
        <article> 
       <ul className= 'pokemonsCss'> 
           {ePokemon}

       </ul>
       </article>
    )     
}
    }
export default Pokemon;