import styled from "styled-components";

const Button = styled.button`
  width: 350px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);

  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? "none" : "all")};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};

  font-size: 20px;
  font-family: "Roboto";
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.4px;

  background-color: #1976d2;
  color: #fff;

  &:hover {
    filter: brightness(120%);
  }
`;

export default Button;
