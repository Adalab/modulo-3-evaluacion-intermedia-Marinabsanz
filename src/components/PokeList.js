import React from "react";


class PokeList extends React.Component {

    render() { console.table(this.props.datapoke)
const ePokemon = this.props.datapoke.map((pokeitem) => 
{ return ( <li key ={pokeitem.id}  className ='eachPokemon'>  {pokeitem.id} :{pokeitem.name} <img src= {pokeitem.url}/>
        </li>)  })

    return (
       
       <ul className= 'pokemonsCss'> 
           {ePokemon}
           
       </ul>
      
    )     
}
    }
export default PokeList;