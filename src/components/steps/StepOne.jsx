import React, { useContext } from "react";
import styled from "styled-components";
import { ContextTravel } from "hooks/useTravel";
import { TicketCard } from "components/TicketCard";
import { SeatsCard } from "components/SeatsCard";
import { Button } from "components/common/Button";

const StyledStepOne = styled.div`
  display: grid;
  row-gap: 24px;
  align-content: start;
`;

const StyledSort = styled.div``;

const StyledRoutes = styled.div`
  display: grid;
  row-gap: 48px;
`;

const StyledSeats = styled.div`
  display: grid;
  row-gap: 48px;
`;

const StyledTitle = styled.div`
  color: #292929;
  font-size: 30px;
  font-weight: 500;
  text-transform: uppercase;
`;

const StepOne = (props) => {
  const { onNextStep } = props;

  const {
    state: { routes, activeRoute, seats },
    mutations: { setActiveRoute },
  } = useContext(ContextTravel);

  const routeItems = routes?.items || [];
  const showSeats = Boolean(activeRoute);

  return (
    <StyledStepOne>
      {showSeats ? (
        <StyledSeats>
          <StyledTitle>Выбор мест</StyledTitle>

          {seats.map((seat, index) => {
            return (
              <SeatsCard
                key={index}
                seat={seat}
                route={activeRoute}
                onBackClick={() => setActiveRoute(null)}
              />
            );
          })}

          <Button
            onClick={() => {
              if (onNextStep) onNextStep();
            }}
          >
            Далее
          </Button>
        </StyledSeats>
      ) : (
        <>
          <StyledSort>Найдено {routeItems.length}</StyledSort>

          <StyledRoutes>
            {routeItems.map((route, index) => {
              return (
                <TicketCard
                  key={index}
                  route={route}
                  onClick={() => {
                    setActiveRoute(route);
                  }}
                />
              );
            })}
          </StyledRoutes>
        </>
      )}
    </StyledStepOne>
  );
};

export { StepOne };
