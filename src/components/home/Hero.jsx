import React from "react";
import { Container } from "components/Container";
import { TrainForm } from "components/TrainForm";
import styled from "styled-components";

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
  grid-template-columns: 1fr 1fr;
  align-items: center;
  column-gap: 100px;
`;

const StyledTitle = styled.h1`
  color: #ffffff;
  font-size: 72px;
  font-weight: 100;

  span {
    font-weight: 700;
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <StyledContainer>
        <StyledContent>
          <StyledTitle>
            Вся жизнь - <span>путешествие!</span>
          </StyledTitle>

          <TrainForm onSubmit={(data) => console.log("data", data)} />
        </StyledContent>
      </StyledContainer>
    </StyledHero>
  );
};

export { Hero };
