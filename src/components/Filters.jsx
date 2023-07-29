import React, { useContext } from "react";
import styled from "styled-components";
import { ContextTravel } from "hooks/useTravel";
import { Datepicker } from "components/common/Datepicker";
import { Switch } from "components/common/Switch";
import { Range } from "components/common/Range";

const StyledFilters = styled.div``;

const StyledFiltersForm = styled.div`
  padding: 40px 32px;

  display: grid;
  row-gap: 40px;

  background-color: #3e3c41;
`;

const Filters = () => {
  const {
    state: { formInstance },
    actions: { handleFormSetValue },
  } = useContext(ContextTravel);

  return (
    <StyledFilters>
      <StyledFiltersForm>
        <Datepicker
          name="dateStart"
          label="Дата поездки"
          placeholder="ДД/ММ/ГГ"
          value={formInstance.watch("dateStart")}
          errors={formInstance.formState.errors}
          onChange={(value) => {
            handleFormSetValue("dateStart", value);
          }}
        />

        <Datepicker
          name="dateEnd"
          label="Дата возвращения"
          placeholder="ДД/ММ/ГГ"
          value={formInstance.watch("dateEnd")}
          errors={formInstance.formState.errors}
          onChange={(value) => {
            handleFormSetValue("dateEnd", value);
          }}
        />

        <Switch
          checked={formInstance.watch("haveSecondClass")}
          onChange={(checked) => {
            handleFormSetValue("haveSecondClass", checked);
          }}
        >
          Купе
        </Switch>

        <Switch
          checked={formInstance.watch("haveThirdClass")}
          onChange={(checked) => {
            handleFormSetValue("haveThirdClass", checked);
          }}
        >
          Плацкарт
        </Switch>

        <Switch
          checked={formInstance.watch("haveFourthClass")}
          onChange={(checked) => {
            handleFormSetValue("haveFourthClass", checked);
          }}
        >
          Сидячий
        </Switch>

        <Switch
          checked={formInstance.watch("haveFirstClass")}
          onChange={(checked) => {
            handleFormSetValue("haveFirstClass", checked);
          }}
        >
          Люкс
        </Switch>

        <Switch
          checked={formInstance.watch("haveWifi")}
          onChange={(checked) => {
            handleFormSetValue("haveWifi", checked);
          }}
        >
          Wi-Fi
        </Switch>

        <Switch
          checked={formInstance.watch("haveExpress")}
          onChange={(checked) => {
            handleFormSetValue("haveExpress", checked);
          }}
        >
          Экспресс
        </Switch>

        <Range
          label="Стоимость"
          value={[
            formInstance.watch("priceFrom"),
            formInstance.watch("priceTo"),
          ]}
          onChange={(value) => {
            handleFormSetValue("priceFrom", value[0]);
            handleFormSetValue("priceTo", value[1]);
          }}
        />
      </StyledFiltersForm>
    </StyledFilters>
  );
};

export { Filters };
