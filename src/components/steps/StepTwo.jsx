import React, { useContext } from "react";
import styled from "styled-components";
import { ContextTravel } from "hooks/useTravel";
import { UserInfo } from "components/UserInfo";
import { Collapse } from "antd";
import { useFieldArray } from "react-hook-form";
import { Button } from "components/common/Button";

const StyledStepTwo = styled.div`
  display: grid;
  row-gap: 24px;
  align-content: start;
`;

const StepTwo = (props) => {
  const { onNextStep } = props;

  const {
    state: { formInstance },
  } = useContext(ContextTravel);

  const { fields, append, update } = useFieldArray({
    name: "departure.seats",
    control: formInstance.control,
  });

  const showButton = fields.length > 1;

  const users = fields.map((seat, index) => {
    const { seat_number } = seat;

    return {
      key: index + 1,
      label: `Пассажир ${index + 1}`,
      children: (
        <UserInfo
          key={index}
          name={`departure.seats.${index}.personInfo`}
          userNumber={seat_number}
          showButton={showButton}
          onChange={(value) =>
            update(index, {
              ...seat,
              personInfo: { ...(seat?.personInfo || {}), ...value },
            })
          }
        />
      ),
    };
  });

  return (
    <StyledStepTwo>
      <Collapse items={users} defaultActiveKey={[1]} />

      <Button onClick={onNextStep}>Далее</Button>
    </StyledStepTwo>
  );
};

export { StepTwo };
