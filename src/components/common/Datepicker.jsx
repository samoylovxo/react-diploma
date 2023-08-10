import React from "react";
import { DatePicker as AntdDatepicker } from "antd";
import locale from "antd/locale/ru_RU";
import { ErrorMessage } from "@hookform/error-message";
import { CalendarOutlined } from "@ant-design/icons";
import styled from "styled-components";
import dayjs from "dayjs";

const StyledDatepickerWrapper = styled.div`
  position: relative;

  display: grid;
  row-gap: 12px;
`;

const StyledDatepicker = styled(AntdDatepicker)`
  height: 60px;
  padding: 12px 20px;

  input {
    font-size: 18px !important;
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

const Datepicker = (props) => {
  const {
    label,
    name,
    value,
    placeholder,
    register,
    errors,
    isClearable = true,
    onChange,
  } = props;

  return (
    <StyledDatepickerWrapper>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledDatepicker
        {...register}
        prefixCls="datepicker"
        format="DD.MM.YYYY"
        placeholder={placeholder}
        locale={locale}
        allowClear={isClearable}
        showToday={false}
        suffixIcon={
          <CalendarOutlined style={{ fontSize: "32px", color: "#E5E5E5" }} />
        }
        onChange={(date) => {
          if (onChange) onChange((date && new Date(date)) || null);
        }}
        {...(value ? { value: dayjs(value) } : {})}
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
