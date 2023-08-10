import React, { useContext } from "react";
import styled from "styled-components";
import { ContextTravel } from "hooks/useTravel";
import { Button } from "components/common/Button";
import { PersonalCard } from "components/PersonalCard";

const StyledStepThree = styled.div`
  display: grid;
  row-gap: 24px;
  align-content: start;
`;

const StepThree = (props) => {
  const { onNextStep } = props;

  const {
    state: { formInstance },
  } = useContext(ContextTravel);

  return (
    <StyledStepThree>
      <PersonalCard />

      <Button onClick={onNextStep}>
        КУПИТЬ БИЛЕТЫ
      </Button>
    </StyledStepThree>
  );
};

export { StepThree };
