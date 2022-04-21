import styled from "styled-components";

const Input = styled.input`
  width: 350px;
  height: 58px;
  margin-bottom: 13px;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #C4C4C4;

  font-weight: 500;
  font-family: "Poppins";
  font-size: 16px;
  line-height: 24px;

  pointer-events: ${(props) => (props.disabled ? "none" : "all")};

  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  color: ${(props) => (props.disabled ? "#AFAFAF" : "#000000")};
  background-color: #fff;
  

  &::placeholder {
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6);
    letter-spacing: 0.15px;
  }

  &:focus {
    outline: none;
  }
`;

export default Input;
