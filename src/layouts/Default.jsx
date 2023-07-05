import React from "react";
import { Container } from "components/Container";
import { Logo } from "components/Logo";
import { Input } from "components/Input";
import { useForm } from "react-hook-form";
import { Button } from "components/Button";
import { NavLink } from "react-router-dom";
import { REQUIRED } from "utils/consts";
import {
  PhoneFilled,
  MailOutlined,
  SkypeFilled,
  EnvironmentFilled,
  YoutubeFilled,
  LinkedinFilled,
  GoogleOutlined,
  FacebookFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const CONTACTS = [
  {
    icon: <PhoneFilled style={{ fontSize: "32px", color: "##E5E5E5" }} />,
    text: "8 (800) 000 00 00",
  },
  {
    icon: <MailOutlined style={{ fontSize: "32px", color: "##E5E5E5" }} />,
    text: "inbox@mail.ru",
  },
  {
    icon: <SkypeFilled style={{ fontSize: "32px", color: "##E5E5E5" }} />,
    text: "tu.train.tickets",
  },
  {
    icon: <EnvironmentFilled style={{ fontSize: "32px", color: "##E5E5E5" }} />,
    text: "г. Москва ул. Московская 27-35 555 555",
  },
];

const SOCIALS = [
  { icon: <YoutubeFilled style={{ fontSize: "32px", color: "##E5E5E5" }} /> },
  { icon: <LinkedinFilled style={{ fontSize: "32px", color: "##E5E5E5" }} /> },
  { icon: <GoogleOutlined style={{ fontSize: "32px", color: "##E5E5E5" }} /> },
  { icon: <FacebookFilled style={{ fontSize: "32px", color: "##E5E5E5" }} /> },
  { icon: <TwitterOutlined style={{ fontSize: "32px", color: "##E5E5E5" }} /> },
];

const MENU = [
  {
    path: "about",
    name: "О нас",
  },
  {
    path: "how-work",
    name: "Как это работает",
  },
  {
    path: "reviews",
    name: "Отзывы",
  },
  {
    path: "contacts",
    name: "Контакты",
  },
];

const StyledDefault = styled.div`
  position: relative;

  color: #ffffff;
`;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  background-color: rgba(0, 0, 0, 0.6);
`;

const StyledLogoWrapper = styled.div`
  padding: 16px 0;
`;

const StyledHeaderMenu = styled.ul`
  padding: 24px;

  background-color: #292929;

  ${Container} {
    display: grid;
    grid-auto-flow: column;
    column-gap: 84px;
    justify-content: start;
  }
`;

const StyledHeaderMenuItem = styled.li`
  font-size: 30px;
  font-weight: 300;
`;

const StyledFooter = styled.footer`
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

const StyledFooterLeft = styled.div`
  display: grid;
  row-gap: 32px;
`;

const StyledFooterRight = styled.div`
  display: grid;
  row-gap: 32px;
`;

const StyledSub = styled.div`
  display: grid;
  row-gap: 32px;
  align-content: start;
`;

const StyledSocials = styled.div`
  display: grid;
  row-gap: 32px;
  align-content: start;
`;

const StyledSocialList = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  gap: 32px;
`;

const StyledTitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
  color: #ffffff;
`;

const StyledContact = styled.p`
  display: grid;
  grid-auto-flow: column;
  gap: 20px;
  align-content: center;
  justify-content: start;

  color: #e5e5e5;
  font-size: 24px;
  font-weight: 400;
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

const Default = (props) => {
  const { children } = props;

  const form = useForm({
    mode: "onSubmit",
  });

  return (
    <StyledDefault>
      <StyledHeader>
        <Container>
          <StyledLogoWrapper>
            <Logo />
          </StyledLogoWrapper>
        </Container>

        <StyledHeaderMenu>
          <Container>
            {MENU.map((item, index) => {
              const { path, name } = item;

              return (
                <NavLink to={`/#${path}`} key={index}>
                  <StyledHeaderMenuItem>{name}</StyledHeaderMenuItem>
                </NavLink>
              );
            })}
          </Container>
        </StyledHeaderMenu>
      </StyledHeader>

      {children}

      <StyledFooter>
        <Container>
          <StyledFooterTop>
            <StyledFooterLeft>
              <StyledTitle>Свяжитесь с нами</StyledTitle>
              {CONTACTS.map((social, index) => {
                const { icon, text } = social;

                return (
                  <StyledContact key={index}>
                    {icon} <span>{text}</span>
                  </StyledContact>
                );
              })}
            </StyledFooterLeft>

            <StyledFooterRight>
              <StyledSub>
                <StyledTitle>Подписка</StyledTitle>

                <StyledForm
                  onSubmit={form.handleSubmit((data) => {
                    console.log("data", data);
                  })}
                >
                  <Input
                    name="email"
                    label="Будьте в курсе событий"
                    placeholder="e-mail"
                    register={form.register("email", REQUIRED)}
                    errors={form.formState.errors}
                    onChange={(value) => {
                      if (value.trim() !== "") form.clearErrors("email");

                      form.setValue("email", value, {
                        shouldDirty: true,
                        shouldValidate: true,
                      });
                    }}
                  />

                  <Button type="submit" view="secondary">
                    Отправить
                  </Button>
                </StyledForm>
              </StyledSub>

              <StyledSocials>
                <StyledTitle>Подписывайтесь на нас</StyledTitle>

                <StyledSocialList>
                  {SOCIALS.map((social) => social.icon)}
                </StyledSocialList>
              </StyledSocials>
            </StyledFooterRight>
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
