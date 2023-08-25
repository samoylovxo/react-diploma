import React from "react";
import styled from "styled-components";
import { Checkbox as AntdCheckbox } from "antd";
import { ErrorMessage } from "@hookform/error-message";

const StyledCheckbox = styled.div``;

const StyledLabel = styled.div`
  color: #928f94;
  font-size: 24px;
`;

const StyledError = styled.p`
  position: absolute;
  bottom: -24px;
  left: 0;

  font-size: 12px;
  color: #cc4343;
`;

const Checkbox = (props) => {
  const { children, name, register, errors } = props;

  return (
    <StyledCheckbox>
      <AntdCheckbox {...props} {...register}>
        {children && <StyledLabel>{children}</StyledLabel>}
      </AntdCheckbox>

      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <StyledError>{message}</StyledError>}
      />
    </StyledCheckbox>
  );
};

export { Checkbox };
