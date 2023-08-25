import React, { useContext } from "react";
import styled from "styled-components";
import { ContextTravel } from "hooks/useTravel";
import { Space } from "antd";
import { Input } from "components/common/Input";
import { CardWithTitle } from "components/CardWithTitle";
import { Checkbox } from "components/common/Checkbox";
import { REQUIRED } from "utils/constants";

const StyledPersonalCard = styled.div`
  border: 1px solid #c4c4c4;

  background: #ffffff;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
`;

const StyledForm = styled.div`
  padding: 32px;

  display: grid;
  gap: 24px;
`;

const StyledPayVariant = styled.div`
  color: #292929;
  font-size: 24px;
  font-weight: 700;
`;

const PersonalCard = () => {
  const {
    state: { formInstance },
    actions: { handleFormSetValue },
  } = useContext(ContextTravel);

  return (
    <StyledPersonalCard>
      <CardWithTitle title="Персональные данные">
        <StyledForm>
          <Space size={24}>
            <Input
              name="user.first_name"
              label="Имя"
              placeholder="Введите имя"
              value={formInstance.watch("user.first_name")}
              register={formInstance.register("user.first_name", REQUIRED)}
              errors={formInstance?.formState?.errors}
              onChange={(value) => {
                if (value.trim() !== "")
                  formInstance.clearErrors("user.first_name");
                handleFormSetValue("user.first_name", value);
              }}
            />
            <Input
              name="user.last_name"
              label="Фамилия"
              placeholder="Введите фамилию"
              value={formInstance.watch("user.last_name")}
              register={formInstance.register("user.last_name", REQUIRED)}
              errors={formInstance?.formState?.errors}
              onChange={(value) => {
                if (value.trim() !== "")
                  formInstance.clearErrors("user.last_name");
                handleFormSetValue("user.last_name", value);
              }}
            />
            <Input
              name="user.patronymic"
              label="Отчество"
              placeholder="Введите отчество"
              value={formInstance.watch("user.patronymic")}
              register={formInstance.register("user.patronymic", REQUIRED)}
              errors={formInstance?.formState?.errors}
              onChange={(value) => {
                if (value.trim() !== "")
                  formInstance.clearErrors("user.patronymic");
                handleFormSetValue("user.patronymic", value);
              }}
            />
          </Space>

          <Input
            name="user.phone"
            label="Контактный телефон"
            placeholder="Введите телефон"
            value={formInstance.watch("user.phone")}
            register={formInstance.register("user.phone", REQUIRED)}
            errors={formInstance?.formState?.errors}
            onChange={(value) => {
              if (value.trim() !== "") formInstance.clearErrors("user.phone");
              handleFormSetValue("user.phone", value);
            }}
          />

          <Input
            name="user.email"
            label="E-mail"
            placeholder="Введите e-mail"
            value={formInstance.watch("user.email")}
            register={formInstance.register("user.email", REQUIRED)}
            errors={formInstance?.formState?.errors}
            onChange={(value) => {
              if (value.trim() !== "") formInstance.clearErrors("user.email");
              handleFormSetValue("user.email", value);
            }}
          />
        </StyledForm>
      </CardWithTitle>

      <CardWithTitle title="Способ оплаты">
        <StyledForm>
          <div>
            <Checkbox
              name="user.payment_method"
              checked={formInstance.watch("user.payment_method") === 'online'}
              register={formInstance.register("user.payment_method", REQUIRED)}
              errors={formInstance?.formState?.errors}
              onChange={(value) => {
                handleFormSetValue(
                  "user.payment_method",
                  value ? "online" : null
                );
              }}
            >
              Онлайн
            </Checkbox>
          </div>

          <Space size={48}>
            <StyledPayVariant>Банковской картой</StyledPayVariant>
            <StyledPayVariant>PayPal</StyledPayVariant>
            <StyledPayVariant>Visa QIWI Wallet</StyledPayVariant>
          </Space>

          <div>
            <Checkbox
              name="user.payment_method"
              checked={formInstance.watch("user.payment_method") === 'cash'}
              register={formInstance.register("user.payment_method", REQUIRED)}
              errors={formInstance?.formState?.errors}
              onChange={(value) => {
                handleFormSetValue(
                  "user.payment_method",
                  value ? "cash" : null
                );
              }}
            >
              Наличными
            </Checkbox>
          </div>
        </StyledForm>
      </CardWithTitle>
    </StyledPersonalCard>
  );
};

export { PersonalCard };
