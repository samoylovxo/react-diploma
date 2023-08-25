import React from "react";
import styled from "styled-components";
import { Button } from "components/common/Button";
import { PersonalCard } from "components/PersonalCard";

const StyledStepThree = styled.div`
  display: grid;
  row-gap: 24px;
  align-content: start;
`;

const StepThree = (props) => {
  const { onNextStep } = props;

  return (
    <StyledStepThree>
      <PersonalCard />

      <Button onClick={onNextStep}>КУПИТЬ БИЛЕТЫ</Button>
    </StyledStepThree>
  );
};

export { StepThree };
