import { useEffect, useState } from "react";
import styled from "styled-components";
import { getMoveMetadata } from "../service/pokemonService";

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
  const [moveMetadata, setMoveMetadata] = useState();
  const [moveUrl, setMoveUrl] = useState();

  useEffect(() => {
    pokeMetadata && getAllMoves();
  }, [pokeMetadata]);

  useEffect(() => {
    const getMoveData = async () => {
      let moveMetadata = await getMoveMetadata(moveUrl);
      setMoveMetadata(moveMetadata);
    };
    getMoveData();
  }, [moveUrl]);

  const getAllMoves = () => {
    if (pokeMetadata.hasOwnProperty("moves")) {
      let moves = [];
      pokeMetadata.moves.forEach((pt) => {
        moves.push(pt.move.name);
      });
      setPokeMoves(moves);
    }
  };

  const handleMoveClick = (event) => {
    let moveName = event.target.id;
    let moveUrlLink = pokeMetadata.moves.find((m) => m.move.name == moveName)
      .move.url;
    setMoveUrl(moveUrlLink);
  };

  return (
    <StyledDiv>
      Moves:
      {pokeMoves &&
        pokeMoves.length > 0 &&
        pokeMoves.map((pt) => (
          <StyledButton id={pt} key={pt} onClick={handleMoveClick}>
            {pt}
          </StyledButton>
        ))}
    </StyledDiv>
  );
};
