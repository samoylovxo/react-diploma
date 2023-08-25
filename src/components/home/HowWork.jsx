import React from "react";
import { Button } from "components/common/Button";
import {
  DesktopOutlined,
  HomeOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Container } from "components/Container";
import { InfoBlock } from "components/InfoBlock";
import styled from "styled-components";

const BLOCKS = [
  {
    icon: <DesktopOutlined style={{ fontSize: "80px", color: "#383838" }} />,
    text: "Удобный заказ на сайте",
  },
  {
    icon: <HomeOutlined style={{ fontSize: "80px", color: "#383838" }} />,
    text: "Нет необходимости ехать в офис",
  },
  {
    icon: <GlobalOutlined style={{ fontSize: "80px", color: "#383838" }} />,
    text: "Огромный выбор направлений",
  },
];

const StyledHowWork = styled.section`
  padding: 60px 0 80px 0;

  background-image: url(/images/how-work-bg.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #ffd600;

  ${Container} {
    display: grid;
    gap: 100px;
  }
`;

const StyledTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTitle = styled.h2`
  color: #fff;
  font-size: 36px;
  font-weight: 500;
  text-transform: uppercase;
`;

const StyledBlocks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;

const HowWork = (props) => {
  const { id } = props;

  return (
    <StyledHowWork id={id}>
      <Container>
        <StyledTop>
          <StyledTitle>Как это работает</StyledTitle>

          <Button view="secondary">Узнать больше</Button>
        </StyledTop>

        <StyledBlocks>
          {BLOCKS.map((block, index) => {
            return <InfoBlock key={index} {...block} />;
          })}
        </StyledBlocks>
      </Container>
    </StyledHowWork>
  );
};

export { HowWork };
