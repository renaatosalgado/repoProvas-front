import styled from "styled-components";

const Container = styled.header`
  width: 100vw;
  height: 200px;

  border-bottom: 1px solid #c4c4c4;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  font-family: "Poppins";
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: calc(100vw - 30px);
`;

const Logo = styled.div`
  cursor: pointer;
`;

const LogoutIcon = styled.div`
  cursor: pointer;
`;
const Bottom = styled.div``;

const SearchBar = styled.input`
  width: 440px;
  height: 50px;

  padding-left: 10px;

  font-family: "Poppins";
  font-size: 16px;
  letter-spacing: 0.15px;
  line-height: 24px;

  border: 1px solid #c4c4c4;
  border-radius: 5px;

  &::placeholder {
    font-family: "Poppins";
    font-size: 16px;
    letter-spacing: 0.15px;
    line-height: 24px;
    font-weight: 500;
  }

  &:focus {
    outline: none;
  }
`;

export { Container, Top, Logo, LogoutIcon, Bottom, SearchBar };
