import React, {useState} from 'react';
import axios from 'axios';
export default function FetchPokemon() {
    const [pokemon, setPokemon] = useState([]);
    let count = 1
    const onClickHandler = () => {
        // fetch ("https://pokeapi.co/api/v2/pokemon?limit=807")
        // .then(response => response.json())
        // .then(response => {
        //     console.log(response)
        //     setPokemon(response.results)
        // })
        // .catch(err => console.log(err))
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response=>{setPokemon(response.data.results)})
        .catch(err=>console.log(err))

    }

    return (


        <div>
            <div>
            <button onClick={onClickHandler}>click me !</button>
            </div>
            <div>
            {pokemon.map((pokemon,i) =>{
                    return <div key={i}><span> {count++} {pokemon.name}</span></div>
                })} 
            </div>
        </div >
    )
}
