import React from "react";
import styled from "styled-components";
import { Slider } from "antd";

const StyledRange = styled.div``;

const StyledLabel = styled.div`
  color: #e5e5e5;
  font-size: 24px;
`;

const Range = (props) => {
  const { label, value, min = 10, max = 99999, onChange } = props;

  return (
    <StyledRange>
      {label && <StyledLabel>{label}</StyledLabel>}

      <Slider
        defaultValue={value}
        min={min}
        max={max}
        range={true}
        onChange={onChange}
      />
    </StyledRange>
  );
};

export { Range };
