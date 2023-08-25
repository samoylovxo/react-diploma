import React, { useContext } from "react";
import styled from "styled-components";
import { TicketCard } from "components/TicketCard";
import { CardWithTitle } from "components/CardWithTitle";
import { UsersCheckout } from "components/UsersCheckout";
import { ContextTravel } from "hooks/useTravel";
import { Button } from "components/common/Button";
import { CardEditable } from "components/CardEditable";

const StyledStepFour = styled.div`
  display: grid;
  row-gap: 24px;
  align-content: start;
`;

const StyledCardWithTitle = styled(CardWithTitle)`
  border: 1px solid #c4c4c4;

  background: #ffffff;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
`;

const StyledPayment = styled.div`
  padding: 64px 40px;

  color: #292929;
  font-size: 24px;
`;

const StepFour = (props) => {
  const { onNextStep } = props;

  const {
    state: { activeRoute, formInstance },
  } = useContext(ContextTravel);

  const paymentText =
    formInstance.watch("user.payment_method") === "cash"
      ? "Наличными"
      : "Банковской картой";

  return (
    <StyledStepFour>
      <StyledCardWithTitle title="Поезд">
        <TicketCard route={activeRoute} isEditable={true} />
      </StyledCardWithTitle>

      <StyledCardWithTitle title="Пассажиры">
        <UsersCheckout />
      </StyledCardWithTitle>

      <StyledCardWithTitle title="Способ оплаты">
        <CardEditable>
          <StyledPayment>{paymentText}</StyledPayment>
        </CardEditable>
      </StyledCardWithTitle>

      <Button onClick={onNextStep}>Подтвердить</Button>
    </StyledStepFour>
  );
};

export { StepFour };
