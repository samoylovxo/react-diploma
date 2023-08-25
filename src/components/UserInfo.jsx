import React, { useContext } from "react";
import { Space, Radio } from "antd";
import styled from "styled-components";
import { Select } from "components/common/Select";
import { Input } from "components/common/Input";
import { Datepicker } from "components/common/Datepicker";
import { Checkbox } from "components/common/Checkbox";
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
  const { name, userNumber = 1, showButton = true, onChange, onSubmit } = props;

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
          name={`${name}.is_adult`}
          value={
            formInstance.watch(`${name}.is_adult`) || USER_YEARS_OPTIONS[0]
          }
          errors={formInstance?.formState?.errors}
          options={USER_YEARS_OPTIONS}
          showIcon={false}
          onChange={(value) => {
            if (onChange) onChange({ is_adult: value });
          }}
        />

        <Space size={24}>
          <Input
            name={`${name}.last_name`}
            label="Фамилия"
            placeholder="Введите фамилию"
            value={formInstance.watch(`${name}.last_name`)}
            register={formInstance.register(`${name}.last_name`, REQUIRED)}
            errors={formInstance?.formState?.errors}
            onChange={(value) => {
              if (value.trim() !== "")
                formInstance.clearErrors(`${name}.last_name`);

              if (onChange) onChange({ last_name: value });
            }}
          />
          <Input
            name={`${name}.first_name`}
            label="Имя"
            placeholder="Введите имя"
            value={formInstance.watch(`${name}.first_name`)}
            register={formInstance.register(`${name}.first_name`, REQUIRED)}
            errors={formInstance?.formState?.errors}
            onChange={(value) => {
              if (value.trim() !== "")
                formInstance.clearErrors(`${name}.first_name`);

              if (onChange) onChange({ first_name: value });
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

        <StyledSpace size={24} align="end">
          <Select
            name={`${name}.document_type`}
            value={
              formInstance.watch(`${name}.document_type`) || DOC_TYPE_OPTIONS[0]
            }
            errors={formInstance?.formState?.errors}
            options={DOC_TYPE_OPTIONS}
            showIcon={false}
            onChange={(value) => {
              if (onChange) onChange({ document_type: value });
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

      {showButton && (
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
      )}
    </StyledUserInfo>
  );
};

export { UserInfo };
