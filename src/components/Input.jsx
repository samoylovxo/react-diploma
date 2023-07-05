import React from "react";
import { Input as AntdInput } from "antd";
import { ErrorMessage } from "@hookform/error-message";
import styled from "styled-components";

const StyledInputWrapper = styled.div`
  position: relative;

  display: grid;
  row-gap: 12px;
`;

const StyledInput = styled(AntdInput)`
  height: 60px;
  padding: 20px 16px;
  font-size: 24px;

  &::placeholder {
    color: #e5e5e5;
  }
`;

const StyledInputLabel = styled.div`
  color: #e5e5e5;
  font-size: 24px;
`;

const StyledError = styled.p`
  position: absolute;
  bottom: -24px;
  left: 0;

  font-size: 12px;
  color: #cc4343;
`;

const Input = (props) => {
  const { label, name, value, placeholder, register, errors, onChange } = props;

  return (
    <StyledInputWrapper>
      {label && <StyledInputLabel>{label}</StyledInputLabel>}
      <StyledInput
        placeholder={placeholder}
        value={value}
        {...register}
        onChange={({ target: { value } }) => {
          if (onChange) onChange(value);
        }}
      />

      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <StyledError>{message}</StyledError>}
      />
    </StyledInputWrapper>
  );
};

export { Input };
