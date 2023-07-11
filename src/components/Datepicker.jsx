import React from "react";
import { DatePicker as AntdDatepicker } from "antd";
import locale from "antd/locale/ru_RU";
import { ErrorMessage } from "@hookform/error-message";
import { CalendarOutlined } from "@ant-design/icons";
import styled from "styled-components";

const StyledDatepickerWrapper = styled.div`
  position: relative;

  display: grid;
  row-gap: 12px;
`;

const StyledDatepicker = styled(AntdDatepicker)`
  height: 60px;
  padding: 12px 20px;

  &:hover {
    border-color: transparent !important;
  }

  input {
    font-size: 18px !important;
  }
`;

const StyledDatepickerLabel = styled.div`
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

const Datepicker = (props) => {
  const { label, name, value, placeholder, register, errors, onChange } = props;

  return (
    <StyledDatepickerWrapper>
      {label && <StyledDatepickerLabel>{label}</StyledDatepickerLabel>}
      <StyledDatepicker
        {...register}
        prefixCls="datepicker"
        format="DD.MM.YYYY"
        placeholder={placeholder}
        value={value}
        locale={locale}
        allowClear={false}
        showToday={false}
        suffixIcon={
          <CalendarOutlined style={{ fontSize: "32px", color: "#E5E5E5" }} />
        }
        onChange={(option) => {
          if (onChange) onChange(new Date(option));
        }}
      />

      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <StyledError>{message}</StyledError>}
      />
    </StyledDatepickerWrapper>
  );
};

export { Datepicker };
