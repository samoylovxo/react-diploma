import React from "react";
import styled from "styled-components";

const StyledCardWithTitle = styled.div``;

const StyledTop = styled.div`
  padding: 32px;

  background: #f9f9f9;
`;

const StyledTitle = styled.h3`
  color: #292929;
  font-size: 30px;
`;

const CardWithTitle = (props) => {
  const { className, title, children } = props;

  return (
    <StyledCardWithTitle className={className}>
      <StyledTop>
        <StyledTitle>{title}</StyledTitle>
      </StyledTop>

      {children}
    </StyledCardWithTitle>
  );
};

export { CardWithTitle };
