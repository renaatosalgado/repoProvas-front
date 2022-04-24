import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import TermsDisplay from "../../components/TermsDisplay";
import Swal from "sweetalert2";
import * as api from "../../services/api";
import useAuth from "../../hooks/useAuth";

export default function Home() {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth && auth !== "") {
      authValidation();
    } else {
      navigate("/login")
    }

    //eslint-disable-next-line
  }, []);

  async function authValidation() {
    try {
      await api.validateToken(auth);
      
    } catch (error) {
      if (error.response.status === 511) {
        localStorage.clear();
        navigate("/login");

        return Swal.fire({
          icon: "error",
          title: "Sessão expirada",
          text: "Por favor, faça login novamente.",
        });
      }
    }
  }
  return (
    <>
      <Header />
      <TermsDisplay />
    </>
  );
}
