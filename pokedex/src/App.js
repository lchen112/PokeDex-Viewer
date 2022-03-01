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
import { PokemonMoves } from "./components/PokemonMoves";
import styled from "styled-components";
import { Pokeball } from "./components/Pokeball";
const StyledHeader = styled.h1`
  display: flex;
  justify-content: center;
`;

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
      <StyledHeader>
        <Pokeball />
        Pokedex
        <Pokeball />
      </StyledHeader>
      <SelectDropdown
        handleDropdownChange={handleDropdownChange}
        pokemonList={pokemonList}
      />
      <PokemonTypes pokeMetadata={pokeMetadata} />
      <div>
        <img src={frontImage} />
        <img src={backImage} />
      </div>
      <PokemonMoves pokeMetadata={pokeMetadata} />

      {/* {JSON.stringify(pokeMetadata)} */}
    </div>
  );
}

export default App;
