import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: purple;
  font-size: 1em;
  margin: 0 1em;
  border: 2px solid;
  border-radius: 3px;
  border-color: purple;
  height: max-content;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokemonTypes = ({ pokeMetadata }) => {
  const [pokeTypes, setPokeTypes] = useState([]);

  useEffect(() => {
    pokeMetadata && getTypes();
  }, [pokeMetadata]);

  const getTypes = () => {
    if (pokeMetadata.hasOwnProperty("types")) {
      let types = [];
      pokeMetadata.types.forEach((pt) => {
        types.push(pt.type.name);
      });
      setPokeTypes(types);
    }
  };

  return (
    <StyledDiv>
      <p>Types:</p>
      {pokeTypes &&
        pokeTypes.length > 0 &&
        pokeTypes.map((pt) => <StyledButton key={pt}>{pt}</StyledButton>)}
    </StyledDiv>
  );
};
