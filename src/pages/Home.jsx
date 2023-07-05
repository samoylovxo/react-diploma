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
  const handleMenuItemClick = (id) => {
    const element = document.getElementById(id);

    if (element)
      element.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <Default onMenuItemClick={handleMenuItemClick}>
      <StyledHome>
        <Hero />

        <About id="about" />

        <HowWork id="how-work" />

        <Reviews id="reviews" />
      </StyledHome>
    </Default>
  );
};

export { Home };
