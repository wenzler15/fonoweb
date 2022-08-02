import React from "react";

import NavBar from "../../components/navBar";

import { Container } from "./styles";

function EvaluationModels() {
  return (
    <Container>
      <NavBar />
      <section className="info">
        <div className="info-top">
          <h1>Nova avaliação</h1>
        </div>

        <form>
          <textarea type="text" placeholder="Adicione uma nova avaliação..."></textarea>

          <button type="submit">Salvar</button>
        </form>
      </section>
    </Container>
  );
}

export default EvaluationModels;
