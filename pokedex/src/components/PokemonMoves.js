import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: white;
  color: ${({ color }) => color || "blue"};
  padding: 10px;
  border: 1px solid ${({ color }) => color || "blue"};
  display: inline-block;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
  border-radius: 3px;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const PokemonMoves = ({ pokeMetadata }) => {
  const [pokeMoves, setPokeMoves] = useState([]);

  useEffect(() => {
    pokeMetadata && getMoves();
  }, [pokeMetadata]);

  const getMoves = () => {
    if (pokeMetadata.hasOwnProperty("moves")) {
      let moves = [];
      pokeMetadata.moves.forEach((pt) => {
        moves.push(pt.move.name);
      });
      setPokeMoves(moves);
    }
  };

  return (
    <StyledDiv>
      Moves:
      {pokeMoves &&
        pokeMoves.length > 0 &&
        pokeMoves.map((pt) => <StyledButton key={pt}>{pt}</StyledButton>)}
    </StyledDiv>
  );
};
