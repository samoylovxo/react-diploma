import React, { useState } from "react";
import { Select } from "components/Select";
import { useForm } from "react-hook-form";
import { REQUIRED } from "utils/consts";
import { Button } from "components/Button";
import { Datepicker } from "components/Datepicker";
import { useGetCities } from "hooks/query/useGetCities";
import { SyncOutlined } from "@ant-design/icons";
import styled, { css } from "styled-components";

const StyledTrainForm = styled.form`
  background-color: rgba(41, 41, 41, 0.8);

  ${({ isDirectionColumn }) =>
    isDirectionColumn
      ? css`
          padding: 80px 20px 60px;

          display: grid;
          gap: 40px;
        `
      : css`
          padding: 20px 32px;

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

const SET_VALUE_OPTIONS = {
  shouldDirty: true,
  shouldValidate: true,
};

// direction: 'column' | 'row'
const TrainForm = (props) => {
  const { direction = "column", onSubmit } = props;

  const form = useForm({
    mode: "onSubmit",
  });

  const [searchCity, setSearchCity] = useState("");

  const { data: cities } = useGetCities(searchCity);

  // console.log("searchCity", searchCity);
  // console.log("cities", cities);

  const isDirectionColumn = direction === "column";

  return (
    <StyledTrainForm
      isDirectionColumn={isDirectionColumn}
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <StyledFormRow>
        <Select
          name="from"
          label="Направление"
          placeholder="Откуда"
          register={form.register("from", REQUIRED)}
          errors={form.formState.errors}
          onSearch={setSearchCity}
          onChange={(value) => {
            if (value.trim() !== "") form.clearErrors("from");

            form.setValue("from", value, SET_VALUE_OPTIONS);
          }}
        />

        <StyledSyncOutlined style={{ fontSize: "20px", color: "#E5E5E5" }} />

        <Select
          name="to"
          placeholder="Куда"
          register={form.register("to", REQUIRED)}
          errors={form.formState.errors}
          onChange={(value) => {
            if (value.trim() !== "") form.clearErrors("to");

            form.setValue("to", value, SET_VALUE_OPTIONS);
          }}
        />
      </StyledFormRow>

      <StyledFormRow>
        <Datepicker
          name="startDate"
          label="Дата"
          placeholder="ДД/ММ/ГГ"
          register={form.register("from", REQUIRED)}
          errors={form.formState.errors}
          onChange={(value) => {
            console.log("value", value);
            form.setValue("startDate", value, SET_VALUE_OPTIONS);
          }}
        />

        <StyledSyncOutlined style={{ fontSize: "20px", color: "#E5E5E5" }} />

        <Datepicker
          name="endDate"
          placeholder="ДД/ММ/ГГ"
          register={form.register("to", REQUIRED)}
          errors={form.formState.errors}
          onChange={(value) => {
            form.setValue("endDate", value, SET_VALUE_OPTIONS);
          }}
        />
      </StyledFormRow>
      <Button type="submit" isBlock={isDirectionColumn}>
        Найти билеты
      </Button>
    </StyledTrainForm>
  );
};

export { TrainForm };
