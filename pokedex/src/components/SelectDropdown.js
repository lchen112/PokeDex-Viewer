import React from "react";
import { capitalize } from "../utils/utils";
import styled from "styled-components";

const StyledSelect = styled.select`
  margin: 8px;
  font-size: 16px;
`;

export const SelectDropdown = ({ handleDropdownChange, pokemonList }) => {
  return (
    <div>
      Select Pokemon:
      <StyledSelect
        id="pokemon-dropdown"
        onChange={handleDropdownChange}
        name="Pokemon Dropdown"
      >
        {pokemonList &&
          pokemonList.map((pl) => (
            <option key={pl.name} value={pl.name}>
              {capitalize(pl.name)}
            </option>
          ))}
      </StyledSelect>
    </div>
  );
};
