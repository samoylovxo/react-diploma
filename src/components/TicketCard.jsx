import React, { useMemo } from "react";
import styled from "styled-components";
import { SwapRightOutlined } from "@ant-design/icons";
import { Button } from "components/common/Button";
import { getTimeFromTimestamp, getMinNumber } from "utils/utils";

const StyledTicketCard = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;

  border: 1px solid #c4c4c4;
  background-color: #ffffff;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.3);
`;

const StyledContentLeft = styled.div`
  padding: 24px;

  background-color: #e4e0e9;
`;

const StyledIcon = styled.div`
  font-size: 140px;
`;

const StyledName = styled.h3`
  margin-bottom: 16px;
  
  color: #3e3c41;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

const StyledPath = styled.span`
  color: #292929;
  font-size: 16px;
  font-weight: 400;
`;

const StyledContentRight = styled.div`
  padding: 40px 40px 20px;

  display: grid;
  grid-template-columns: 1fr 280px;
`;

const StyledTimes = styled.div``;

const StyledTime = styled.div`
  display: grid;
  grid-template-columns: 1fr 60px 1fr;
  gap: 40px;
`;

const StyledTimeContent = styled.div``;

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

const StyledTimeSeparator = styled.div``;

const StyledTimeSeparatorText = styled.div`
  color: #c4c4c4;
  font-size: 18px;
`;

const StyledSeatTypes = styled.div`
  display: grid;
  grid-template-rows: 1fr max-content;
`;

const StyledSeatTypeList = styled.div``;

const StyledSeatType = styled.div`
  display: grid;
  grid-template-columns: 1fr 60px 1fr;
  align-items: baseline;
  gap: 16px;
`;

const StyledSeatTypeName = styled.div`
  color: #3e3c41;
  font-size: 16px;
`;

const StyledSeatTypeCount = styled.div`
  color: #ffa800;
  font-size: 16px;
  font-weight: 500;
`;

const StyledSeatTypePrice = styled.div`
  color: #928f94;
  font-size: 16px;

  white-space: nowrap;

  span {
    color: #2d2b2f;
    font-size: 24px;
    font-weight: 700;
  }
`;

const StyledServices = styled.div``;

const path = ["Адлер", "Москва", "Санкт-Петербург"];

const getMinPrice = (priceObj) =>
  priceObj ? getMinNumber(Object.values(priceObj)) : "";

const TicketCard = (props) => {
  const { route, onClick } = props;

  const {
    departure: {
      from,
      to,
      train,
      duration,
      available_seats_info: availableSeatsInfo,
      price_info: priceInfo,
      have_air_conditioning: haveAirConditioning = false,
      have_first_class: haveFirstClass = false,
      have_second_class: haveSecondClass = false,
      have_third_class: haveThirdClass = false,
      have_fourth_class: haveFourthClass = false,
      have_wifi: haveWifi = false,
      is_express: isExpress = false,
    },
  } = route;

  const fromTime = getTimeFromTimestamp(from.datetime);
  const toTime = getTimeFromTimestamp(to.datetime);
  const durationTime = getTimeFromTimestamp(duration);

  const seatTypes = useMemo(() => {
    const types = [];

    const {
      first: firstSeatsCount,
      second: secondSeatsCount,
      third: thirdSeatsCount,
      fourth: fourthSeatsCount,
    } = availableSeatsInfo;
    const {
      first: firstPrice,
      second: secondPrice,
      third: thirdPrice,
      fourth: fourthPrice,
    } = priceInfo;

    const minFirstPrice = getMinPrice(firstPrice);
    const minSecondPrice = getMinPrice(secondPrice);
    const minThirdPrice = getMinPrice(thirdPrice);
    const minFourthPrice = getMinPrice(fourthPrice);

    if (haveFirstClass)
      types.push({
        content: (
          <StyledSeatType>
            <StyledSeatTypeName>Сидячий</StyledSeatTypeName>
            <StyledSeatTypeCount>{firstSeatsCount}</StyledSeatTypeCount>
            <StyledSeatTypePrice>
              от <span>{minFirstPrice}</span> Р
            </StyledSeatTypePrice>
          </StyledSeatType>
        ),
      });

    if (haveSecondClass)
      types.push({
        content: (
          <StyledSeatType>
            <StyledSeatTypeName>Плацкарт</StyledSeatTypeName>
            <StyledSeatTypeCount>{secondSeatsCount}</StyledSeatTypeCount>
            <StyledSeatTypePrice>
              от <span>{minSecondPrice}</span> Р
            </StyledSeatTypePrice>
          </StyledSeatType>
        ),
      });

    if (haveThirdClass)
      types.push({
        content: (
          <StyledSeatType>
            <StyledSeatTypeName>Купе</StyledSeatTypeName>
            <StyledSeatTypeCount>{thirdSeatsCount}</StyledSeatTypeCount>
            <StyledSeatTypePrice>
              от <span>{minThirdPrice}</span> Р
            </StyledSeatTypePrice>
          </StyledSeatType>
        ),
      });

    if (haveFourthClass)
      types.push({
        content: (
          <StyledSeatType>
            <StyledSeatTypeName>Люкс</StyledSeatTypeName>
            <StyledSeatTypeCount>{fourthSeatsCount}</StyledSeatTypeCount>
            <StyledSeatTypePrice>
              от <span>{minFourthPrice}</span> Р
            </StyledSeatTypePrice>
          </StyledSeatType>
        ),
      });

    return types;
  }, [
    priceInfo,
    availableSeatsInfo,
    haveFirstClass,
    haveFourthClass,
    haveSecondClass,
    haveThirdClass,
  ]);

  return (
    <StyledTicketCard>
      <StyledContentLeft>
        <StyledIcon>
          <SwapRightOutlined />
        </StyledIcon>

        <StyledName>{train.name}</StyledName>

        <div>
          {path.map((item, index) => (
            <StyledPath key={index}>
              {index !== 0 && " >"} {item}
            </StyledPath>
          ))}
        </div>
      </StyledContentLeft>

      <StyledContentRight>
        <StyledTimes>
          <StyledTime>
            <StyledTimeContent>
              <StyledTimeTitle>{fromTime}</StyledTimeTitle>
              <StyledTimeFrom>{from.city.name}</StyledTimeFrom>
              <StyledTimeFromDesc>
                {from.railway_station_name}
              </StyledTimeFromDesc>
            </StyledTimeContent>

            <StyledTimeSeparator>
              <StyledTimeSeparatorText>{durationTime}</StyledTimeSeparatorText>
            </StyledTimeSeparator>

            <StyledTimeContent>
              <StyledTimeTitle>{toTime}</StyledTimeTitle>
              <StyledTimeFrom>{to.city.name}</StyledTimeFrom>
              <StyledTimeFromDesc>{to.railway_station_name}</StyledTimeFromDesc>
            </StyledTimeContent>
          </StyledTime>
        </StyledTimes>

        <StyledSeatTypes>
          <StyledSeatTypeList>
          {seatTypes.map((type) => type.content)}
          </StyledSeatTypeList>

          <StyledServices></StyledServices>
          <Button size="s" isBlock={true} onClick={onClick}>
            Выбрать места
          </Button>
        </StyledSeatTypes>
      </StyledContentRight>
    </StyledTicketCard>
  );
};

export { TicketCard };
