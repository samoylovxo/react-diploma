import styled, { css } from "styled-components";

const Button = styled.button`
  width: ${({ isBlock }) => (isBlock ? "100%" : "max-content")};
  height: 60px;
  padding: 16px;

  border: 1px solid transparent;
  border-radius: 5px;

  text-align: center;
  font-size: 24px;
  font-weight: ${({ weight }) => weight};

  transition: background-color 0.4s, border-color 0.4s, color 0.4s,
    box-shadow 0.4s;
  cursor: pointer;

  ${({ view }) =>
    view === "secondary"
      ? css`
          border-color: #ffffff;
          background-color: transparent;

          color: #ffffff;

          &:hover {
            border-color: #ffca62;
            background-color: #ffca62;

            color: #2d2b2f;
          }

          &:active {
            border-color: #ffffff;
            background-color: #ffffff;

            color: #2d2b2f;
          }
        `
      : css`
          border-color: ##ffa800;
          background-color: #ffa800;

          color: #292929;

          &:hover {
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          }

          &:active {
            border-color: #ffa800;
            background-color: #ffffff;

            color: #ffa800;

            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          }
        `}
`;

Button.defaultProps = {
  view: "primary", // 'primary' | 'secondary'
  isBlock: false,
  weight: 400,
};

export { Button };