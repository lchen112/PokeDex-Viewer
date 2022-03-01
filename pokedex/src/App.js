import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import {
  getPokemonList,
  getPokemonImage,
  getPokemonImageFront,
  getPokemonImageBack,
} from "./service/pokemonService";
import React from "react";
//https://pokeapi.co/docs/v2#pokemon
function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [backImage, setBackImage] = useState();
  const [frontImage, setFrontImage] = useState();

  const [selectionIndex, setSelectionIndex] = useState(1);

  useEffect(() => {
    const getAllPokemon = async () => {
      let pokemonObjs = await getPokemonList();
      let pokeNames = [];
      pokemonObjs && pokemonObjs.forEach((po) => pokeNames.push(po.name));
      setPokemonList(pokemonObjs);
    };
    getAllPokemon();
  }, []);

  useEffect(() => {
    setFrontImage(getPokemonImageFront(selectionIndex));
    setBackImage(getPokemonImageBack(selectionIndex));
  }, [selectionIndex]);

  const handleDropdownChange = (event) => {
    console.log(event);
    let selectionIndex =
      document.getElementById("pokemon-dropdown").selectedIndex + 1;
    console.log(selectionIndex);
    setSelectionIndex(selectionIndex);
  };

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <select
        id="pokemon-dropdown"
        onChange={handleDropdownChange}
        name="Pokemon Dropdown"
      >
        {pokemonList &&
          pokemonList.map((pl) => <option value={pl.name}> {pl.name} </option>)}
      </select>
      <div>
        <img src={frontImage} />
        <img src={backImage} />
      </div>
    </div>
  );
}

export default App;
