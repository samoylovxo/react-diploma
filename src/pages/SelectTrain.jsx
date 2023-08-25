import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Default } from "layouts/Default";
import { TravelForm } from "components/TravelForm";
import { Container } from "components/Container";
import { Steps } from "components/Steps";
import { ContextTravel } from "hooks/useTravel";
import { Filters } from "components/Filters";
import { FormProvider } from "react-hook-form";
import { StepOne } from "components/steps/StepOne";
import { StepTwo } from "components/steps/StepTwo";
import { StepThree } from "components/steps/StepThree";
import { StepFour } from "components/steps/StepFour";
import { useNavigate } from "react-router-dom";
import { useOrderCreate } from "hooks/query/useOrder";

const StyledTabContent = styled.span`
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
  gap: 16px;
`;

const StyledTabKey = styled.span`
  width: 62px;
  height: 62px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid #ffffff;
  border-radius: 50%;
`;

const StyledSelectTrainHero = styled.div`
  height: 400px;

  background-image: url(/images/select-train-hero-bg.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #000000;
`;

const StyledHeroContainer = styled(Container)`
  height: 100%;

  display: flex;
  align-items: flex-end;
`;

const StyledContainer = styled(Container)`
  padding-top: 20px;
  padding-bottom: 20px;

  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 80px;
`;

const StyledFilters = styled.div``;

const SelectTrain = () => {
  const navigate = useNavigate();
  const {
    state: { formInstance },
    actions: { handleBaseFormSubmit },
  } = useContext(ContextTravel);

  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const { mutate: createOrder } = useOrderCreate();

  const handleNextStep = () => {
    const lastIndex = steps.length - 1;

    setActiveStepIndex((index) => (index < lastIndex ? index + 1 : index));
  };

  const handlePrevStep = () => {
    setActiveStepIndex((index) =>
      index < steps.length - 1 ? index - 1 : index
    );
  };

  const handleCheckoutSubmit = () => {
    const { user, departure } = formInstance.getValues();

    createOrder({
      data: {
        user,
        departure: {
          ...departure,
          seats: departure.seats.map((seat) => ({
            ...seat,
            person_info: {
              ...seat.personInfo,
              document_data: `${seat.personInfo.documentDataSerial} ${seat.personInfo.documentDataNumber}`,
            },
          })),
        },
      },
      onSuccess: () => {
        navigate("/checkout-result");
      },
    });
  };

  const steps = [
    {
      label: (
        <StyledTabContent>
          <StyledTabKey>1</StyledTabKey>
          Билеты
        </StyledTabContent>
      ),
      content: <StepOne onNextStep={handleNextStep} />,
      isActive: activeStepIndex >= 0,
    },
    {
      label: (
        <StyledTabContent>
          <StyledTabKey>2</StyledTabKey>
          Пассажиры
        </StyledTabContent>
      ),
      content: <StepTwo onNextStep={handleNextStep} />,
      isActive: activeStepIndex >= 1,
    },
    {
      label: (
        <StyledTabContent>
          <StyledTabKey>3</StyledTabKey>
          Оплата
        </StyledTabContent>
      ),
      content: <StepThree onNextStep={handleNextStep} />,
      isActive: activeStepIndex >= 2,
    },
    {
      label: (
        <StyledTabContent>
          <StyledTabKey>4</StyledTabKey>
          Проверка
        </StyledTabContent>
      ),
      content: <StepFour onNextStep={handleCheckoutSubmit} />,
      isActive: activeStepIndex >= 3,
    },
  ];

  const activeStep = steps[activeStepIndex];

  return (
    <Default>
      <FormProvider {...formInstance}>
        <StyledSelectTrainHero>
          <StyledHeroContainer>
            <TravelForm direction="row" onSubmit={handleBaseFormSubmit} />
          </StyledHeroContainer>
        </StyledSelectTrainHero>

        <Steps steps={steps} activeStepKey={activeStep.key} />

        <StyledContainer>
          <StyledFilters>
            <Filters />
          </StyledFilters>
          {activeStep.content}
        </StyledContainer>
      </FormProvider>
    </Default>
  );
};

export { SelectTrain };
