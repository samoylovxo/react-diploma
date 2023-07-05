import React from "react";
import { Container } from "components/Container";
import { Select } from "components/Select";
import { useForm } from "react-hook-form";
import { REQUIRED } from "utils/consts";
import { Button } from "components/Button";
import { Datepicker } from "components/Datepicker";
import { SyncOutlined } from "@ant-design/icons";
import styled from "styled-components";

const StyledHero = styled.section`
  height: 800px;

  background-image: url(/images/hero-bg.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #000000;
`;

const StyledContainer = styled(Container)`
  height: 100%;

  position: relative;
`;

const StyledContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  column-gap: 100px;
`;

const StyledForm = styled.form`
  padding: 80px 20px 60px;

  display: grid;
  row-gap: 40px;

  background-color: rgba(41, 41, 41, 0.8);
`;

const StyledFormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  align-items: end;
  gap: 8px;
`;

const StyledTitle = styled.h1`
  color: #ffffff;
  font-size: 72px;
  font-weight: 100;

  span {
    font-weight: 700;
  }
`;

const StyledSyncOutlined = styled(SyncOutlined)`
  margin-bottom: 20px;
`;

const SET_VALUE_OPTIONS = {
  shouldDirty: true,
  shouldValidate: true,
};

const Hero = () => {
  const form = useForm({
    mode: "onSubmit",
  });

  return (
    <StyledHero>
      <StyledContainer>
        <StyledContent>
          <StyledTitle>
            Вся жизнь - <span>путешествие!</span>
          </StyledTitle>

          <StyledForm
            onSubmit={form.handleSubmit((data) => console.log("data", data))}
          >
            <StyledFormRow>
              <Select
                name="from"
                label="Направление"
                placeholder="Откуда"
                register={form.register("from", REQUIRED)}
                errors={form.formState.errors}
                onChange={(value) => {
                  if (value.trim() !== "") form.clearErrors("from");

                  form.setValue("from", value, SET_VALUE_OPTIONS);
                }}
              />

              <StyledSyncOutlined
                style={{ fontSize: "20px", color: "#E5E5E5" }}
              />

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

              <StyledSyncOutlined
                style={{ fontSize: "20px", color: "#E5E5E5" }}
              />

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

            <Button type="submit" isBlock={true}>
              Найти билеты
            </Button>
          </StyledForm>
        </StyledContent>
      </StyledContainer>
    </StyledHero>
  );
};

export { Hero };
