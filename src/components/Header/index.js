import React from "react";
import { Container, Top, Logo, LogoutIcon, Bottom, SearchBar } from "./style";
import LogoutPng from "../../assets/logoutIcon.png";
import MainLogo from "../../assets/logo.png";
import * as api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { auth } = useAuth();
  const navigate = useNavigate();

  async function logout(token) {
    await api.logout(token);
    localStorage.clear();
    navigate("/login");
  }

  return (
    <Container>
      <Top>
        <Logo>
          <img src={MainLogo} alt="logout-icon.png" />
        </Logo>
        <LogoutIcon onClick={() => logout(auth)}>
          <img src={LogoutPng} alt="logout-icon.png" />
        </LogoutIcon>
      </Top>
      <Bottom>
        <SearchBar placeholder="Pesquise por disciplina"></SearchBar>
      </Bottom>
    </Container>
  );
}
