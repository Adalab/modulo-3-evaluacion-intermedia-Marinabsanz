import React from "react";


class PokeList extends React.Component {

    render() { console.table(this.props.datapoke)
const ePokemon = this.props.datapoke.map((pokeitem) => 
{ return ( <li key ={pokeitem.id}  className ='eachPokemon'> {pokeitem.id}
        </li>)  })

    return (
       <ul> 
           {ePokemon}
       </ul>
    )     
}
    }
export default PokeList;