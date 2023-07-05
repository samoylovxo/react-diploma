import React from "react";
import { Avatar } from "antd";
import styled from "styled-components";

const StyledUser = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
  gap: 35px;
`;

const StyledContent = styled.div`
  display: grid;
  gap: 24px;
  align-content: start;
`;

const StyledName = styled.div`
  color: #00000;
  font-size: 24px;
  font-weight: 500;
`;

const StyledComment = styled.div`
  color: #929292;
  font-size: 18px;
  font-weight: 400;
  font-style: italic;
`;

const User = (props) => {
  const { name, photo, comment, size = 220 } = props;

  return (
    <StyledUser>
      <Avatar src={photo} size={size} />

      <StyledContent>
        <StyledName>{name}</StyledName>
        <StyledComment>{comment}</StyledComment>
      </StyledContent>
    </StyledUser>
  );
};

export { User };
