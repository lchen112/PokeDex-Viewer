import styled from "styled-components";
import React from "react";

const StyledDiv = styled.div`
  display: flex;
  justify-content: end;
`;

const StyledModal = styled.div`
  width: 500px;
  background: white;
  border: 2px solid #ccc;
  border-radius: 4px;
  transition: 1.1s ease-out;
  box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
  filter: blur(0);
  transform: scale(1);
  opacity: 1;
  visibility: visible;

  &.red {
    background: black;
    color: red;
  }
  &.blue {
    background: blue;
    color: red;
  }

  &.off {
    opacity: 0;
    visibility: hidden;
    filter: blur(8px);
    transform: scale(0.33);
    box-shadow: 1rem 0 0 rgba(black, 0.2);
  }
  @supports (offset-rotate: 0deg) {
    offset-rotate: 0deg;
    &.off {
      offset-distance: 100%;
    }
  }
  @media (prefers-reduced-motion) {
    offset-path: none;
  }
  h2 {
    border-bottom: 1px solid #ccc;
    padding: 1rem;
    margin: 0;
  }
  .content {
    padding: 1rem;
  }
  .actions {
    border-top: 1px solid #ccc;
    background: #eee;
    padding: 0.5rem 1rem;
    button {
      border: 0;
      background: #78f89f;
      border-radius: 5px;
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
      line-height: 1;
    }
  }
`;

export const MoveModal = ({ moveMetadata, modalOpen, toggleModalOpen }) => {
  const getMoveEffect = () => {
    console.log(moveMetadata.effect_entries[0].effect);
    console.log("test");
    return moveMetadata.effect_entries[0].effect;
  };
  return (
    modalOpen && (
      <StyledModal>
        <div>
          <StyledDiv>
            <button onClick={() => toggleModalOpen()}>Close</button>
          </StyledDiv>
          <p>Skill Name: {moveMetadata?.name}</p>
          <p>Effect: {getMoveEffect()}</p>
          <p>Accuracy: {moveMetadata?.accuracy || 0}</p>
          <p>PP: {moveMetadata?.pp}</p>
        </div>
      </StyledModal>
    )
  );
};
