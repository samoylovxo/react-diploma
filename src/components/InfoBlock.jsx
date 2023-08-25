import React from "react";
import styled from "styled-components";

const StyledInfoBlock = styled.div`
  display: grid;
  gap: 32px;
  justify-items: center;
`;

const StyledInfoBlockIcon = styled.div`
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  outline: 10px solid rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

const StyledInfoBlockText = styled.p`
  color: ${({ color }) => color};
  text-align: center;
  font-size: 24px;
  font-weight: 400;
`;

const InfoBlock = (props) => {
  const { icon, text, iconColor = "#ffffff", textColor = '#e5e5e5' } = props;

  return (
    <StyledInfoBlock>
      <StyledInfoBlockIcon color={iconColor}>{icon}</StyledInfoBlockIcon>
      <StyledInfoBlockText color={textColor}>{text}</StyledInfoBlockText>
    </StyledInfoBlock>
  );
};

export { InfoBlock };
