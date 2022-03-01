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
import useToggle from "./hooks/useToggle";
import { ToggleSwitch } from "./components/ToggleSwitch";

const StyledHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDiv = styled.div`
  border: 4px solid pink;
  margin-top: 8px;
  margin-bottom: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const StyledButton = styled.button`
  background-color: white;
  color: #0d82df;
  font-weight: 600;
  display: inline-block;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
  border-radius: 3px;
`;

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [backImage, setBackImage] = useState();
  const [frontImage, setFrontImage] = useState();
  const [selectionIndex, setSelectionIndex] = useState(1);
  const [pokeMetadata, setPokemetadata] = useState();
  const [shinyPokemon, toggleShinyPokemon] = useToggle();

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
    setFrontImage(getPokemonImageFront(selectionIndex, shinyPokemon));
    setBackImage(getPokemonImageBack(selectionIndex, shinyPokemon));
  }, [selectionIndex, shinyPokemon]);

  const handleDropdownChange = () => {
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SelectDropdown
          handleDropdownChange={handleDropdownChange}
          pokemonList={pokemonList}
        />
      </div>
      <PokemonTypes pokeMetadata={pokeMetadata} />
      <StyledDiv>
        <ToggleSwitch
          labelName={"Make it shiny!"}
          value={shinyPokemon}
          handleOnClick={toggleShinyPokemon}
        />
        <img width="200" height="200" src={frontImage} />
        <img width="200" height="200" src={backImage} />
      </StyledDiv>
      <PokemonMoves pokeMetadata={pokeMetadata} />
    </div>
  );
}

export default App;
