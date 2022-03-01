export const getPokemonList = async () => {
  const pokemonData = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150"
  ).then((res) => res.json());

  return pokemonData.results;
};

export const getPokemonImage = () => {
  return "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/1.png";
};
