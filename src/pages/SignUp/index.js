import {
    Container,
    Form,
    Input,
    Button,
    StyledLink,
    Title,
  } from "../../components/Form";
  
  import { ThreeDots } from "react-loader-spinner";
  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import logo from "../../assets/logo.png";
  import LogoContainer from "../../components/LogoContainer";
  
  import Swal from "sweetalert2";
  import * as api from "../../services/api";
  
  export default function SignUp() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [signUpData, setSignUpData] = useState({
      email: "",
      password: "",
      confirm_password: "",
    });
  
    function handleChange(e) {
      setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    }
  
    async function handleSubmit(e) {
      e.preventDefault();
  
      setIsLoading(true);
  
      if (signUpData.password !== signUpData.confirm_password) {
        setSignUpData({ ...signUpData, password: "", confirm_password: "" });
  
        setIsLoading(false);
  
        return Swal.fire({
          icon: "error",
          title: "Cadastro não realizado!",
          text: "As senhas inseridas não são correspondentes.",
        });
      } else delete signUpData.confirm_password;
  
      try {
        await api.signUp({ ...signUpData });
  
        setIsLoading(false);
        navigate("/login");
      } catch (error) {
        setIsLoading(false);
        if (error.response.status === 409) {
          setSignUpData({ ...signUpData, email: "" });
          return Swal.fire({
            icon: "error",
            title: "Cadastro não realizado!",
            text: "E-mail já cadastrado.",
          });
        }
  
        if (error.response.status === 422) {
          setSignUpData({
            email: "",
            password: "",
            confirm_password: "",
          });
          return Swal.fire({
            icon: "error",
            title: "Cadastro não realizado!",
            text: "A senha deve ter no mínimo 6 caracteres e o e-mail deve ser válido.",
          });
        }
  
        setSignUpData({
          email: "",
          password: "",
          confirm_password: "",
        });
      }
    }
    return (
      <>
        <LogoContainer>
          <img src={logo} alt="repo-provas-logo-png" onClick={() => navigate("/")} />
        </LogoContainer>
        <Container>
          <Title>Cadastro</Title>
  
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={signUpData.email}
              disabled={isLoading}
              required
            />
            <Input
              type="password"
              placeholder="Senha"
              name="password"
              onChange={handleChange}
              value={signUpData.password}
              disabled={isLoading}
              required
            />
            <Input
              type="password"
              placeholder="Confirme sua senha"
              name="confirm_password"
              onChange={handleChange}
              value={signUpData.confirm_password}
              disabled={isLoading}
              required
            />
  
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <ThreeDots color="#FFFFFF" height={50} width={50} />
              ) : (
                "CADASTRAR"
              )}
            </Button>
          </Form>
  
          <StyledLink to="/login">
            <span> Já tem uma conta?</span>
            <span>Entre agora!</span>
          </StyledLink>
        </Container>
      </>
    );
  }
  