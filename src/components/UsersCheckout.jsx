import React, { useContext, useMemo } from "react";
import styled from "styled-components";
import { ContextTravel } from "hooks/useTravel";
import { UserOutlined } from "@ant-design/icons";
import { CardEditable } from "components/CardEditable";

const StyledUsers = styled.div`
  display: grid;
  gap: 16px;

  border-right: 1px solid #e5e5e5;

  > :not(:first-child) {
    border-top: 1px solid #e5e5e5;
  }
`;

const StyledUser = styled.div`
  padding: 64px 40px;

  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 16px;
`;

const StyledUserLeft = styled.div`
  display: grid;
  gap: 16px;
  justify-content: center;
`;

const StyledUserIcon = styled.div`
  width: 64px;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  background: #ffa800;
`;

const StyledUserRight = styled.div`
  display: grid;
  gap: 4px;
`;

const StyledUserName = styled.div`
  color: #292929;
  font-size: 18px;
`;

const StyledUserDesc = styled.div`
  color: #928f94;
  font-size: 18px;
`;

const UsersCheckout = (props) => {
  const { onClick } = props;

  const {
    state: { formInstance },
  } = useContext(ContextTravel);

  const users = useMemo(
    () => formInstance.watch("departure.seats").map((seat) => seat.personInfo),
    [formInstance.watch("departure.seats")]
  );

  return (
    <CardEditable onClick={onClick}>
      <StyledUsers>
        {users.map((user, index) => {
          const {
            birthday,
            documentDataNumber,
            documentDataSerial,
            first_name,
            last_name,
            patronymic,
          } = user;

          return (
            <StyledUser key={index}>
              <StyledUserLeft>
                <StyledUserIcon>
                  <UserOutlined
                    style={{ fontSize: "40px", color: "#ffffff" }}
                  />
                </StyledUserIcon>
              </StyledUserLeft>
              <StyledUserRight>
                <StyledUserName>
                  {last_name} {first_name} {patronymic}
                </StyledUserName>
                <StyledUserDesc>
                  Дата рождения {new Date(birthday).toLocaleDateString()}
                </StyledUserDesc>
                <StyledUserDesc>
                  Паспорт РФ {documentDataSerial} {documentDataNumber}
                </StyledUserDesc>
              </StyledUserRight>
            </StyledUser>
          );
        })}
      </StyledUsers>
    </CardEditable>
  );
};

export { UsersCheckout };
