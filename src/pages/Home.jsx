import React from "react";
import { Default } from "layouts/Default";
import { Hero } from "components/home/Hero";
import { About } from "components/home/About";
import { HowWork } from "components/home/HowWork";
import { Reviews } from "components/home/Reviews";

import styled from "styled-components";

const StyledHome = styled.div`
  color: #000000;
`;

const Home = () => {
  return (
    <Default>
      <StyledHome>
        <Hero />

        <About />

        <HowWork />

        <Reviews />
      </StyledHome>
    </Default>
  );
};

export { Home };
