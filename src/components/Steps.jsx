import React from "react";
import styled, { css } from "styled-components";

const StyledSteps = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  /* gap: 80px; */

  background-color: #3e3c41;

  overflow: hidden;
`;

const StyledStep = styled.button`
  position: relative;

  padding: 20px;

  display: flex;
  justify-content: center;

  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  color: #fff;

  cursor: default;

  &::before {
    content: "";

    position: absolute;
    top: 0;
    left: 100%;
    bottom: 0;

    border: 52px solid transparent;
    border-left: 52px solid transparent;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: #ffa800;

      &::before {
        border-left-color: #ffa800;
      }
    `}
`;

const Steps = (props) => {
  const { steps, activeStepKey } = props;

  return (
    <StyledSteps>
      {steps.map((tab, index) => {
        const { label, isActive } = tab;

        return (
          <StyledStep key={index} isActive={isActive}>
            {label}
          </StyledStep>
        );
      })}
    </StyledSteps>
  );
};

export { Steps };
