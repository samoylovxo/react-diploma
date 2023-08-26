import React, { useContext } from "react";
import styled from "styled-components";
import { Default } from "layouts/Default";
import { useNavigate } from "react-router-dom";
import { ContextTravel } from "hooks/useTravel";
import { getRandomNumber } from "utils/utils";
import { Hero } from "components/home/Hero";
import { Container } from "components/Container";
import { Button } from "components/common/Button";
import { InfoBlock } from "components/InfoBlock";
import {
  DesktopOutlined,
  SnippetsFilled,
  UserOutlined,
} from "@ant-design/icons";

const BLOCKS = [
  {
    icon: <DesktopOutlined style={{ fontSize: "80px", color: "#ffffff" }} />,
    text: "билеты будут отправлены на ваш e-mail",
  },
  {
    icon: <SnippetsFilled style={{ fontSize: "80px", color: "#ffffff" }} />,
    text: "распечатайте и сохраняйте билеты до даты поездки",
  },
  {
    icon: <UserOutlined style={{ fontSize: "80px", color: "#ffffff" }} />,
    text: "предьявите распечатанные билеты при посадке",
  },
];

const StyledCheckoutResult = styled.div`
  min-height: 1000px;
`;

const StyledResult = styled.div`
  border: 1px solid #c4c4c4;

  background: #fff;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  transform: translateY(-180px);
`;

const StyledResultTop = styled.div`
  padding: 48px 80px;

  border-bottom: 1px solid #928f94;
`;

const StyledTitle = styled.h2`
  color: #3e3c41;
  font-size: 36px;
  font-weight: 700;
`;

const StyledResultInfo = styled.div`
  padding: 40px 240px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;

  background: #f4f3f6;
`;

const StyledResultContent = styled.div`
  padding: 98px 200px;

  display: grid;
  gap: 48px;
`;

const StyledName = styled.h3`
  color: #292929;
  font-size: 36px;
  font-weight: 700;
`;

const StyledText = styled.p`
  color: #292929;
  font-size: 24px;
  font-weight: 400;
`;

const StyledMessage = styled.p`
  color: #292929;
  font-size: 24px;
  font-weight: 700;
`;

const StyledResultBottom = styled.div`
  padding: 48px 78px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: rgba(255, 168, 0, 0.88);
`;

const StyledEstimate = styled.div`
  color: #292929;
  font-size: 24px;
`;

const CheckoutResult = () => {
  const navigate = useNavigate();

  const {
    state: { formInstance },
  } = useContext(ContextTravel);

  const user = formInstance.getValues("user");
  const userName = `${user?.first_name} ${user?.patronymic}`;

  const handleMenuItemClick = () => {
    navigate("/");
  };

  return (
    <Default showMenu={true} onMenuItemClick={handleMenuItemClick}>
      <StyledCheckoutResult>
        <Hero
          title="Благодарим Вас за заказ!"
          view="secondary"
          hideForm={true}
        />

        <Container>
          <StyledResult>
            <StyledResultTop>
              <StyledTitle>№Заказа {getRandomNumber(200)}АА</StyledTitle>
            </StyledResultTop>

            <StyledResultInfo>
              {BLOCKS.map((block, index) => {
                return (
                  <InfoBlock
                    key={index}
                    {...block}
                    iconColor="#FFB628C9"
                    textColor="#292929"
                  />
                );
              })}
            </StyledResultInfo>

            <StyledResultContent>
              <StyledName>{userName}!</StyledName>
              <StyledText>
                Ваш заказ успешно оформлен. В ближайшее время с вами свяжется
                наш оператор для подтверждения.
              </StyledText>
              <StyledMessage>
                Благодарим Вас за оказанное доверие и желаем приятного
                путешествия!
              </StyledMessage>
            </StyledResultContent>

            <StyledResultBottom>
              <StyledEstimate>Оценить сервис</StyledEstimate>

              <Button
                view="secondary"
                color="black"
                onClick={() => {
                  navigate("/");
                  formInstance.reset({});
                }}
              >
                вернуться на главную
              </Button>
            </StyledResultBottom>
          </StyledResult>
        </Container>
      </StyledCheckoutResult>
    </Default>
  );
};

export { CheckoutResult };
