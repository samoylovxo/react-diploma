import React, { useContext } from "react";
import { Select } from "components/common/Select";
import { REQUIRED } from "utils/constants";
import { Button } from "components/common/Button";
import { Datepicker } from "components/common/Datepicker";
import { SyncOutlined } from "@ant-design/icons";
import styled, { css } from "styled-components";
import { ContextTravel } from "hooks/useTravel";

const StyledTravelForm = styled.form`
  background-color: rgba(41, 41, 41, 0.8);

  ${({ isDirectionColumn }) =>
    isDirectionColumn
      ? css`
          padding: 80px 20px 60px;

          display: grid;
          gap: 40px;
        `
      : css`
          padding: 40px 48px;

          display: grid;
          gap: 40px;
          grid-template-columns: 1fr 1fr max-content;
          align-items: end;
        `}
`;

const StyledFormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  align-items: end;
  gap: 8px;
`;

const StyledSyncOutlined = styled(SyncOutlined)`
  margin-bottom: 20px;
`;

// direction: 'column' | 'row'
const TravelForm = (props) => {
  const { direction = "column", onSubmit } = props;

  const {
    state: { formInstance, citiesOptions },
    mutations: { setSearchCity },
    actions: { handleFormSetValue },
  } = useContext(ContextTravel);

  const isDirectionColumn = direction === "column";

  console.log(formInstance.watch("startDate"));

  return (
    <StyledTravelForm
      isDirectionColumn={isDirectionColumn}
      onSubmit={formInstance.handleSubmit(onSubmit)}
    >
      <StyledFormRow>
        <Select
          name="fromCityId"
          label="Направление"
          placeholder="Откуда"
          value={formInstance.watch("fromCityId")}
          register={formInstance.register("fromCityId", REQUIRED)}
          errors={formInstance?.formState?.errors}
          options={citiesOptions}
          onSearch={setSearchCity}
          onChange={(value) => {
            if (value.trim() !== "") formInstance.clearErrors("fromCityId");

            handleFormSetValue("fromCityId", value);
          }}
        />

        <StyledSyncOutlined style={{ fontSize: "20px", color: "#E5E5E5" }} />

        <Select
          name="toCityId"
          placeholder="Куда"
          value={formInstance.watch("toCityId")}
          register={formInstance.register("toCityId", REQUIRED)}
          errors={formInstance?.formState?.errors}
          options={citiesOptions}
          onSearch={setSearchCity}
          onChange={(value) => {
            if (value.trim() !== "") formInstance.clearErrors("toCityId");

            handleFormSetValue("toCityId", value);
          }}
        />
      </StyledFormRow>

      <StyledFormRow>
        <Datepicker
          name="dateStart"
          label="Дата"
          placeholder="ДД/ММ/ГГ"
          value={formInstance.watch("dateStart")}
          register={formInstance.register("dateStart")}
          errors={formInstance?.formState?.errors}
          onChange={(value) => {
            handleFormSetValue("dateStart", value);
          }}
        />

        <StyledSyncOutlined style={{ fontSize: "20px", color: "#E5E5E5" }} />

        <Datepicker
          name="dateEnd"
          placeholder="ДД/ММ/ГГ"
          value={formInstance.watch("dateEnd")}
          register={formInstance.register("dateEnd")}
          errors={formInstance?.formState?.errors}
          onChange={(value) => {
            handleFormSetValue("dateEnd", value);
          }}
        />
      </StyledFormRow>
      <Button type="submit" isBlock={isDirectionColumn}>
        Найти билеты
      </Button>
    </StyledTravelForm>
  );
};

export { TravelForm };
