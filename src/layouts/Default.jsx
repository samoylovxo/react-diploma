import React from "react";
import { Input, Button } from "antd";
import { Container } from "components/Container";
import { Logo } from "components/Logo";
import { REQUIRED } from "utils/consts";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import styled from "styled-components";

const CONTACTS = [
  {
    icon: "",
    text: "8 (800) 000 00 00",
  },
  {
    icon: "",
    text: "inbox@mail.ru",
  },
  {
    icon: "",
    text: "tu.train.tickets",
  },
  {
    icon: "",
    text: "г. Москва ул. Московская 27-35 555 555",
  },
];
const SOCIALS = [
  {
    icon: "",
  },
  {
    icon: "",
  },
  {
    icon: "",
  },
  {
    icon: "",
  },
  {
    icon: "",
  },
];

const StyledDefault = styled.div`
  color: #ffffff;
`;

const StyledContent = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
`;

const StyledFooter = styled.div`
  background-color: #2d2b2f;
`;

const StyledFooterTop = styled.div`
  padding: 50px 80px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

const StyledFooterBottom = styled.div`
  padding: 24px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid #e5e5e5;
`;

const StyledMenu = styled.div`
  display: grid;
  row-gap: 32px;
`;

const StyledSub = styled.div`
  display: grid;
  row-gap: 32px;
  align-content: start;
`;

const StyledTitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
  color: #ffffff;
`;

const StyledContact = styled.h2`
  color: #e5e5e5;
  font-size: 24px;
  font-weight: 400;
`;

const StyledInputWrapper = styled.div`
  position: relative;

  display: grid;
  row-gap: 12px;
`;

const StyledInput = styled(Input)`
  height: 60px;
`;

const StyledInputLabel = styled.div`
  color: #e5e5e5;
  font-size: 24px;
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 168px;
  column-gap: 32px;
  align-items: end;
`;

const StyledCopyright = styled.p`
  font-size: 24px;
  font-weight: 300;
  color: #e5e5e5;
`;

const StyledError = styled.p`
  position: absolute;
  bottom: -24px;
  left: 0;

  font-size: 12px;
  color: #cc4343;
`;

const StyledButton = styled(Button)`
  height: 60px;
`;

const Default = (props) => {
  const { children } = props;

  const form = useForm({
    mode: "onSubmit",
  });

  return (
    <StyledDefault>
      <StyledContent>{children}</StyledContent>

      <StyledFooter>
        <Container>
          <StyledFooterTop>
            <StyledMenu>
              <StyledTitle>Свяжитесь с нами</StyledTitle>
              {CONTACTS.map((social) => {
                const { icon, text } = social;

                return <StyledContact>{text}</StyledContact>;
              })}
            </StyledMenu>
            <StyledSub>
              <StyledTitle>Подписка</StyledTitle>

              <StyledForm
                onSubmit={form.handleSubmit((data) => {
                  console.log("data", data);
                })}
              >
                <StyledInputWrapper>
                  <StyledInputLabel>Будьте в курсе событий</StyledInputLabel>
                  <StyledInput
                    placeholder="e-mail"
                    {...form.register("email", REQUIRED)}
                    onChange={({ target: { value } }) => {
                      if (value.trim() !== "") form.clearErrors("email");

                      form.setValue("email", value, {
                        shouldDirty: true,
                        shouldValidate: true,
                      });
                    }}
                  />

                  <ErrorMessage
                    errors={form.formState.errors}
                    name="email"
                    render={({ message }) => (
                      <StyledError>{message}</StyledError>
                    )}
                  />
                </StyledInputWrapper>

                <StyledButton htmlType="submit">Отправить</StyledButton>
              </StyledForm>
            </StyledSub>
          </StyledFooterTop>
          <StyledFooterBottom>
            <Logo />
            <StyledCopyright>2018 WEB</StyledCopyright>
          </StyledFooterBottom>
        </Container>
      </StyledFooter>
    </StyledDefault>
  );
};

export { Default };
