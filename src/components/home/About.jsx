import { Container } from "components/Container";
import React from "react";
import styled from "styled-components";

const DESCRIPTIONS = [
  {
    text: "Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем все больше людей заказывают жд билеты через интернет.",
  },
  {
    text: "Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? Мы расскажем о преимуществах заказа через интернет.",
  },
  {
    text: "Покупать жд билеты дешево можно за 90 суток до отправления поезда. Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.",
    isBold: true,
  },
];

const StyledAbout = styled.section`
  padding: 144px 0 120px 0;

  background-color: #ffffff;

  ${Container} {
    display: grid;
    gap: 30px;
  }
`;

const StyledTitle = styled.h2`
  color: #292929;
  font-size: 36px;
  font-weight: 500;
  text-transform: uppercase;
`;

const StyledContent = styled.div`
  padding-left: 28px;

  position: relative;

  display: grid;
  gap: 24px;

  &::after {
    content: "";

    width: 9px;

    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;

    background-color: #ffa800;
  }
`;

const StyledDescription = styled.p`
  color: #292929;
  font-size: 24px;
  font-weight: ${({ isBold }) => (isBold ? 700 : 400)};
`;

const About = (props) => {
  const { id } = props;

  return (
    <StyledAbout id={id}>
      <Container>
        <StyledTitle>О нас</StyledTitle>

        <StyledContent>
          {DESCRIPTIONS.map((description, index) => {
            const { text, isBold = false } = description;

            return (
              <StyledDescription key={index} isBold={isBold}>
                {text}
              </StyledDescription>
            );
          })}
        </StyledContent>
      </Container>
    </StyledAbout>
  );
};

export { About };
