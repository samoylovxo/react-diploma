import React, { useContext } from "react";
import { Checkbox, Space, Radio } from "antd";
import styled from "styled-components";
import { Select } from "./common/Select";
import { Input } from "./common/Input";
import { Datepicker } from "./common/Datepicker";
import { Button } from "./common/Button";
import { ContextTravel } from "hooks/useTravel";
import { REQUIRED } from "utils/constants";

const USER_YEARS_OPTIONS = [
  {
    label: "Взрослый",
    value: "true",
  },
  {
    label: "Детский",
    value: "false",
  },
];

const DOC_TYPE_OPTIONS = [
  {
    label: "Паспорт",
    value: "паспорт",
  },
  {
    label: "Cвидетельство о рождении",
    value: "свидетельство",
  },
];

const StyledSpace = styled(Space)`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1.5fr;
`;

const StyledUserInfo = styled.div`
  background-color: #ffffff;
`;

const StyledTop = styled.div``;

const StyledTitle = styled.h4`
  color: #292929;
  font-size: 30px;
  font-weight: 400;
`;

const StyledForm = styled.div`
  padding: 32px;

  display: grid;
  gap: 32px;
`;

const StyledBottom = styled.div`
  padding: 24px 32px;

  display: flex;
  justify-content: flex-end;
  alight-items: center;
`;

const UserInfo = (props) => {
  const { name, userNumber = 1, onChange, onSubmit } = props;

  const {
    state: { formInstance },
  } = useContext(ContextTravel);

  return (
    <StyledUserInfo>
      <StyledTop>
        <StyledTitle>Пассажир на место №{userNumber}</StyledTitle>
      </StyledTop>

      <StyledForm>
        <Select
          name={`${name}.isAdult`}
          value={formInstance.watch(`${name}.isAdult`) || USER_YEARS_OPTIONS[0]}
          errors={formInstance?.formState?.errors}
          options={USER_YEARS_OPTIONS}
          showIcon={false}
          onChange={(value) => {
            if (onChange) onChange({ isAdult: value });
          }}
        />

        <Space size={24}>
          <Input
            name={`${name}.lastName`}
            label="Фамилия"
            placeholder="Введите фамилию"
            value={formInstance.watch(`${name}.lastName`)}
            register={formInstance.register(`${name}.lastName`, REQUIRED)}
            errors={formInstance?.formState?.errors}
            onChange={(value) => {
              if (value.trim() !== "")
                formInstance.clearErrors(`${name}.lastName`);

              if (onChange) onChange({ lastName: value });
            }}
          />
          <Input
            name={`${name}.firstName`}
            label="Имя"
            placeholder="Введите имя"
            value={formInstance.watch(`${name}.firstName`)}
            register={formInstance.register(`${name}.firstName`, REQUIRED)}
            errors={formInstance?.formState?.errors}
            onChange={(value) => {
              if (value.trim() !== "")
                formInstance.clearErrors(`${name}.firstName`);

              if (onChange) onChange({ firstName: value });
            }}
          />
          <Input
            name={`${name}.patronymic`}
            label="Отчество"
            placeholder="Введите отчество"
            value={formInstance.watch(`${name}.patronymic`)}
            register={formInstance.register(`${name}.patronymic`, REQUIRED)}
            errors={formInstance?.formState?.errors}
            onChange={(value) => {
              if (value.trim() !== "")
                formInstance.clearErrors(`${name}.patronymic`);

              if (onChange) onChange({ patronymic: value });
            }}
          />
        </Space>

        <Space size={24} align="end">
          <Radio.Group
            value={formInstance.watch(`${name}.gender`) || "false"}
            style={{ marginBottom: 8 }}
            onChange={(event) => {
              if (onChange) onChange({ gender: event.target.value });
            }}
          >
            <Radio.Button value="true">М</Radio.Button>
            <Radio.Button value="false">Ж</Radio.Button>
          </Radio.Group>

          <Datepicker
            name={`${name}.birthday`}
            label="Дата рождения"
            placeholder="ДД/ММ/ГГ"
            value={formInstance.watch(`${name}.birthday`)}
            errors={formInstance?.formState?.errors}
            onChange={(value) => {
              if (onChange) onChange({ birthday: value });
            }}
          />
        </Space>

        <Checkbox>ограниченная подвижность</Checkbox>

        <StyledSpace size={24} align="end">
          <Select
            name={`${name}.documentType`}
            value={
              formInstance.watch(`${name}.documentType`) || DOC_TYPE_OPTIONS[0]
            }
            errors={formInstance?.formState?.errors}
            options={DOC_TYPE_OPTIONS}
            showIcon={false}
            onChange={(value) => {
              if (onChange) onChange({ documentType: value });
            }}
          />

          <Input
            name={`${name}.documentDataSerial`}
            label="Серия"
            placeholder="Введите cерию"
            value={formInstance.watch(`${name}.documentDataSerial`)}
            register={formInstance.register(
              `${name}.documentDataSerial`,
              REQUIRED
            )}
            errors={formInstance?.formState?.errors}
            onChange={(value) => {
              if (value.trim() !== "")
                formInstance.clearErrors(`${name}.documentDataSerial`);
              if (onChange) onChange({ documentDataSerial: value });
            }}
          />
          <Input
            name={`${name}.documentDataNumber`}
            label="Номер"
            placeholder="Введите номер"
            value={formInstance.watch(`${name}.documentDataNumber`)}
            register={formInstance.register(
              `${name}.documentDataNumber`,
              REQUIRED
            )}
            errors={formInstance?.formState?.errors}
            onChange={(value) => {
              if (value.trim() !== "")
                formInstance.clearErrors(`${name}.documentDataNumber`);
              if (onChange) onChange({ documentDataNumber: value });
            }}
          />
        </StyledSpace>
      </StyledForm>

      <StyledBottom>
        <Button
          view="secondary"
          color="black"
          size="s"
          onClick={formInstance.handleSubmit(onSubmit)}
        >
          Следующий пассажир
        </Button>
      </StyledBottom>
    </StyledUserInfo>
  );
};

export { UserInfo };
