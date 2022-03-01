import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { getPokemonList, getPokemonImage } from "./service/pokemonService";
import React from "react";
//https://pokeapi.co/docs/v2#pokemon
function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [image, setImage] = useState();
  useEffect(() => {
    const getAllPokemon = async () => {
      let pokemonObjs = await getPokemonList();
      console.log("poke objs", pokemonObjs);
      let pokeNames = [];
      pokemonObjs && pokemonObjs.forEach((po) => pokeNames.push(po.name));
      setPokemonList(pokemonObjs);
      let image = getPokemonImage();
      setImage(image);
    };
    getAllPokemon();
  }, []);

  return (
    <div className="App">
      <div>Pokedex</div>
      <select name="Pokemon">
        {pokemonList &&
          pokemonList.map((pl) => <option value={pl.name}> {pl.name} </option>)}
      </select>
      <img src={getPokemonImage()} />
    </div>
  );
}

export default App;
