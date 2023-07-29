import React from "react";
import { Select as AntdSelect } from "antd";
import { ErrorMessage } from "@hookform/error-message";
import { EnvironmentFilled } from "@ant-design/icons";
import styled from "styled-components";

const StyledSelectWrapper = styled.div`
  position: relative;

  display: grid;
  row-gap: 12px;
`;

const StyledSelect = styled(AntdSelect)`
  .select-selector {
    height: 60px !important;
    padding: 12px 20px !important;
    font-size: 18px !important;

    &:hover {
      border-color: transparent !important;
    }
  }

  .select-selection-search-input {
    font-size: 18px;
    padding: 12px 8px !important;
    height: 100% !important;
  }

  .select-selection-item {
    width: 80px;
  }
`;

const StyledLabel = styled.div`
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

const Select = (props) => {
  const {
    label,
    name,
    value,
    options,
    placeholder,
    register,
    errors,
    onSearch,
    onChange,
  } = props;

  return (
    <StyledSelectWrapper>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledSelect
        {...register}
        prefixCls="select"
        options={options}
        placeholder={placeholder}
        value={value}
        suffixIcon={
          <EnvironmentFilled style={{ fontSize: "32px", color: "#E5E5E5" }} />
        }
        showSearch={true}
        filterOption={false}
        onSearch={onSearch}
        onChange={(option) => {
          if (onChange) onChange(option);
        }}
      />

      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <StyledError>{message}</StyledError>}
      />
    </StyledSelectWrapper>
  );
};

export { Select };
