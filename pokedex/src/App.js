import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import {
  getPokemonList,
  getPokemonImageFront,
  getPokemonImageBack,
  getPokeMetadata,
} from "./service/pokemonService";
import React from "react";
import { PokemonTypes } from "./components/PokemonTypes";
import { SelectDropdown } from "./components/SelectDropdown";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [backImage, setBackImage] = useState();
  const [frontImage, setFrontImage] = useState();
  const [selectionIndex, setSelectionIndex] = useState(1);
  const [pokeMetadata, setPokemetadata] = useState();

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
    const getPokemonData = async () => {
      let pokeData = await getPokeMetadata(selectionIndex);
      setPokemetadata(pokeData);
    };
    getPokemonData();
    setFrontImage(getPokemonImageFront(selectionIndex));
    setBackImage(getPokemonImageBack(selectionIndex));
  }, [selectionIndex]);

  const handleDropdownChange = (event) => {
    let selectionIndex =
      document.getElementById("pokemon-dropdown").selectedIndex + 1;
    setSelectionIndex(selectionIndex);
  };

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <SelectDropdown
        handleDropdownChange={handleDropdownChange}
        pokemonList={pokemonList}
      />
      <PokemonTypes pokeMetadata={pokeMetadata} />
      <div>
        <img src={frontImage} />
        <img src={backImage} />
      </div>
      {/* {JSON.stringify(pokeMetadata)} */}
    </div>
  );
}

export default App;
