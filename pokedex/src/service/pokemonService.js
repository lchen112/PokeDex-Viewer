export const getPokemonList = async () => {
  const pokemonData = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150"
  ).then((res) => res.json());
  return pokemonData.results;
};

export const getPokeMetadata = async (selectionIndex) => {
  const pokemonMetadata = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${selectionIndex}/`
  ).then((res) => res.json());
  return pokemonMetadata;
};

export const getMoveMetadata = async (url) => {
  const moveMetadata = await fetch(url).then((res) => res.json());
  return moveMetadata;
};

export const getPokemonImageFront = (selectionIndex) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectionIndex}.png`;
};

export const getPokemonImageBack = (selectionIndex) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${selectionIndex}.png`;
};
