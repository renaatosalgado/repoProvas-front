import React from "react";
import { Container, Top, Logo, LogoutIcon, Bottom, SearchBar } from "./style";
import LogoutPng from "../../assets/logoutIcon.png";
import MainLogo from "../../assets/logo.png"

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo>
        <img src={MainLogo} alt="logout-icon.png" />
        </Logo>
        <LogoutIcon>
          <img src={LogoutPng} alt="logout-icon.png" />
        </LogoutIcon>
      </Top>
      <Bottom>
        <SearchBar placeholder="Pesquise por disciplina"></SearchBar>
      </Bottom>
    </Container>
  );
}
