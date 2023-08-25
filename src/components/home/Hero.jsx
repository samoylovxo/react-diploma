import React, { useContext } from "react";
import { Container } from "components/Container";
import { TravelForm } from "components/TravelForm";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { ContextTravel } from "hooks/useTravel";

const StyledHero = styled.section`
  height: 800px;

  background-image: url(/images/hero-bg.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #000000;
`;

const StyledContainer = styled(Container)`
  height: 100%;

  position: relative;
`;

const StyledContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  display: grid;
  align-items: center;
  column-gap: 100px;

  ${({ view }) =>
    view === "primary"
      ? css`
          grid-template-columns: 1fr 1fr;
        `
      : css`
          min-height: 600px;
        `}
`;

const StyledTitle = styled.h1`
  color: #ffffff;
  font-size: 72px;
  font-weight: 400;

  span {
    font-weight: 700;
  }
`;

const Hero = (props) => {
  const { title, hideForm = false, view = "primary" } = props;

  const navigate = useNavigate();

  const {
    actions: { handleBaseFormSubmit },
  } = useContext(ContextTravel);

  return (
    <StyledHero>
      <StyledContainer>
        <StyledContent view={view}>
          <StyledTitle>
            {title || (
              <>
                Вся жизнь - <span>путешествие!</span>
              </>
            )}
          </StyledTitle>

          {!hideForm && (
            <TravelForm
              onSubmit={(data) => {
                handleBaseFormSubmit(data);
                navigate("/select-train");
              }}
            />
          )}
        </StyledContent>
      </StyledContainer>
    </StyledHero>
  );
};

export { Hero };
