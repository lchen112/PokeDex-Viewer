import styled from "styled-components";
import "./ToggleSwitch.css";
const StyledSwitchDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34px;
`;

export const ToggleSwitch = ({ labelName, value, handleOnClick }) => {
  return (
    <StyledSwitchDiv>
      {labelName}
      <label class="switch">
        <input type="checkbox" value={value} onClick={() => handleOnClick()} />
        <span class="slider round"></span>
      </label>
    </StyledSwitchDiv>
  );
};
