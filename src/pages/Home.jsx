import { Default } from "layouts/Default";
import React from "react";
import styled from "styled-components";

const StyledHome = styled.div`
  color: #000000;
`;

const Home = () => {
  return (
    <Default>
      <StyledHome>Home</StyledHome>
    </Default>
  );
};

export { Home };
