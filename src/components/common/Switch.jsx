import React, { cloneElement, useState, useRef } from "react";
import styled from "styled-components";
import { Switch as AntdSwitch } from "antd";

const StyledSwitch = styled.div`
  width: max-content;

  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
  gap: 16px;

  cursor: pointer;
`;

const StyledLabel = styled.div`
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
`;

const Switch = (props) => {
  const { checked = false, children, icon, register, onChange } = props;

  const switchRef = useRef(null);

  const [innerChecked, setInnerChecked] = useState(() => checked);

  const innerIcon = cloneElement(icon || <></>, {
    style: { fontSize: "32px", color: "#E5E5E5" },
  });

  return (
    <StyledSwitch
      onClick={() => {
        switchRef.current?.click();
      }}
    >
      {icon && innerIcon}
      <AntdSwitch
        ref={switchRef}
        {...register}
        checked={innerChecked}
        onClick={(checked) => {
          setInnerChecked(checked);
          if (onChange) onChange(checked);
        }}
      />
      <StyledLabel>{children}</StyledLabel>
    </StyledSwitch>
  );
};

export { Switch };
