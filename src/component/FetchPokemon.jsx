import React, {useState} from 'react';

export default function FetchPokemon() {
    const [pokemon, setPokemon] = useState([]);
    const onClickHandler = () => {
        fetch ("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setPokemon(pokemon)
        })
        .catch(err => console.log(err))

    }

    return (


        <div>
            <div>
            <button onClick={onClickHandler}>click me !</button>
            </div>
            <div>
                
            </div>
        </div >
    )
}
