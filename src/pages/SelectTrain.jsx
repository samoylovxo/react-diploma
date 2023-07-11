import React, { useState } from "react";
import { Default } from "layouts/Default";
import { TravelForm } from "components/TravelForm";
import { Container } from "components/Container";
import { Tabs } from "components/Tabs";
import styled from "styled-components";

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

const TABS = [
  {
    label: (
      <StyledTabContent>
        <StyledTabKey>1</StyledTabKey>
        Билеты
      </StyledTabContent>
    ),
    key: "1",
    disabled: true,
  },
  {
    label: (
      <StyledTabContent>
        <StyledTabKey>2</StyledTabKey>
        Пассажиры
      </StyledTabContent>
    ),
    key: "2",
    disabled: true,
  },
  {
    label: (
      <StyledTabContent>
        <StyledTabKey>3</StyledTabKey>
        Оплата
      </StyledTabContent>
    ),
    key: "3",
    disabled: true,
  },
  {
    label: (
      <StyledTabContent>
        <StyledTabKey>4</StyledTabKey>
        Проверка
      </StyledTabContent>
    ),
    key: "4",
    disabled: true,
  },
];

const StyledSelectTrain = styled.div``;

const StyledSelectTrainHero = styled.div`
  height: 400px;

  background-image: url(/images/select-train-hero-bg.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #000000;
`;

const StyledContainer = styled(Container)`
  height: 100%;

  display: flex;
  align-items: flex-end;
`;

const SelectTrain = () => {
  const steps = [
    {
      label: (
        <StyledTabContent>
          <StyledTabKey>1</StyledTabKey>
          Билеты
        </StyledTabContent>
      ),
      key: "1",
      content: "uyk5465",
      disabled: true,
    },
    {
      label: (
        <StyledTabContent>
          <StyledTabKey>2</StyledTabKey>
          Пассажиры
        </StyledTabContent>
      ),
      key: "2",
      content: "ASDASD",
      disabled: true,
    },
    {
      label: (
        <StyledTabContent>
          <StyledTabKey>3</StyledTabKey>
          Оплата
        </StyledTabContent>
      ),
      key: "3",
      content: "asdasd",
      disabled: true,
    },
    {
      label: (
        <StyledTabContent>
          <StyledTabKey>4</StyledTabKey>
          Проверка
        </StyledTabContent>
      ),
      key: "4",
      content: "456546",
      disabled: true,
    },
  ];

  const [activeStep, setActiveStep] = useState(steps[0]);

  return (
    <Default>
      <StyledSelectTrainHero>
        <StyledContainer>
          <TravelForm
            direction="row"
            onSubmit={(data) => console.log("data", data)}
          />
        </StyledContainer>

        <Tabs tabs={steps} activeTabKey={activeStep.key} />
      </StyledSelectTrainHero>

      <StyledSelectTrain>asdsd</StyledSelectTrain>
    </Default>
  );
};

export { SelectTrain };
