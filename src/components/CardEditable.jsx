import React from "react";
import styled from "styled-components";
import { Button } from "components/common/Button";

const StyledCardEditable = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;

  border: 1px solid #c4c4c4;
  background-color: #ffffff;
`;

const StyledRight = styled.div`
  padding: 24px;

  display: grid;
  align-items: end;
`;

const CardEditable = (props) => {
  const { children, onClick } = props;

  return (
    <StyledCardEditable>
      {children}

      <StyledRight>
        <Button
          size="s"
          view="secondary"
          color="black"
          isBlock={true}
          onClick={onClick}
        >
          Изменить
        </Button>
      </StyledRight>
    </StyledCardEditable>
  );
};

export { CardEditable };
