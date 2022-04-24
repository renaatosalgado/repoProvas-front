import {
  Container,
  Form,
  Input,
  Button,
  StyledLink,
  Title,
} from "../../components/Form";

import { ThreeDots } from "react-loader-spinner";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import LogoContainer from "../../components/LogoContainer";

import Swal from "sweetalert2";
import * as api from "../../services/api";
import useAuth from "../../hooks/useAuth";

export default function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleChange(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    const promise = api.login({ ...loginData });
    promise
      .then((response) => {
        setIsLoading(false);

        login(response.data);
        navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);

        if (error.response.status === 422) {
          setLoginData({
            email: "",
            password: "",
          });
          return Swal.fire({
            icon: "error",
            title: "Falha no login!",
            text: "A senha deve ter no mínimo 6 caracteres e o e-mail deve ser válido.",
          });
        }

        if (error.response.status === 401) {
          setLoginData({
            email: "",
            password: "",
          });
          return Swal.fire({
            icon: "error",
            title: "Falha no login!",
            text: "E-mail e/ou senha incorretos.",
          });
        }
      });
  }

  return (
    <>
      <LogoContainer>
        <img
          src={logo}
          alt="repo-provas-logo-png"
          onClick={() => navigate("/")}
        />
      </LogoContainer>
      <Container>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={loginData.email}
            disabled={isLoading}
            required
          ></Input>
          <Input
            type="password"
            placeholder="Senha"
            name="password"
            onChange={handleChange}
            value={loginData.password}
            disabled={isLoading}
            required
          ></Input>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <ThreeDots color="#FFFFFF" height={50} width={50} />
            ) : (
              "ENTRAR"
            )}
          </Button>
        </Form>

        <StyledLink to="/sign-up">
          <span>Primeira vez?</span>
          <span>Cadastre-se!</span>
        </StyledLink>
      </Container>
    </>
  );
}
