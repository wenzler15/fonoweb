import React from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

function FinishedPayment({ setStep }) {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Assinatura realizada com sucesso</h1>

      <button className="gradient" onClick={() => navigate(-1)}>
        Fazer Login
      </button>
      <button onClick={() => setStep(1)}>Voltar Início</button>
    </Container>
  );
}

export default FinishedPayment;
