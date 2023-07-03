import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
`;

const Container = (props) => {
  const { children } = props;

  return <StyledContainer>{children}</StyledContainer>;
};

export { Container };
