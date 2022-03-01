export const getPokemonList = async () => {
  const pokemonData = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150"
  ).then((res) => res.json());

  return pokemonData.results;
};

export const getPokemonImage = (selectionIndex) => {
  console.log({ selectionIndex });
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${selectionIndex}.png`;
};
