import styled from "styled-components";
import React from "react";

const StyledDiv = styled.div`
  display: flex;
  justify-content: end;
`;

const AttributeDiv = styled.div`
  text-align: justify;
  margin-top: 8px;
`;

const StyledModal = styled.div`
  display: flex;
  align-content: left;
  position: absolute;
  top: 25%;
  max-height: 300px;
  width: 400px;
  overflow-y: scroll;
  transform: translate(-50%, -50%);
  background: white;
  border: 2px solid #ccc;
  border-radius: 4px;
  padding: 12px;
  transition: 1.1s ease-out;
  box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
  filter: blur(0);
  transform: scale(1);
  opacity: 1;
  visibility: visible;
`;

export const MoveModal = ({ moveMetadata, modalOpen, toggleModalOpen }) => {
  const getMoveEffect = () => {
    return moveMetadata?.effect_entries[0].effect;
  };

  return (
    modalOpen && (
      <StyledModal>
        <div>
          <StyledDiv>
            <button onClick={() => toggleModalOpen()}>Close</button>
          </StyledDiv>
          <div>
            <AttributeDiv>Skill Name: {moveMetadata?.name}</AttributeDiv>
            <AttributeDiv>Effect: {getMoveEffect()}</AttributeDiv>
            <AttributeDiv>Accuracy: {moveMetadata?.accuracy || 0}</AttributeDiv>
            <AttributeDiv>PP: {moveMetadata?.pp}</AttributeDiv>
          </div>
        </div>
      </StyledModal>
    )
  );
};
