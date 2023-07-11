import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  font-size: 36px;
  font-weight: 900;
  color: #e5e5e5;

  cursor: pointer;
`;

const Logo = (props) => {
  const { onClick } = props;

  return <StyledLogo onClick={onClick}>Лого</StyledLogo>;
};

export { Logo };
