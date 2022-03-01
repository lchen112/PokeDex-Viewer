export const getPokemonList = async () => {
  const pokemonData = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150"
  ).then((res) => res.json());
  console.log(pokemonData);
  return pokemonData.results;
};

export const getPokemonImageFront = (selectionIndex) => {
  console.log({ selectionIndex });
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectionIndex}.png`;
};

export const getPokemonImageBack = (selectionIndex) => {
  console.log({ selectionIndex });
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${selectionIndex}.png`;
};
