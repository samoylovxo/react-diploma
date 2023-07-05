import { Container } from "components/Container";
import { User } from "components/User";
import React from "react";
import styled from "styled-components";

const REVIEWS = [
  {
    name: "Екатерина Вальнова",
    comment:
      "“Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.“",
    photo: "/images/review-user-1.png",
  },
  {
    name: "Евгений Стрыкало",
    comment:
      "“СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.“",
    photo: "/images/review-user-2.png",
  },
];

const StyledReviews = styled.section`
  padding: 144px 0 120px 0;

  background-color: #ffffff;

  ${Container} {
    display: grid;
    gap: 64px;
  }
`;

const StyledTitle = styled.div`
  color: #292929;
  font-size: 36px;
  font-weight: 500;
  text-transform: uppercase;
`;

const StyledReviewList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 85px;
`;

const Reviews = () => {
  return (
    <StyledReviews>
      <Container>
        <StyledTitle>Отзывы</StyledTitle>

        <StyledReviewList>
          {REVIEWS.map((review, index) => (
            <User key={index} {...review} />
          ))}
        </StyledReviewList>
      </Container>
    </StyledReviews>
  );
};

export { Reviews };
