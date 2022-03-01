import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: black;
  font-size: 16px;
  color: white;
  margin-left: 8px;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

export const PokemonTypes = ({ pokeMetadata }) => {
  const [pokeTypes, setPokeTypes] = useState([]);

  useEffect(() => {
    pokeMetadata && getTypes();
  }, [pokeMetadata]);

  const getTypes = () => {
    if (pokeMetadata.hasOwnProperty("types")) {
      let types = [];
      console.log(pokeMetadata.types);
      pokeMetadata.types.forEach((pt) => {
        types.push(pt.type.name);
      });
      console.log(types);
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
