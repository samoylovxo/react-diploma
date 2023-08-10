import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { Button } from "./common/Button";
import { getTimeFromTimestamp } from "utils/utils";
import { ContextTravel } from "hooks/useTravel";
import { PATH } from "utils/constants";

const StyledSeatsCard = styled.div`
  border: 1px solid #c4c4c4;
  background-color: #ffffff;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.3);
`;

const StyledButtons = styled.div`
  padding: 32px 20px;

  display: grid;
  grid-auto-flow: column;
  align-items: center;
  column-gap: 12px;
  justify-content: start;
`;

const StyledTrainInfo = styled.div`
  padding: 16px 32px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px;
  align-items: center;

  background-color: #f7f6f6;
`;

const StyledInfoItem = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: 400;
`;

const StyledTrainName = styled.h3`
  color: #3e3c41;
  font-size: 24px;
  font-weight: 700;
`;

const StyledTrainPath = styled.span`
  color: #292929;
  font-size: 16px;
  font-weight: 400;
`;

const StyledTickets = styled.div`
  padding: 40px 20px;

  display: grid;
  row-gap: 14px;
`;

const StyledTitle = styled.div`
  color: #292929;
  font-size: 30px;
  font-weight: 700;

  /* margin: 0 -20px; */
`;

const StyledPlaceType = styled.div`
  padding: 40px 20px;

  display: grid;
  row-gap: 14px;
`;

const StyledTimeTitle = styled.div`
  color: #000;
  font-size: 24px;
  font-weight: 700;
`;

const StyledTimeFrom = styled.div`
  color: #292929;
  font-size: 18px;
`;

const StyledTimeFromDesc = styled.div`
  color: #928f94;
  font-size: 16px;
`;

const StyledSeatTypeList = styled.div`
  padding: 16px 0;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px;
  align-items: center;
`;

const StyledSeatType = styled.div`
  font-size: 24px;

  ${({ isActive }) =>
    isActive
      ? css`
          color: #ffa800;
          font-weight: 700;
        `
      : css`
          color: #928f94;
          font-weight: 400;
        `};
`;

const StyledSeatItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const StyledSeatItem = styled.button`
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #292929;
  border-radius: 4px;

  background-color: ${({ isSelected }) => (isSelected ? "#FFA800" : "#ffffff")};

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}
`;

const StyledSeatInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
  align-items: center;
`;

const StyledSeatInfo = styled.div`
  display: grid;
  row-gap: 20px;
`;

const StyledAllSeatCount = styled.p`
  color: #928f94;
  font-size: 18px;
  font-weight: 400;

  span {
    color: #000;
  }
`;

const StyledSeatVariant = styled.p`
  color: #000;
  font-size: 24px;
  font-weight: 400;

  span {
    font-weight: 700;
  }
`;

const StyledSeatPrice = styled.p`
  color: #000;
  font-size: 24px;
  font-weight: 700;

  span {
    color: #928f94;
    font-weight: 400;
  }
`;

const StyledSeparator = styled.div`
  height: 4px;
  margin: 0 -20px;

  background-color: #ffa800;
`;

const SEAT_TYPES = [
  { name: "Сидячий", value: "first" },
  { name: "Плацкарт", value: "second" },
  { name: "Купе", value: "third" },
  { name: "Люкс", value: "fourth" },
];

const SeatsCard = (props) => {
  const { seat, route, onBackClick } = props;

  const {
    coach: {
      _id: coachId,
      name,
      class_type: classType,
      have_wifi: haveWifi = false,
      have_air_conditioning: haveAirConditioning = false,
      price,
      top_price: topPrice,
      bottom_price: bottomPrice,
      side_price: sidePrice,
      linens_price: linensPrice,
      wifi_price: wifiPrice,
      is_linens_included: isLinensIncluded = false,
      available_seats: availableSeatsCount,
    },
    seats: seatItems,
  } = seat;

  const {
    departure: { from, to, duration, train },
  } = route;

  const {
    state: { formInstance },
    actions: { handleFormSetValue },
  } = useContext(ContextTravel);

  const fromTime = getTimeFromTimestamp(from.datetime);
  const toTime = getTimeFromTimestamp(to.datetime);
  const durationTime = getTimeFromTimestamp(duration);

  return (
    <StyledSeatsCard>
      <StyledButtons>
        <Button disabled={true}>{">"}</Button>
        <Button view="secondary" color="black" onClick={onBackClick}>
          Выбрать другой поезд
        </Button>
      </StyledButtons>

      <StyledTrainInfo>
        <StyledInfoItem>
          <StyledTrainName>
            {train.name} {`(${name})`}
          </StyledTrainName>

          <div>
            {PATH.map((item, index) => (
              <StyledTrainPath key={index}>
                {index !== 0 && " >"} {item}
              </StyledTrainPath>
            ))}
          </div>
        </StyledInfoItem>

        <StyledInfoItem>
          <StyledTimeTitle>{fromTime}</StyledTimeTitle>
          <StyledTimeFrom>{from.city.name}</StyledTimeFrom>
          <StyledTimeFromDesc>{from.railway_station_name}</StyledTimeFromDesc>
        </StyledInfoItem>

        <StyledInfoItem>
          <StyledTimeTitle>{toTime}</StyledTimeTitle>
          <StyledTimeFrom>{to.city.name}</StyledTimeFrom>
          <StyledTimeFromDesc>{to.railway_station_name}</StyledTimeFromDesc>
        </StyledInfoItem>

        <StyledInfoItem>{durationTime} в пути</StyledInfoItem>
      </StyledTrainInfo>

      {/* <StyledTickets>
        <StyledTitle></StyledTitle>
      </StyledTickets> */}

      <StyledPlaceType>
        <StyledTitle>Тип вагона</StyledTitle>

        <StyledSeatTypeList>
          {SEAT_TYPES.map((type, index) => {
            const { name, value } = type;

            const isActive = value === classType;

            return (
              <StyledSeatType key={index} isActive={isActive}>
                {name}
              </StyledSeatType>
            );
          })}
        </StyledSeatTypeList>

        <StyledSeparator />

        <StyledSeatInfoWrapper>
          <StyledSeatInfo>
            <StyledAllSeatCount>
              Места <span>{availableSeatsCount}</span>
            </StyledAllSeatCount>
            <StyledSeatVariant>Верхние</StyledSeatVariant>
            <StyledSeatVariant>Нижние</StyledSeatVariant>
          </StyledSeatInfo>

          <StyledSeatInfo>
            <StyledAllSeatCount>Стоимость</StyledAllSeatCount>
            <StyledSeatPrice>
              {topPrice} <span>P</span>
            </StyledSeatPrice>
            <StyledSeatPrice>
              {bottomPrice} <span>P</span>
            </StyledSeatPrice>
          </StyledSeatInfo>
        </StyledSeatInfoWrapper>

        <StyledSeatItems>
          {seatItems.map((seat, index) => {
            const { index: number, available } = seat;

            const isSelected = (
              formInstance.watch("departure.seats") || []
            ).some(
              (selectedSeat) =>
                selectedSeat?.seat_number === number &&
                selectedSeat.coach_id === coachId
            );

            return (
              <StyledSeatItem
                key={index}
                disabled={!available}
                isSelected={isSelected}
                onClick={() => {
                  const currentSeats = [
                    ...(formInstance.watch("departure.seats") || []),
                  ];

                  handleFormSetValue(
                    "departure.seats",
                    isSelected
                      ? currentSeats.filter(
                          (selectedSeat) => selectedSeat.seat_number !== number
                        )
                      : [
                          ...currentSeats,
                          { coach_id: coachId, seat_number: number },
                        ]
                  );
                }}
              >
                {number}
              </StyledSeatItem>
            );
          })}
        </StyledSeatItems>
      </StyledPlaceType>
    </StyledSeatsCard>
  );
};

export { SeatsCard };
