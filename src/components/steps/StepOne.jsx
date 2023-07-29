import React, { useContext } from "react";
import styled from "styled-components";
import { ContextTravel } from "hooks/useTravel";
import { TicketCard } from "components/TicketCard";

const StyledStepOne = styled.div`
  display: grid;
  row-gap: 24px;
`;

const StyledTop = styled.div``;

const StyledRoutes = styled.div`
  display: grid;
  row-gap: 48px;
`;

const StepOne = (props) => {
  const { onNextStep } = props;

  const {
    state: { routes },
  } = useContext(ContextTravel);

  const routesItems = routes?.items || [];

  // console.log("routes", routes);

  return (
    <StyledStepOne>
      <StyledTop>Найдено {routesItems.length}</StyledTop>

      <StyledRoutes>
        {routesItems.map((route, index) => {
          return (
            <TicketCard
              key={index}
              route={route}
              onClick={() => onNextStep && onNextStep(route)}
            />
          );
        })}
      </StyledRoutes>
    </StyledStepOne>
  );
};

export { StepOne };
