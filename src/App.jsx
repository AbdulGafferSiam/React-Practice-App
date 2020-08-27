import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import DisplayPokemon from './DisplayPokemon';
import './index.css';

const App = () => {
    const [num, setNum] = useState("Nothing");
    const [display, setDisplay] = useState(false);
    let [pokemon, setPokemon] = useState({
        name: "",
        img_back: "",
        img_front: "",
        weight: "",
        moves: ""
    });
    const firstLoad = useRef(true);

    useEffect(() => {
        if (firstLoad.current) {
            firstLoad.current = false;
            return;
        }
        async function getData() {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setPokemon({
                name: response.data.name,
                img_back: response.data.sprites.back_default,
                img_front: response.data.sprites.front_default,
                weight: response.data.weight,
                moves: response.data.moves.length
            });
        }
        getData();
    })

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1> Pokemon </h1>
                    <p> You choose {num} </p>
                    <select value={num} onChange={(event) => {
                        if (event.target.value === "0") {
                            setNum("Nothing");
                            setDisplay(false);
                        } else {
                            setNum(event.target.value);
                            setDisplay(true);
                        }

                    }}>
                        <option value="0">Choose here</option>
                        <option value="1"> 1 </option>
                        <option value="25"> 25 </option>
                        <option value="3"> 3 </option>
                        <option value="4"> 4 </option>
                        <option value="5"> 5 </option>
                    </select>
                </div>

                <div className="displayItems">
                    {
                        display ?
                            <>
                                <DisplayPokemon className="card" pokemon={pokemon} />
                            </> : null
                    }
                </div>
            </div>
        </>
    );
}

export default App;